<template>
  <div class="logo"></div>
    <div class="title"><h2>My modifications</h2></div>
    <div class="content">
      <form @submit="onDeleteMods" class="mods_cont">
        <div v-for="mod in myMods" class="mod_cont" :key="mod.mod.id">
          <div class="game">{{ mod.game.title }} ></div>
          <div class="mod">
            <img :src="mod.mod.logo" class="icon">
            <div class="desc">
              <h3>{{ mod.mod.title }}</h3>
              <p><img src="../assets/images/icons/improve.png" alt="">
                {{ mod.mod.downloaded }} / {{ 5 }}
              </p>
            </div>
            <input type="checkbox"
                   :id="`m${mod.mod.id}`"
                   :value="mod.mod.id"
                   v-model="ids">
            <label :for="`m${mod.mod.id}`"></label>
            <div class="date">{{ mod.mod.uploadedAt }}</div>
          </div>
        </div>
        <input type="submit" id="formSubmit">
      </form>
    </div>
</template>

<style scoped>

</style>

<script setup>
import { onMounted, computed, ref } from "vue";
import { useStore } from "vuex";
const store = useStore();

const myMods = computed(() => store.getters.getMyMods);

let ids = ref([]);
function onDeleteMods(e) {
  e.preventDefault();
  store.dispatch("deleteMods", {isMyMods: true, ids: ids.value});
}

onMounted(() => {
  store.dispatch("fetchMyMods");
});
</script>