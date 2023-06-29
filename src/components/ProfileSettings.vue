<template>
  <div class="logo"></div>
    <div class="title"><h2>Profile settings</h2></div>
    <div class="content">
      <div class="container">
        <div class="top_block">
          <div class="title">Password <a @click="onSett(0)">update</a></div>
          <div class="desc">We recommend periodically updating your password to enhance the security of your account.</div>
        </div>
        <div class="bottom_block" id="passChangeBlock">
          <br>
          <label @click="onSett(0)" for="passwordOpen">cancel</label>
        </div>
      </div>
      <div class="container">
        <div class="top_block"></div>
        <div class="bottom_block">fdf</div>
      </div>
      <div class="container">
        <div class="top_block"></div>
        <div class="bottom_block">dasd</div>
      </div>
    </div>
</template>

<style scoped>

</style>

<script setup>
import { onMounted } from 'vue';

const scriptPath = `${import.meta.env.BASE_URL}/js/betterScrollbar.js`;

const script = document.createElement('script');

onMounted(() => {
  script.src = scriptPath;
  document.head.appendChild(script);
});

function onSett(block){
  let pass = document.getElementById('passChangeBlock')
  if (block === 0){
    if (pass.style.height === '100px'){
      pass.style.height = '300px';
    } else {
      pass.style.height = '100px';
    }
  }
}
</script>