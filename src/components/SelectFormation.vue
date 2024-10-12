<script setup lang="ts">
import formationsData from "@/assets/data/formations.json";
import { usePlayerStore } from '@/stores/PlayerStore';
import { ref } from 'vue';
import Arrow from './icons/Arrow.vue';
import CoachMenuIcon from './icons/CoachMenuIcon.vue';

const playerStore = usePlayerStore();

const isClick = ref(false);

const formations = formationsData.formation_templates.map((item) => item.name);

const viewHandler = (event: MouseEvent) => {
	event.stopPropagation();
	isClick.value = !isClick.value;
};

const selectedInner = (option: string) => {
	playerStore.setFormation(option); 
	isClick.value = false; 
};

const closeDropdown = () => {
	isClick.value = false;
};

document.addEventListener('click', closeDropdown);

</script>

<template>
	<div class="container custom-cursor" @click.stop="viewHandler">
		<CoachMenuIcon />
		<div  class="text" >
			{{ playerStore.getSelectFormation || "Taktik Seç" }}
		</div>
		<Arrow class="arrow"/>
		<div class="options" v-if="isClick" >
			<div class="option" v-for="option in formations" @click.stop="selectedInner(option)">
				{{ option }}
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
}

.container:hover > .arrow {
	opacity: 0.5;
}

.container:active > .arrow {
	opacity: .8;
}

.text {
	font-size: 14px;
	font-weight: 400;
	line-height: 24px;
	letter-spacing: -0.006em;
	text-align: left;
	color: #A5ADBA;
	padding: 0 8px;
}

.options {
	position: absolute;
	transform: translate(0, 130px);
	background-color: white;
	min-width: 100%;
	border-radius: 8px;
	max-height: 220px;
	overflow: auto;
}

.option {
	display: flex;
	justify-content: start;
	padding: 8px;
	color: #505F79;
}

.option:hover {
	opacity: 0.5;
}

.option:active {
	opacity: 0.8;
}

::-webkit-scrollbar {
	width: 6px;
}

::-webkit-scrollbar-track {
	-webkit-box-shadow: white;
}

::-webkit-scrollbar-thumb {
	background: #1A202433;
	border: 1px solid white;
	border-radius: 4px;
}
</style>
