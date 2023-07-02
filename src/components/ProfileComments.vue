<template>
  <div class="logo"></div>
    <div class="title"><h2>My comments</h2></div>
    <div class="content">
      <div class="comm_cont">
        <form onsubmit="return false">
          <div class="comm_block">
            <div class="comm_dirr">Minecraft > Plenty of Golems</div>
              <div class="comm_body">
                <div class="comm_text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec dui mattis, tristique eros sed, tincidunt velit. Donec tincidunt sollicitudin mi, vel aliquet lectus tempus in. Mauris a nulla auctor, lobortis diam eu, cursus risus. Proin malesuada semper tristique. Pellentesque ut nulla at tortor congue volutpat. Nam fringilla orci eget erat fringilla, ac interdum turpis auctor. Mauris scelerisque mi nec augue placerat, ac convallis justo tempor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque et diam eget enim ullamcorper convallis sed id quam. Aliquam a metus nec mi semper fermentum. Suspendisse potenti. Sed efficitur consectetur velit, in ultrices neque cursus vel. Vestibulum consectetur auctor purus, ac convallis sem lobortis sed. Proin eget tempor elit, at placerat lectus. Fusce faucibus nisi eu sapien tempus, et sagittis metus feugiat.
                  <div class="comm_date">2 days ago</div>
                </div>
                <input type="checkbox" id="c1">
                <label for="c1"></label>
              </div>
          </div>
          <div class="comm_block">
            <div class="comm_dirr">Minecraft > Plenty of Golems</div>
              <div class="comm_body">
                <div class="comm_text">
                  Some medium-size comment for test test test.
                  <div class="comm_date">2 days ago</div>
                </div>
                <input type="checkbox" id="c2">
                <label for="c2"></label>
              </div>
          </div>
          <div class="comm_block">
            <div class="comm_dirr">Witcher 3: Wild Hunt > Some very very very long name of the mod for game with long name also</div>
              <div class="comm_body">
                <div class="comm_text">
                  Some small comment
                  <div class="comm_date">2 days ago</div>
                </div>
                <input type="checkbox" id="c3">
                <label for="c3"></label>
              </div>
          </div>
          <input type="submit" id="formSubmit">
        </form>
      </div>
    </div>
</template>

<style scoped>

</style>

<script setup>
import { onMounted } from 'vue';
import installScollbar from "../betterScrollbar.js";

onMounted(() => {
  installScollbar();
})

</script>