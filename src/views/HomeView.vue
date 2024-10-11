<script setup>
import AppHeader from '@/components/AppHeader.vue';
import FootballArea from '@/components/FootballArea.vue';
import UserList from '@/components/UserList.vue';
</script>

<template>
  <AppHeader/>
  <main>
      <FootballArea/>
      <UserList />
  </main>
</template>


<style scoped>
  main{
    display: flex;
    justify-content: center;
  }
</style>