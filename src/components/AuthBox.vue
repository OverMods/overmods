<template>
  <div class="auth_box">
    <div class="fade"></div>
    <div class="more_box">
      <img src="../assets/images/icons/more.png" alt="">
    </div>
    <div class="login">
      <img src="../assets/images/icons/login_icon.png" alt="" class="login_icon">
      <span v-if="isLoggedIn" @click="logout()">Log out</span>
      <span v-else @click="login()">Log in</span>
    </div>
  </div>
</template>

<style scoped>

</style>

<script setup>
import { onMounted, computed, ref } from "vue";
import { useStore } from "vuex";
const store = useStore();

const isLoggedIn = computed(() => {
  return store.getters.isLoggedIn;
});

function login() {
  store.dispatch("setShowPanel", {panel: "login", show: true});
}

function logout() {
  store.dispatch("logout");
}

onMounted(() => {
  store.dispatch("fetchLogin");
});
</script>