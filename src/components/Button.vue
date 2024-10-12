<script setup  lang="ts">
import { defineEmits, defineProps } from 'vue';

const props = defineProps({
  disabled: {
	type: Boolean,
	default: false
  }
});

const emit = defineEmits(['click']);

const handleClick = () => {
  if (!props.disabled) {
	emit('click');
  }
};
</script>

<template>
	<button 
	  :class="['custom-button', { 'is-disabled': disabled }]" 
	  @click="handleClick" 
	  :disabled="disabled"
	>
	  <slot></slot>
	</button>
</template>
  


<style scoped>
.custom-button {
padding: 10px 20px;
background-color: #007bff;
border: none;
color: white;
border-radius: 5px;
cursor: pointer;
font-size: 16px;
transition: background-color 0.3s;
}

.custom-button:hover {
background-color: #0056b3;
}

.is-disabled {
background-color: #ccc;
cursor: not-allowed;
}
</style>
