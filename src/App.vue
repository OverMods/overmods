<template>
  <SideMenu v-if="!hidden.includes($route.name)"></SideMenu>
  <TopPanel v-if="!hidden.includes($route.name)"></TopPanel>

  <AuthBlock></AuthBlock>
  <ProfileBlock></ProfileBlock>

  <div class="background" v-if="!hidden.includes($route.name)">
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
  <router-view v-else></router-view>
</template>

<style scoped>
</style>

<script setup>
import { onMounted } from "vue";
import SideMenu from "./components/SideMenu.vue";
import TopPanel from "./components/TopPanel.vue";
import AuthBlock from "./components/AuthBlock.vue";
import ProfileBlock from "./components/ProfileBlock.vue";
import installScrollbar from "./betterScrollbar.js";

const hidden = ['AdminView'];

onMounted(() => {
  installScrollbar();
});
</script>