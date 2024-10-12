<script setup>
import AppHeader from '@/components/AppHeader.vue';
import FootballArea from '@/components/FootballArea.vue';
import FootballAreaHeader from '@/components/FootballAreaHeader.vue';
import UserList from '@/components/UserList.vue';
import { usePlayerStore } from '@/stores/PlayerStore';

const playerStore = usePlayerStore()

</script>

<template>
  <AppHeader/>
  <main>
    <div>
      <FootballAreaHeader />
      <FootballArea/>
      <div v-if="playerStore.isSubmit">
        Ev sahibi takımın formasyonu başarıyla kaydedilmiştir. 
        <br/>
        Sayfayı kapatabilirsiniz.</div>
    </div>
    <UserList v-if="!playerStore.isSubmit"/>
  </main>
</template>


<style scoped>
  main{
    display: flex;
    justify-content: center;
  }

  div{
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: -0.006em;
    text-align: center;
  }
</style>