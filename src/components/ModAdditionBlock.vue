<template>
  <div v-if="showModAdditionBlock" class="blur_block">
    <button @click="onClose">Close</button>
  </div>
</template>

<style scoped>

</style>

<script setup>
import { computed, ref } from "vue";
import { useStore } from "vuex";

const store = useStore();

const user = computed(() => {
  return store.getters.getUser;
});

const showModAdditionBlock = computed(() => {
  return store.getters.getShowPanel("modAdditionBlock");
});

function onClose() {
  store.dispatch("setShowPanel", {panel: "modAdditionBlock", show: false});
}

</script>