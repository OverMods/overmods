<template>
  <div class="trending_gallery" @wheel="galleryScroll">
    <div v-for="trend in trends" class="slide" :key="trend.mod.id">
      <router-link :to="`/game/${getGameById(trend.mod.game)?.shortName }/mod/${trend.mod.id}`">
        <h2>{{ getGameById(trend.mod.game)?.title }}</h2>
        <p>{{ trend.mod.title }}</p>
        <span>hover here</span>
        <div v-if="trend.mod.logo" over class="picture" :style="`background-image: url('${trend.mod.logo}')`"></div>
        <div v-else over class="picture"></div>

        <img v-if="trend.mod.logo" @load="onImageLoad($event, trend.mod.id)"
             :src="trend.mod.logo" alt="" style="display: none"/>
        <img v-else @load="onImageLoad($event, trend.mod.id)"
             src="../assets/images/materials/game%20previews/overwatch.png" alt="" style="display: none"/>
        <button :style="`background-color: #${colors[trend.mod.id]};`"></button>
      </router-link>
    </div>
  </div>
</template>

<style scoped>

</style>

<script setup>
import { computed, ref, onUpdated } from "vue";
import { useStore } from "vuex";
import simpleSlider from "../simpleSlider.js";
import { useRouter } from "vue-router";
import ColorThief from "colorthief";

const store = useStore();
const router = useRouter();
const colorThief = new ColorThief();

const getGameById = computed(() => {
  return store.getters.getGameById;
});
const trends = computed(() => {
  return store.getters.getTrends;
});

const colors = ref({});
function onImageLoad(e, id) {
  const rgb = colorThief.getColor(e.target);
  if (rgb) {
    colors.value[id] = rgb[0].toString(16) + rgb[1].toString(16) + rgb[2].toString(16);
    console.log(rgb[0].toString(16) + rgb[1].toString(16) + rgb[2].toString(16));
  }
}

store.dispatch("fetchGameList");
store.dispatch("fetchTrends");

onUpdated(() => {
  simpleSlider();
});
</script>

