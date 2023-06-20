<template>
  <div class="game_selection" id="gameSelection">
    <div id="gameNotFound" style="display: none;">Ніхуя не знайшов</div>
    <div class="game">
      <div class="logo"></div>
      <p game="Apex Legends">Apex Legends</p>
      <div class="hover"></div>
      <div class="arrow"></div>
    </div>
    <div class="game">
      <div class="logo"></div>
      <p game="Cyberpunk 2077">Cyberpunk 2077</p>
      <div class="hover"></div>
      <div class="arrow"></div>
    </div>
    <div class="game">
      <div class="logo"></div>
      <p game="Metro 2033">Metro 2033</p>
      <div class="hover"></div>
      <div class="arrow"></div>
    </div>

    <a href="modListPage.html">
      <div class="game">
        <div class="logo"></div>
        <p game="Minecraft">Minecraft</p>
        <div class="hover"></div>
        <div class="arrow"></div>
      </div>
    </a>

    <div class="game">
      <div class="logo"></div>
      <p game="Overwatch 2">Overwatch 2</p>
      <div class="hover"></div>
      <div class="arrow"></div>
    </div>
    <div class="game">
      <div class="logo"></div>
      <p game="Red dead redemption 2">Red dead redemption 2</p>
      <div class="hover"></div>
      <div class="arrow"></div>
    </div>
    <div class="game">
      <div class="logo"></div>
      <p game="Sims 4">Sims 4</p>
      <div class="hover"></div>
      <div class="arrow"></div>
    </div>
    <div class="game">
      <div class="logo"></div>
      <p game="The witcher 3: Wild hunt">The witcher 3: Wild hunt</p>
      <div class="hover"></div>
      <div class="arrow"></div>
    </div>
    <div class="game">
      <div class="logo"></div>
      <p game="">Some game</p>
      <div class="hover"></div>
      <div class="arrow"></div>
    </div>
    <div class="game">
      <div class="logo"></div>
      <p game="">Some game</p>
      <div class="hover"></div>
      <div class="arrow"></div>
    </div>
    <div class="game">
      <div class="logo"></div>
      <p game="">Some game</p>
      <div class="hover"></div>
      <div class="arrow"></div>
    </div>
    <div class="game">
      <div class="logo"></div>
      <p game="">Some game</p>
      <div class="hover"></div>
      <div class="arrow"></div>
    </div>
    <div class="game">
      <div class="logo"></div>
      <p game="">Some game</p>
      <div class="hover"></div>
      <div class="arrow"></div>
    </div>
    <br>
    <br>
  </div>
</template>

<style scoped>

</style>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  // shorten-gameTitle.js
  let gameTitles = document.querySelectorAll('.game_selection .game p');

  gameTitles.forEach(function(titleElement) {
    let maxLength = 13;
    let title = titleElement.textContent;
    let filteredTitle = title.replace(/[:\s]/g, '');

    if (filteredTitle.length > maxLength) {
      let shortenedTitle = title.substring(0, maxLength) + '...';
      titleElement.textContent = shortenedTitle;

      let gameElement = titleElement.closest('.game');
      let fadeElement = document.createElement('div');
      fadeElement.classList.add('fade');
      gameElement.appendChild(fadeElement);
    }
  });
});
</script>