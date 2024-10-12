<script setup lang="ts">
import { usePlayerStore } from "@/stores/PlayerStore";
import Scoutium from "./icons/Scoutium.vue";
import Button from "./Button.vue";
import { computed } from "vue";

const playerStore = usePlayerStore();

const submitFormation = () => {
  playerStore.setIsSubmit()
}

const disabledController = computed(() => {
  const color = playerStore.getSelectColor
  const status = playerStore.getRoster.length === 11 && color !== "";
  return !status;
})

</script>

<template>
  <header>
    <Scoutium />
    <Button
      class="custom-cursor"
      @click="submitFormation" 
      :disabled="disabledController">
      <span class="buttonText" >
        {{playerStore.isSubmit ? "Geri Al" : "Gönder"}}
      </span>
    </Button>
  </header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #031737;
  position: static;
  top: 0;
  width: 100%;
  height: min-content;
  padding: 16px 16px;
}

button {
  color: white;
  background-color: #2c83e9;
  padding:8px 16px;
  gap: 2px;
  border-radius: 6px;
  opacity: 0.5px;
  border: 0;
}

button:hover{
  opacity: 0.5;
}

.buttonText{
  font-size: 14px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.006em;
  text-align: left;
}

</style>
