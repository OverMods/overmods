<template>
  <div class="side_menu">
    <div class="logo_box">
      <img src="../assets/images/icons/logo.png" alt="logo" class="logo">
      <h3>OverMods</h3>
      <hr class="underLogo_line">
      <input class="search_box" id="gameSearch" placeholder="Search game" @input="onSearch">
    </div>
    <GameSelection ref="gameSelection"></GameSelection>
    <AuthBox></AuthBox>
  </div>
</template>

<style scoped>

</style>

<script setup>
import { ref } from "vue";
import GameSelection from "./GameSelection.vue";
import AuthBox from "./AuthBox.vue";

const gameSelection = ref(null);
function onSearch(event) {
  gameSelection.value.doSearch(event.target.value);
}
</script>