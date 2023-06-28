<template>
  <div v-if="showProfile" class="blur_block">
    <div class="profile">
      <div class="side">
        <div class="short_info">
          <img :src="user?.avatar" alt="" v-if="user?.avatar !== null">
          <img src="../assets/images/icons/default_profile_avatar.png" alt="dsds" v-else>
          <div class="role" :role="user?.role">{{ user?.role }}</div>
          {{ user?.username }}
        </div>
        <div class="list">
          <div>
            <img src="images/icons/sett_icon.png" alt="" class="icon">
            <p>Settings</p>
            <img src="images/icons/arrow.png" alt="" class="arrow">
          </div>
          <div>
            <img src="images/icons/myComms_icon.png" alt="" class="icon">
            <p>My comments</p>
            <img src="images/icons/arrow.png" alt="" class="arrow">
          </div>
          <div>
            <img src="images/icons/myMods_icon.png" alt="" class="icon">
            <p>My modifications</p>
            <img src="images/icons/arrow.png" alt="" class="arrow">
          </div>
          <div>
            <img src="images/icons/admin_icon.png" alt="" class="icon">
            <p>Admin</p>
            <img src="images/icons/arrow.png" alt="" class="arrow">
          </div>
        </div>
        <div class="logout">
          <a href="index.html">
          <img src="images/icons/logout_icon.png" alt="">
          <span>Log out</span>
          </a>
        </div>
      </div>
      <div class="right_side">
        <div class="logo"></div>
        <div class="title"><h2>Profile settings</h2></div>
        <div class="content">



        </div>
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

</script>