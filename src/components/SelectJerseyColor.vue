<script setup lang="ts">
import jersey_colors from "@/assets/data/jersey_colors.json";
import { usePlayerStore } from '@/stores/PlayerStore';
import { ref } from 'vue';
import Arrow from './icons/Arrow.vue';
import Shirt from "./icons/Shirt.vue";

const playerStore = usePlayerStore();

const isClick = ref(false);

const colors = jersey_colors.jersey_colors.map((color) => color.jersey_color);


const viewHandler = (event: MouseEvent) => {
	event.stopPropagation();
	isClick.value = !isClick.value;
};

const selectColor = (option: string) => {
	playerStore.setColor(option) 
	isClick.value = false; 
};

const closeDropdown = () => {
	isClick.value = false;
};

document.addEventListener('click', closeDropdown);

</script>

<template>
	<div class="container custom-cursor" @click.stop="viewHandler">
		<Shirt />
		<Arrow class="arrow"/>
		<div v-if="isClick" class="optionsColor">
			<div :class="['colorContainer', 'custom-cursor', { 'selectColor': playerStore.selectColor === color }]" v-for="color in colors" @click.stop="selectColor(color)">
				<div class="colorBox" :style="{backgroundColor: color}"/>
			</div>
		</div>
	</div>
</template>

<style scoped>
.container {
	height: 24px;
	position: relative;
	display: flex;
	background-color: white;
	border: 1px solid #F4F5F7;
	border-radius: 6px;
	align-items: center;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	z-index: 1;
	padding: 0 8px;
}

.container:hover > .arrow {
	opacity: 0.5;
}

.container:active > .arrow {
	opacity: .8;
}

.colorContainer {
	display: flex;
	white-space: inherit;
	padding: 2px;
	border: 2px solid white;
	border-radius: 50%;
}

.colorBox {
	width: 20px;
	height: 20px;
	border-radius: 50%;
	border: 0.5px solid #00000033;
}

.optionsColor {
	position: absolute;
	transform: translate(-125px, 70px);
	background-color: white;
	min-width: 156px;
	border-radius: 8px;
	max-height: 100px;
	overflow: auto;
	display: flex;
	padding: 8px;
	flex-wrap: wrap;
	cursor: default;
}

.colorContainer:hover{
	animation: signal 1s ease-in-out infinite;
}

.colorContainer:hover{
	border-color: rgba(44, 131, 233, 0.5);
}

.selectColor{
	border-color: #2C83E9;
}

@keyframes signal {
  0% {
    border-color: rgba(44, 131, 233, 1);
  }
  100% {
    transform: rgba(44, 131, 233, 0.1);
  }
}
</style>
