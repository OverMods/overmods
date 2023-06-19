<script setup>
</script>

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
  </div>
</template>

<style scoped>
</style>
