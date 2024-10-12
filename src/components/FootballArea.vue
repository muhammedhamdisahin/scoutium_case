<script setup lang="ts">
import formations from "@/assets/data/formations.json";
import { usePlayerStore } from "@/stores/PlayerStore";
import type { Player } from "@/types/UserList";
import { computed } from "vue";
import Area from "./icons/Area.vue";
import PositionEmpty from "./icons/PositionEmpty.vue";
import PositionFilled from "./icons/PositionFilled.vue";

const playerStore = usePlayerStore();

const selectedFormation = computed(() =>
  formations.formation_templates.find(
    (form) => form.name === playerStore.getSelectFormation
  )
);

const getPositionPlayer = (positionID: number) => {
  const roster = playerStore.getRoster;
  const player = roster.find((item) => item.positionID === positionID);
  if (player) return playerStore.getPlayer(player.playerID);
  else return false;
};

const dropHandler =  (event: DragEvent,positionID: number) => {
  const playerID = event.dataTransfer?.getData("playerID");
  if (playerID) {
    playerStore.setRoster({ positionID: positionID, playerID: Number(playerID) });
  }
};

</script>

<template>
  <div>
    <div class="areaContainer">
      <Area alt="area" />
      <div
        class="position"
        v-for="position in selectedFormation?.positions"
        :key="position.id"
        :style="{ right: position.x * 100 - 11 + '%', top: position.y * 100 - 2 + '%' }"
        @dragover.prevent
        @drop="dropHandler($event,position.id)"
      >
        <PositionEmpty v-if="!getPositionPlayer(position.id)" />
        <PositionFilled v-if="!!getPositionPlayer(position.id)" :player="(getPositionPlayer(position.id) as Player)" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.areaContainer > .position {
  position: absolute;
}

.areaContainer {
  position: relative;
  display: flex;
}
</style>
