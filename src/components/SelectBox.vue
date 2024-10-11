<script setup lang="ts">
import { ref } from 'vue';
import Arrow from './icons/Arrow.vue';
import Shirt from './icons/Shirt.vue';
import CoachMenuIcon from './icons/CoachMenuIcon.vue';
import { usePlayerStore } from '@/stores/PlayerStore';

interface Props {
	optionType: "formation" | "color";
  options?: string[];
  selected?: (name: string) => void; 
}

const props = defineProps<Props>();

const playerStore = usePlayerStore();

const selectedFormation = ref(playerStore.getSelectFormation);

const isClick = ref(false);

const viewHandler = (event: MouseEvent) => {
	event.stopPropagation();
	isClick.value = !isClick.value;
}

const selectedInner = (formation: string) => {
	if (props.selected) props.selected(formation);
}

</script>

<template>
	<div class="container" @click="viewHandler">
			<Shirt v-if="optionType==='color'"/>
			<CoachMenuIcon v-if="optionType==='formation'"/>
		<div v-if="optionType==='formation'" class="text">
			{{ selectedFormation ? selectedFormation:"Taktik Seç" }}
		</div>
		<Arrow class="arrow"/>
	<div v-if="isClick && optionType==='formation'" class="options">
		<div class="option" v-for="option in options" @click="selectedInner(option)">{{option}}</div>
	</div>
	<div v-if="isClick && optionType==='color'" class="optionsColor">
		<div class="colorContainer" v-for="option in options" @click="selectedInner(option)">
			<div class="colorBox" :style="{backgroundColor: option}"/>
		</div>
	</div>
	</div>
	
</template>

<style scoped>
.container {
	height: 24px;
	position: relative;
	display: flex;
	cursor: pointer;
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
.container:active > .arrow{
	opacity: .8;
}

.text{
	font-size: 14px;
	font-weight: 400;
	line-height: 24px;
	letter-spacing: -0.006em;
	text-align: left;
	color: #A5ADBA;

	padding: 0 8px;
}

.colorContainer{
	display: flex;
	white-space: inherit
}
.colorBox{
	width: 20px;
	height: 20px;
	border-radius: 50%;
	border: 0.5px solid #00000033
}

.colorBox:hover{
	opacity: 0.6;
}

.optionsColor{
	position: absolute;
	transform: translate(-130px ,70px);
	background-color: white;
	min-width: 156px;
	border-radius: 8px;
	max-height: 100px;
	overflow: auto;
	display: flex;
	flex-wrap: wrap;
	padding: 4px;
}
.optionsColor > :not(:last-child){
	margin: 4px;
}

.options {
	position: absolute;
	transform: translate(0 ,130px);
	background-color: white;
	min-width: 100%;
	border-radius: 8px;
	max-height: 220px;
	overflow: auto;
}
.option{
	display: flex;
	justify-content: start;
	padding: 8px;
	color: #505F79;
}
.option:hover{
	opacity: .5;
}
.option:active{
	opacity: .8;
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