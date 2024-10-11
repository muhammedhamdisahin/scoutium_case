<script setup lang="ts">
import formations from "@/assets/data/formations.json";
import jersey_colors from "@/assets/data/jersey_colors.json";
import { usePlayerStore } from "@/stores/PlayerStore";
import { ref } from "vue";
import Area from "./icons/Area.vue";
import Sakaryaspor from "./icons/Sakaryaspor.vue";
import Turgutluspor from "./icons/Turgutluspor.vue";
import SelectBox from "./SelectBox.vue";

const playerStore = usePlayerStore();
const options = formations.formation_templates.map((item) => item.name);
const colors = jersey_colors.jersey_colors.map((color) => color.jersey_color);

const dropHandler = (event: DragEvent) => {
  const playerID = event.dataTransfer?.getData("playerID");
  const dropPlayer = ref(playerStore.getPlayer(Number(playerID)));
  console.log(dropPlayer);
};

const selectFormation = (name: string) => {
  playerStore.setFormation(name);
};

const selectColor = (color: string) => {
  playerStore.setColor(color);
};
</script>

<template>
  <div>
    <div class="teamHeaderContainer">
      <div class="teamContainer">
        <Sakaryaspor />
        <div>Sakaryaspor</div>
      </div>
      <div class="skorBox">
        <span class="skorText"> 4 : 3 </span>
      </div>
      <div class="teamContainer">
        <div>Turgutluspor</div>
        <Turgutluspor />
      </div>
    </div>
    <div class="areaContainer">
      <div class="selectContainer">
        <SelectBox option-type="formation" :options="options" :selected="selectFormation" />
        <div>
          <SelectBox option-type="color" :options="colors" :selected="selectColor" />
        </div>
      </div>
      <Area alt="area" />
    </div>
  </div>
</template>

<style scoped>
.areaContainer {
  position: relative;
}

.selectContainer {
  position: absolute;
  display: flex;
  width: 95%;
  justify-content: space-between;
  padding: 8px;
}

.skorBox {
  background: #fafbfc;
  border: 1px solid #f4f5f7;
  border-radius: 30px;
}

.skorText {
  font-size: 14px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.006em;
  text-align: center;
  padding: 6px;
  color: #344563;
}

.teamHeaderContainer {
  display: flex;
  align-items: center;
  justify-content: space-between;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.teamContainer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
}

.teamContainer > :not(:last-child) {
  padding-right: 4px;
}
</style>
