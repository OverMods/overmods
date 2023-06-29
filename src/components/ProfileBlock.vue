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
          <div>
            <img src="../assets/images/icons/sett_icon.png" alt="" class="icon">
            <p>Settings</p>
            <img src="../assets/images/icons/arrow.png" alt="" class="arrow">
          </div>
          <div>
            <img src="../assets/images/icons/myComms_icon.png" alt="" class="icon">
            <p>My comments</p>
            <img src="../assets/images/icons/arrow.png" alt="" class="arrow">
          </div>
          <div :class="user?.role !== 'ADMIN' && user?.role !== 'MODDER' ? 'disabled' : ''">
            <img src="../assets/images/icons/myMods_icon.png" alt="" class="icon">
            <p>My modifications</p>
            <img src="../assets/images/icons/arrow.png" alt="" class="arrow">
          </div>
          <div v-if="user?.role == 'ADMIN'">
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
        <ProfileSettings></ProfileSettings>
        <ProfileComments></ProfileComments>
        <ProfileModifications></ProfileModifications>
        <AdminPanel></AdminPanel>
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
import { computed } from "vue";
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
})

const haveAvatar = computed(() => {
  return store.getters.haveAvatar;
});

function logout() {
  store.dispatch("setShowPanel", {panel: "profile", show: false});
  store.dispatch("logout");
}

</script>