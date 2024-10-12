import type { Player } from "@/types/UserList";
import { defineStore } from "pinia";
import players from "@/assets/data/players.json";
interface State {
  players: Player[];
  selectFormation: string;
  selectColor: string;
  roster: Array<{ positionID: number; playerID: number }>;
  isSubmit: boolean;
}

export const usePlayerStore = defineStore("playerStore", {
  state: (): State => ({
    players: players.players,
    selectFormation: "",
    selectColor: "",
    roster: [],
    isSubmit: false,
  }),
  getters: {
    getIsSubmit(state) {
      return state.isSubmit;
    },
    getSelectFormation(state) {
      return state.selectFormation;
    },
    getSelectColor(state) {
      return state.selectColor;
    },
    getRoster(state) {
      return state.roster;
    },
    getFilterPlayers(state) {
      return state.players.filter((player) => {
        const result = state.roster.filter((item) => item.playerID === player.player.id);
        return result.length === 0;
      });
    },
  },
  actions: {
    getPlayer(id: number) {
      return this.players.find((player) => player.player.id === id);
    },
    setFormation(formation: string) {
      this.selectFormation = formation;
    },
    setColor(color: string) {
      this.selectColor = color;
    },
    setRoster({ positionID, playerID }: { positionID: number; playerID: number }, action: "add" | "remove" = "add") {
      const existingPlayerIndex = this.roster.findIndex((item) => item.playerID === playerID);
      const existingPositionIndex = this.roster.findIndex((item) => item.positionID === positionID);

      const newHerePlayer = this.roster[existingPlayerIndex];
      const justHerePlayer = this.roster[existingPositionIndex];

      if (action === "add") {
        if (existingPlayerIndex === -1 && existingPositionIndex === -1) {
          // Yeni ekledi
          this.roster.push({ positionID, playerID });
        } else if (existingPlayerIndex !== -1) {
          // Oyuncu zaten var, pozisyonunu güncelledi
          if (existingPositionIndex === -1) {
            newHerePlayer.positionID = positionID; // Boş yere geçti
          } else {
            // Yer değiştirdi

            this.roster[existingPlayerIndex] = {
              positionID: justHerePlayer.positionID,
              playerID: newHerePlayer.playerID,
            };
            this.roster[existingPositionIndex] = {
              positionID: newHerePlayer.positionID,
              playerID: justHerePlayer.playerID,
            };
          }
        } else if (existingPositionIndex !== -1) {
          // Listeden üstüne koydu
          this.roster = this.roster.filter((item) => item.playerID !== justHerePlayer.playerID);
          this.roster.push({ positionID, playerID });
        }
      } else if (action === "remove") {
        this.roster = this.roster.filter((item) => item.playerID !== playerID);
      }
    },
    setIsSubmit() {
      this.isSubmit = !this.isSubmit;
    },
  },
});
