<script setup>
import { usePlayerStore } from "@/stores/PlayerStore";
import Dragable from "./icons/Dragable.vue";

const playerStore = usePlayerStore();

const userDragHandler = (event,item) =>{
	event.dataTransfer.effectAllowed = "move";
	event.dataTransfer.setData("playerID",item)

};
</script>

<template>
  <div class="users">
    <div
      class="user"
      v-for="(user, index) in playerStore.players"
      draggable="true"
      @dragstart="userDragHandler($event,user.player.id)"
    >
      <div class="userLeftTab">
        <div class="arrangement">
          {{ index + 1 }}
        </div>
        <div class="name">
          {{ user.player.display_name }}
        </div>
      </div>
      <div>
        <Dragable />
      </div>
    </div>
  </div>
</template>

<style scoped>
.users {
  transform: translate(16px, 70px);
}
.users > :not(:last-child) {
  margin-bottom: 8px;
}

.user {
  display: flex;
  padding: 8px;
  justify-content: space-between;
  min-width: 252px;
}
.user:hover {
  background-color: #f7f7f7;
  cursor:pointer;
}

.userLeftTab {
  display: flex;
}

.arrangement {
  margin-right: 8px;
  width: 24px;
  height: 24px;
  background-color: #f4f5f7;
  border-radius: 8px;
  text-align: center;
}

.name {
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.006em;
  text-align: left;
}
</style>
