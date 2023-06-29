<template>
  <SideMenu></SideMenu>
  <TopPanel></TopPanel>

  <AuthBlock></AuthBlock>
  <ProfileBlock></ProfileBlock>

  <div class="background">
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
</style>

<script setup>
import { onMounted } from "vue";
import SideMenu from "./components/SideMenu.vue";
import TopPanel from "./components/TopPanel.vue";
import AuthBlock from "./components/AuthBlock.vue";
import ProfileBlock from "./components/ProfileBlock.vue";

const scriptPath = `${import.meta.env.BASE_URL}/js/betterScrollbar.js`;

const script = document.createElement('script');

onMounted(() => {
  script.src = scriptPath;
  document.head.appendChild(script);
});
</script>