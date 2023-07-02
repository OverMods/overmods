<template>
  <br>
  <div class="title">
    <img src="../assets/images/icons/trend_icon.png" alt="">
    <p>In trend</p>
    <div class="line"></div>
  </div>
  <TrendingGallery></TrendingGallery>
  <div class="title">
    <img src="../assets/images/icons/info_icon.png" alt="">
    <p>Information</p>
    <div class="line"></div>
  </div>
  <div class="info_box">
    <div class="site_overview">
      <h3>Overmods</h3>
      <h5>Best modifications website for your favorite games</h5>
      <div class="item">
        <img src="../assets/images/icons/improve.png" alt="">
        <p>Maximize your in-game performance by efficiently utilizing resources and achieving the best results!</p>
      </div>
      <div class="item">
        <img src="../assets/images/icons/customize.png" alt="">
        <p>Make your game unique by customizing it to your own style. Immerse yourself in an engaging gaming world with an unforgettable user experience!</p>
      </div>
      <div class="item">
        <img src="../assets/images/icons/modify.png" alt="">
        <p>Expand your game with a wide range of new possibilities, embark on unforgettable adventures, and create your own gameplay!</p>
      </div>
      <!-- <button>Go to mods</button> -->
    </div>
    <div class="block-b">
      <div class="block-a">
        <div class="stats_and_ratings">
          <div class="stats">
            <img src="../assets/images/icons/stats_icon.png" alt="">
            <div class="games">
              <h5>Total games</h5>
              <p>{{ stats.games }}</p>
            </div>
            <div class="mods">
              <h5>Total mods</h5>
              <p>{{ stats.mods }}</p>
            </div>
          </div>
          <div class="ratings">
            <img src="../assets/images/icons/rate_icon.png" alt="">
            <p v-if="user && user?.siteRating !== null">Your rate:</p>
            <p v-else>Rate our work</p>
            <div class="stars">
              <input @click="onRating(5)" type="radio" id="star5" name="rating" :checked="user?.siteRating == 5 ? true : false">
              <label for="star5"></label>
              <input @click="onRating(4)" type="radio" id="star4" name="rating" :checked="user?.siteRating == 4 ? true : false">
              <label for="star4"></label>
              <input @click="onRating(3)" type="radio" id="star3" name="rating" :checked="user?.siteRating == 3 ? true : false">
              <label for="star3"></label>
              <input @click="onRating(2)" type="radio" id="star2" name="rating" :checked="user?.siteRating == 2 ? true : false">
              <label for="star2"></label>
              <input @click="onRating(1)" type="radio" id="star1" name="rating" :checked="user?.siteRating == 1 ? true : false">
              <label for="star1"></label>
            </div>
          </div>
        </div>
        <div class="profile" v-if="isLoggedIn" >
          <img :src="user?.avatar" alt="avatar" v-if="user?.avatar !== null">
          <img src="../assets/images/icons/default_profile_avatar.png" alt="avatar" v-else>
          <div class="roleIcon" :role="user?.role"></div>
          <div class="username"><img src="../assets/images/icons/author_icon.png" alt="">{{ user?.username }}</div>
          <div class="role"><img src="../assets/images/icons/role_icon.png" alt="">{{ user?.role }}</div>
          <button @click="onProfile()">More</button>
        </div>
        <div class="profile" v-else>
          <img src="../assets/images/icons/default_profile_avatar.png" alt="avatar">
          <p>Log in to see your profile information</p>
          <button @click="onLogin()">Log in</button>
        </div>
      </div>
      <div class="suggestion">
        <img src="../assets/images/icons/idk_wis.png" alt="">
        <p v-if="!user">Are you a <span class="white_text">mod maker</span>? Share your creative potential! <span class="att_text">Sign up</span> and give your mods wide exposure!</p>
        <p v-else-if="user?.role == 'USER'">Are you a <span class="white_text">mod maker</span>? Share your creative potential! Go to your profile page, send us a form and give your mods wide exposure!</p>
        <p v-else-if="user?.role == 'MODDER'">You, the <span class="att_text">Mod Maker</span> extraordinaire, hold the power to shape worlds and redefine gaming experiences - it's time to take the spotlight, upload your mod now and let your creativity reign supreme!</p>
        <p v-else-if="user?.role == 'ADMIN'">Go to <span class="att_text">Admin Panel</span></p>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>

<script setup>
import { onMounted, computed, ref } from "vue";
import { useStore } from "vuex";
import TrendingGallery from "../components/TrendingGallery.vue";
const store = useStore();

const stats = computed(() => {
  return store.getters.getStats;
})
const isLoggedIn = computed(() => {
  return store.getters.isLoggedIn;
});
const user = computed(() => {
  return store.getters.getUser;
})

function onRating(r) {
  store.dispatch("patchUser", {siteRating: r});
}

function onProfile() {
  store.dispatch("setShowPanel", {panel: "profile", show: true});
}

function onLogin() {
  store.dispatch("setShowPanel", {panel: "login", show: true});
}

onMounted(() => {
  store.dispatch("fetchStats");
});
</script>