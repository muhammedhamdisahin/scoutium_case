<script setup lang="ts">
import Scoutium from "./icons/Scoutium.vue";
</script>

<template>
  <header>
    <Scoutium />

    <button>
      <span class="buttonText">
        Gönder
      </span>
    </button>
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
  cursor: pointer;
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
