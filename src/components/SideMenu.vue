<template>
  <div class="side_menu">
    <div class="logo_box">
      <img src="../assets/images/icons/logo.png" alt="logo" class="logo">
      <h3>OverMods</h3>
      <hr class="underLogo_line">
      <input class="search_box" id="gameSearch" placeholder="Search game">
    </div>
    <GameSelection></GameSelection>
    <AuthBox></AuthBox>
  </div>
</template>

<style scoped>

</style>

<script setup>
import { onMounted } from "vue";
import GameSelection from "./GameSelection.vue";
import AuthBox from "./AuthBox.vue";

onMounted(() => {
  // gameSearch.js
  let input = document.getElementById('gameSearch');
  let games = document.querySelectorAll(".game");
  let gameNotFound = document.getElementById('gameNotFound');

  input.addEventListener('input', function() {
    let searchTerm = input.value.toLowerCase();
    let gameFound = false;

    games.forEach(function(game) {
      let gameTitle = game.querySelector("p").getAttribute("game");

      if (gameTitle.toLowerCase().includes(searchTerm)) {
        game.style.display = 'flex';
        gameFound = true;
      } else {
        game.style.display = 'none';
      }
    });

    if (gameFound) {
      gameNotFound.style.display = 'none';
    } else {
      gameNotFound.style.display = 'block';
    }
  });
});
</script>