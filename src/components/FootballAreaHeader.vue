<script setup>
import { usePlayerStore } from '@/stores/PlayerStore';
import Sakaryaspor from './icons/Sakaryaspor.vue';
import Turgutluspor from './icons/Turgutluspor.vue';
import SelectFormation from './SelectFormation.vue';
import SelectJerseyColor from './SelectJerseyColor.vue';

const playerStore = usePlayerStore()

</script>

<template>
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
    <div class="areaHeaderContainer" v-if="!playerStore.isSubmit">
      <div class="selectContainer">
        <SelectFormation  />
        <div>
          <SelectJerseyColor  />
        </div>
      </div>
	</div>
</template>

<style scoped>

.selectContainer {
  display: flex;
  width: 100%;
  justify-content: space-between;
  background: radial-gradient(circle at center, #C1F0BA, #9CDD91);
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

.areaHeaderContainer {
  padding-right:16px;
}

</style>