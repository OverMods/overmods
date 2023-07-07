<template>
  <div class="top_panel">
    <div class="left_side">
      <button v-if="showBackButton" @click="goBack" id="backButton"><img src="../assets/images/icons/arrow_back.png" alt=""></button>
      <div class="search_container">
        <input type="text" class="search" placeholder="Search is unavailable on the homepage" disabled>
        <img src="../assets/images/icons/search_icon.png" alt="" class="search_icon">
      </div>
    </div>
    <div class="right_side">
      <div class="theme">
        <div class="dark">dark
          <img class="icon" src="../assets/images/icons/moon_icon.png" alt="">
        </div>
        <div class="light">light
          <img class="icon" src="../assets/images/icons/sun_icon.png" alt="">
        </div>
      </div>
        <div class="profile" @click="onProfile" v-if="isLoggedIn">
          Profile
          <ProfileAvatar :user="user" type="profile_icon"></ProfileAvatar>
        </div>
    </div>
	</div>
</template>

<style scoped>

</style>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from 'vue-router';
import ProfileAvatar from "./ProfileAvatar.vue";

const route = useRoute();
const router = useRouter();

const showBackButton = computed(() => route.name === 'ModListView' || route.name === 'ModView');

const goBack = () => {
  if (route.name === 'ModView') {
    router.push({ name: 'ModListView' });
  } else {
    router.push({ name: 'MainView' });
  }
};
const store = useStore();

const isLoggedIn = computed(() => {
  return store.getters.isLoggedIn;
});
const user = computed(() => {
  return store.getters.getUser;
})
function onProfile() {
  store.dispatch("setShowPanel", {panel: "profile", show: true});
}
</script>