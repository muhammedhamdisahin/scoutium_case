<script setup>
import { usePlayerStore } from '@/stores/PlayerStore';

const playerStore = usePlayerStore();
</script>


<template>
  <svg width="81" height="63" viewBox="0 0 81 63" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g opacity="0.5">
      <rect x="16.5469" y="8.0752" width="47" height="47" rx="23.5" fill="#2C83E9" fill-opacity="0.15" />
      <rect
        x="16.5469"
        y="8.0752"
        width="47"
        height="47"
        rx="23.5"
        stroke="#2C83E9"
        stroke-miterlimit="14.3356"
        stroke-dasharray="8 8"
      />
      <g opacity="1">
        <g clip-path="url(#clip0_228_1686)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M36.4014 22.0768C36.5785 24.4658 39.7271 25.075 40.0481 25.075C40.4073 25.075 43.5313 24.7834 43.6926 22.086L43.6981 22.0845C43.6981 22.0845 46.7038 23.6237 47.0756 23.7968C47.4489 23.9606 50.0469 25.1611 50.0469 27.8078V33.0531C50.0469 33.4075 49.7596 33.6949 49.4051 33.6949H47.7294C47.3749 33.6949 47.0876 33.9822 47.0876 34.3367V40.4334C47.0876 40.7879 46.8002 41.0752 46.4458 41.0752H33.648C33.2935 41.0752 33.0062 40.7879 33.0062 40.4334V34.3367C33.0062 33.9822 32.7189 33.6949 32.3644 33.6949H30.6887C30.3342 33.6949 30.0469 33.4075 30.0469 33.0531V27.8078C30.0469 25.2555 32.4642 24.0689 32.9701 23.8206C32.9888 23.8114 33.0049 23.8035 33.0182 23.7968C33.39 23.6107 36.3957 22.0752 36.3957 22.0752L36.4014 22.0768Z"
            :fill="playerStore.selectColor ? playerStore.selectColor : 'white' "
          />
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="clip0_228_1686">
        <rect width="20" height="19" fill="white" transform="translate(30.0469 22.0752)" />
      </clipPath>
    </defs>
  </svg>
</template>
