<template>
  <br>
  <div class="title">
    <img src="../assets/images/icons/modList_icon.png" alt="">
    <p>Mods for game {{ game?.title }}</p>
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
    <router-link v-if="mods?.length > 0"
                 class="modBox"
                 v-for="mod in mods"
                 :key="mod.id"
                 :to="`/game/${game.shortName}/mod/${mod.id}`">
      <div class="icon" :style="`background-image: url(${mod.logo});`"></div>
      <div class="modTitle">
        <h3>{{ mod.title }}</h3>
        <!--<p class="description">{{ mod.description }}</p>-->
        <p class="description" v-html="mod.descriptionHtml"></p>
      </div>
      <div class="info">
        <div class="version">{{ mod.gameVersion }}<div class="iconI"></div></div>
        <div class="downloads">{{ mod.downloaded }}<div class="iconI"></div></div>
        <div class="date">{{ relativeDate(mod.uploadedAt) }}<div class="iconI"></div></div>
        <div class="hoverElem"><span>Mod page</span></div>
      </div>
    </router-link>
    <div v-else id="modNotFound">
      <h3>Oops!</h3>
      <h3>It seems like we've entered uncharted territory.</h3>
      <p>Our search page couldn't find what you were looking for. But don't worry, we won't give up just yet! Our team is constantly working to expand our database and bring you the latest and greatest modifications. In the meantime, feel free to explore other sections of our website or refine your search. Stay curious, and let's embark on a new quest together!</p>
      <router-link to="/"><a>Back to main page</a></router-link>
    </div>
  </div>
</template>

<style scoped>

</style>

<script setup>
import { useRoute } from "vue-router";
import { onMounted, computed, watch } from "vue";
import { useStore } from "vuex";
import { relativeDate } from "../utils.js";

const route = useRoute();
const store = useStore();

const game = computed(() => {
  return store.getters.getGame;
});

const mods = computed(() => {
  return store.getters.getMods;
});

defineProps({
  shortName: {
    type: String,
    required: true
  }
});

watch(() => route.params.shortName, () => {
  store.dispatch("fetchModList", route.params.shortName);
}, {
  immediate: true
});

onMounted(() => {
  //store.dispatch("fetchModList", route.params.shortName);
});
</script>