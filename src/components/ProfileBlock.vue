<template>
  <div v-if="showProfile" class="blur_block">
    <div class="profile">
      <div class="side">
        <div class="short_info">
          <img :src="user?.avatar" alt="" v-if="user?.avatar !== null">
          <img src="../assets/images/icons/default_profile_avatar.png" v-else>
          <div class="role" :role="user?.role">{{ user?.role }}</div>
          {{ user?.username }}
        </div>
        <div class="list">
          <div @click="selectMenu(MENU_SETTINGS)">
            <img src="../assets/images/icons/sett_icon.png" alt="" class="icon">
            <p>Settings</p>
            <img src="../assets/images/icons/arrow.png" alt="" class="arrow">
          </div>
          <div @click="selectMenu(MENU_COMMENTS)">
            <img src="../assets/images/icons/myComms_icon.png" alt="" class="icon">
            <p>My comments</p>
            <img src="../assets/images/icons/arrow.png" alt="" class="arrow">
          </div>
          <div @click="selectMenu(MENU_MODIFICATIONS)"
               :class="user?.role !== 'ADMIN' && user?.role !== 'MODDER' ? 'disabled' : ''">
            <img src="../assets/images/icons/myMods_icon.png" alt="" class="icon">
            <p>My modifications</p>
            <img src="../assets/images/icons/arrow.png" alt="" class="arrow">
          </div>
          <div @click="selectMenu(MENU_ADMIN)" v-if="user?.role == 'ADMIN'">
            <img src="../assets/images/icons/admin_icon.png" alt="" class="icon">
            <p>Admin</p>
            <img src="../assets/images/icons/arrow.png" alt="" class="arrow">
          </div>
        </div>
        <div class="logout" @click="logout()">
          <img src="../assets/images/icons/logout_icon.png" alt="">
          <span>Log out</span>
        </div>
      </div>
      <div class="right_side">
        <ProfileSettings v-if="menu === MENU_SETTINGS"></ProfileSettings>
        <ProfileComments v-if="menu === MENU_COMMENTS"></ProfileComments>
        <ProfileModifications v-if="menu === MENU_MODIFICATIONS"></ProfileModifications>
        <AdminPanel v-if="menu === MENU_ADMIN"></AdminPanel>
      </div>
    </div>
    <div class="closeBtn_container">
      <div class="closeBtn" @click="onClose">
        <div class="icon"></div>
      </div>
      <div class="saveBtn" @click="onClose">
        <div class="icon"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>

<script setup>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import ProfileSettings from "./ProfileSettings.vue";
import ProfileComments from "./ProfileComments.vue";
import ProfileModifications from "./ProfileModifications.vue";
import AdminPanel from "./AdminPanel.vue";
const store = useStore();

const showProfile = computed(() => {
  return store.getters.getShowPanel("profile");
});

function onClose() {
  store.dispatch("setShowPanel", {panel: "profile", show: false});
}

const user = computed(() => {
  return store.getters.getUser;
});

function logout() {
  store.dispatch("setShowPanel", {panel: "profile", show: false});
  store.dispatch("logout");
}

const MENU_SETTINGS = 0;
const MENU_COMMENTS = 1;
const MENU_MODIFICATIONS = 2;
const MENU_ADMIN = 3;
const menu = ref(MENU_SETTINGS);

function selectMenu(m) {
  menu.value = m;
  console.log(m);
}

</script>