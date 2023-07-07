<template>
  <div v-if="showProfile" class="blur_block">
    <div class="profile">
      <div class="side">
        <div class="short_info">
          <ProfileAvatar :user="user"></ProfileAvatar>
          <div class="role" :role="user?.role">{{ user?.role }}</div>
          <div>{{ user?.username }}</div>
        </div>
        <div class="list">
          <div @click="selectMenu(MENU_SETTINGS)" :class="menu === MENU_SETTINGS ? 'active' : ''">
            <img src="../assets/images/icons/sett_icon.png" alt="" class="icon">
            <p>Settings</p>
            <img src="../assets/images/icons/arrow.png" alt="" class="arrow">
          </div>
          <div @click="selectMenu(MENU_COMMENTS)" :class="menu === MENU_COMMENTS ? 'active' : ''">
            <img src="../assets/images/icons/myComms_icon.png" alt="" class="icon">
            <p>My comments</p>
            <img src="../assets/images/icons/arrow.png" alt="" class="arrow">
          </div>
          <div @click="selectMenu(MENU_MODIFICATIONS)"
               :class="`${user?.role !== 'ADMIN' && user?.role !== 'MODDER' ? 'disabled' : ''} ${menu === MENU_MODIFICATIONS ? 'active' : ''}`">
            <img src="../assets/images/icons/myMods_icon.png" alt="" class="icon">
            <p>My modifications</p>
            <img src="../assets/images/icons/arrow.png" alt="" class="arrow">
          </div>
          <router-link to="/admin"><div v-if="user?.role == 'ADMIN'">
            <img src="../assets/images/icons/admin_icon.png" alt="" class="icon">
            <p>Go to admin</p>
            <img src="../assets/images/icons/arrow.png" alt="" class="arrow">
          </div></router-link>
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
      </div>
    </div>
    <div class="closeBtn_container">
      <div class="closeBtn" @click="onClose">
        <div class="icon"></div>
      </div>
      <label v-if="menu === MENU_COMMENTS || menu === MENU_MODIFICATIONS" for="formSubmit" class="saveBtn">
        <div class="icon"></div>
      </label>
    </div>
  </div>
</template>

<style scoped>

</style>

<script setup>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import ProfileAvatar from "./ProfileAvatar.vue";
import ProfileSettings from "./ProfileSettings.vue";
import ProfileComments from "./ProfileComments.vue";
import ProfileModifications from "./ProfileModifications.vue";


const store = useStore();

const user = computed(() => {
  return store.getters.getUser;
});

const showProfile = computed(() => {
  selectMenu(MENU_SETTINGS);
  return store.getters.getShowPanel("profile");
});

function onClose() {
  store.dispatch("setShowPanel", {panel: "profile", show: false});
}

function logout() {
  store.dispatch("setShowPanel", {panel: "profile", show: false});
  store.dispatch("logout");
}

const MENU_SETTINGS = 0;
const MENU_COMMENTS = 1;
const MENU_MODIFICATIONS = 2;
const menu = ref(MENU_SETTINGS);

function selectMenu(m) {
  if (m === MENU_MODIFICATIONS){
    if (user.value.role !== 'MODDER' && user.value.role !== 'ADMIN'){
      return;
    }
  }
  menu.value = m;
}
</script>