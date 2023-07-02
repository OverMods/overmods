<template>
  <div class="trending_gallery" @wheel="galleryScroll">
    <div v-for="trend in trends" class="slide">
      <router-link :to="`/game/${getGameById(trend.mod.game)?.shortName }/mod/${trend.mod.id}`">
        <h2>{{ getGameById(trend.mod.game)?.title }}</h2>
        <p>{{ trend.mod.title }}</p>
        <span>hover here</span>
        <div v-if="trend.mod.logo" over class="picture" :style="`background-image: url('${trend.mod.logo}')`"></div>
        <div v-else over class="picture"></div>
        <button></button>
      </router-link>
    </div>
  </div>
</template>

<style scoped>

</style>

<script setup>
import { computed, onUpdated } from "vue";
import { useStore } from "vuex";
import simpleSlider from "../simpleSlider.js";
import { useRouter } from "vue-router";
const store = useStore();
const router = useRouter();

const getGameById = computed(() => {
  return store.getters.getGameById;
});
const trends = computed(() => {
  return store.getters.getTrends;
});

store.dispatch("fetchGameList");
store.dispatch("fetchTrends");

router.afterEach((to) => {
  if (to.path === "/") {
    window.addEventListener('load', () => {
      simpleSlider();
    });
  }
  return true;
});

onUpdated(() => {
  simpleSlider();
});
</script>

