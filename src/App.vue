<template>
  <div class="side_menu">
    <div class="logo_box">
      <img src="./assets/images/icons/logo.png" alt="logo" class="logo">
      <h3>OverMods</h3>
      <hr class="underLogo_line">
      <input class="search_box" id="gameSearch" placeholder="Search game">
    </div>
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
    <div class="auth_box">
      <div class="fade"></div>
      <div class="more_box">
        <img src="./assets/images/icons/more.png" alt="">
      </div>
      <div class="login">
        <img src="./assets/images/icons/login_icon.png" alt="" class="login_icon">
        <span>Log in</span>
      </div>
    </div>
  </div>

  <div class="top_panel">
    <div class="search_container">
      <input type="text" class="search" placeholder="Search is unavailable on the homepage" disabled>
      <img src="./assets/images/icons/search_icon.png" alt="" class="search_icon">
    </div>
    <div class="theme">
      <div class="dark">dark
        <img class="icon" src="./assets/images/icons/moon_icon.png" alt="">
      </div>
      <div class="light">light
        <img class="icon" src="./assets/images/icons/sun_icon.png" alt="">
      </div>
    </div>
  </div>

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

onMounted(() => {
  // betterScrollbar.js
  let content = document.querySelector('.content');
  let scrollbar = document.createElement('div');
  let thumb = document.createElement('div');
  let isDragging = false;
  let startPosition;
  let startScrollTop;

  scrollbar.classList.add('scrollbar');
  thumb.classList.add('thumb');

  scrollbar.appendChild(thumb);
  content.appendChild(scrollbar);

  updateScrollbar();

  content.addEventListener('scroll', function() {
    updateScrollbar();
  });

  window.addEventListener('resize', function() {
    updateScrollbar();
  });

  thumb.addEventListener('mousedown', function(e) {
    isDragging = true;
    startPosition = e.clientY;
    startScrollTop = content.scrollTop;
  });

  document.addEventListener('mousemove', function(e) {
    if (isDragging) {
      let deltaY = e.clientY - startPosition;
      let scrollDelta = (deltaY / scrollbar.offsetHeight) * content.scrollHeight;
      content.scrollTop = startScrollTop + scrollDelta;
    }
  });

  document.addEventListener('mouseup', function() {
    isDragging = false;
  });

  function updateScrollbar() {
    let scrollTop = content.scrollTop;
    let maxScrollTop = content.scrollHeight - content.clientHeight;

    let scrollbarHeight = content.clientHeight * 0.92;
    scrollbar.style.height = `${scrollbarHeight}px`;

    let thumbHeight = (content.clientHeight / content.scrollHeight) * scrollbarHeight;
    thumb.style.height = `${thumbHeight}px`;

    if (scrollTop >= maxScrollTop) {
      thumb.style.top = `${scrollbarHeight - thumbHeight}px`;
    } else {
      let thumbTop = (scrollTop / maxScrollTop) * (scrollbarHeight - thumbHeight);
      thumb.style.top = `${thumbTop}px`;
    }

    if (content.scrollHeight <= content.clientHeight) {
      scrollbar.classList.add('scrollbar-hidden');
    } else {
      scrollbar.classList.remove('scrollbar-hidden');
    }
  }
  
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
})
</script>