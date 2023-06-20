<template>
  <br>
  <div class="title">
    <img src="../assets/images/icons/modList_icon.png" alt="">
    <p>Mods for game {{ id }}</p>
    <div class="line"></div>
  </div>
  <div class="filters">
    <img src="../assets/images/icons/funnel_icon.png" alt="">
    <span noHover>Sort by:</span>
    <span>A-Z</span>
    <span class="active">Downloads</span>
    <span>Upload date</span>
  </div>
  <div class="list">
    <div id="modNotFound" style="display: none;">Ніхуя не знайшов</div>
    <div class="modBox">
      <div class="icon" style="background-image: url('../src/assets/images/materials/mods examples/647f25bc16564.png');"></div>
      <div class="modTitle">
        <h3>Plenty of Golems</h3>
        <p class="description">An exciting mod that brings a plethora of new golems to Minecraft! You'll be able to create small and medium-sized golems on your own, and while exploring the world, you may encounter true giants and ancient golems.</p>
      </div>
      <div class="info">
        <div class="version">1.19.2<div class="iconI"></div></div>
        <div class="downloads">1283<div class="iconI"></div></div>
        <div class="date">1 month ago<div class="iconI"></div></div>
        <div class="hoverElem"><span>Mod page</span></div>
      </div>
    </div>
    <div class="modBox">
      <div class="icon" style="background-image: url('../src/assets/images/materials/mods examples/63cff053b163d.png');"></div>
      <div class="modTitle">
        <h3>Dungeons Enchantments</h3>
        <p class="description">Modification transfers enchantments from Minecraft Dungeons. Some enchantments will allow you to deal more damage at full health, some will restore health upon killing a mob, and some will even provide damage resistance after defeating mobs.</p>
      </div>
      <div class="info">
        <div class="version">1.19.2<div class="iconI"></div></div>
        <div class="downloads">1007<div class="iconI"></div></div>
        <div class="date">6 days ago<div class="iconI"></div></div>
        <div class="hoverElem"><span>Mod page</span></div>
      </div>
    </div>
    <div class="modBox">
      <div class="icon"></div>
      <div class="modTitle">
        <h3>Some mod</h3>
        <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
      </div>
      <div class="info">
        <div class="version">1.19.2<div class="iconI"></div></div>
        <div class="downloads">1007<div class="iconI"></div></div>
        <div class="date">6 days ago<div class="iconI"></div></div>
        <div class="hoverElem"><span>Mod page</span></div>
      </div>
    </div>
    <div class="modBox">
      <div class="icon"></div>
      <div class="modTitle">
        <h3>Some mod</h3>
        <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
      </div>
      <div class="info">
        <div class="version">1.19.2<div class="iconI"></div></div>
        <div class="downloads">1007<div class="iconI"></div></div>
        <div class="date">6 days ago<div class="iconI"></div></div>
        <div class="hoverElem"><span>Mod page</span></div>
      </div>
    </div>
    <div class="modBox">
      <div class="icon"></div>
      <div class="modTitle">
        <h3>Some mod</h3>
        <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
      </div>
      <div class="info">
        <div class="version">1.19.2<div class="iconI"></div></div>
        <div class="downloads">1007<div class="iconI"></div></div>
        <div class="date">6 days ago<div class="iconI"></div></div>
        <div class="hoverElem"><span>Mod page</span></div>
      </div>
    </div>
    <div class="modBox">
      <div class="icon"></div>
      <div class="modTitle">
        <h3>Some mod</h3>
        <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
      </div>
      <div class="info">
        <div class="version">1.19.2<div class="iconI"></div></div>
        <div class="downloads">1007<div class="iconI"></div></div>
        <div class="date">6 days ago<div class="iconI"></div></div>
        <div class="hoverElem"><span>Mod page</span></div>
      </div>
    </div>
    <div class="modBox">
      <div class="icon"></div>
      <div class="modTitle">
        <h3>Some mod</h3>
        <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
      </div>
      <div class="info">
        <div class="version">1.19.2<div class="iconI"></div></div>
        <div class="downloads">1007<div class="iconI"></div></div>
        <div class="date">6 days ago<div class="iconI"></div></div>
        <div class="hoverElem"><span>Mod page</span></div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>

<script setup>
defineProps({
  id: {
    type: String,
    required: true
  }
});
</script>