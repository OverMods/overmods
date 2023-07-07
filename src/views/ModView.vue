<template>
  <div class="helper">
    <div class="mod_block">
      <div class="top">
        <div class="mod_logo" :style="`background-image: url('${mod.logo}');`"></div>
        <div class="info_block">
          <h2>{{ mod.title }}</h2>
          <div class="info">
            <div class="version"><img src="../assets/images/icons/version_icon.png">Game version</div>
            <div class="changeble">{{ mod.gameVersion }}</div>

            <div class="modVersion"><img src="../assets/images/icons/version_icon.png" alt="">Mod version</div>
            <div class="changeble">{{ mod.modVersion }}</div>

            <div class="author"><img src="../assets/images/icons/author_icon.png">Author</div>
            <div class="changeble">{{ author.username }}</div>

            <div class="size"><img src="../assets/images/icons/file_icon.png">Size</div>
            <div class="changeble">{{ mod.fileSize }}</div>

            <div class="downloads"><img src="../assets/images/icons/download_icon.png">Downloads</div>
            <div class="changeble">{{ mod.downloaded }}</div>
            <div class="date"><img src="../assets/images/icons/upload_icon.png">Upload date</div>
            <div class="changeble">{{ mod.uploadedAt }}</div>

            <div class="rating"><img src="../assets/images/icons/star.png" rate>Rating</div>
            <div class="changeble">{{ mod.rating }}</div>
          </div>
        </div>
        <div class="buttons">
          <button v-if="mod.fileSize" @click="download(mod)" class="download">
            <img src="../assets/images/icons/download_icon.png" alt="">Download
          </button>
          <button class="comments"><img src="../assets/images/icons/comments_icon.png" alt="">Comments</button>
        </div>
      </div>
      <div class="description">
        <div class="line_block">Description</div>
        <div class="lines"></div>
        <div v-html="mod.descriptionHtml"></div>
      </div>
      <div class="screenshots">
        <div class="line_block_mirror">Screenshots</div>
        <div class="lines_mirror"></div>
        <div class="images">
          <div class="image" v-for="screenshot in screenshots">
            <img :src="`${screenshot.screenshot}`" alt="">
            <div class="img_info">
              <div class="text_block">
                <div class="title">{{ mod.title }}
                  <div class="underline"></div>
                </div>
                <div class="line"></div>
                <div class="desc"></div>
                <p>Click here to view full screenshot</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="howToInstall">
        <div class="line_block">Installation</div>
        <div class="lines"></div>
        <div v-html="mod.instructionHtml"></div>
      </div>
      <div class="comments">
        <div class="line_block_mirror">Comments</div>
        <div class="lines_mirror"></div>
        <form class="write_comment" @submit="postComment">
          <ProfileAvatar :user="user"></ProfileAvatar>
          <textarea id="overmodsCommentArea"
                    v-if="isLoggedIn"
                    v-model="comment"
                    type="text"
                    placeholder="Write here your impression about this modification"></textarea>
          <textarea v-else type="text" placeholder="You need to login to leave comments." disabled></textarea>
          <div class="rate_mod">
            <p>Rate the mod</p>
            <div class="stars">
              <input type="radio" id="star1" name="rating" @click="setRating(5)">
              <label for="star1"></label>
              <input type="radio" id="star2" name="rating" @click="setRating(4)">
              <label for="star2"></label>
              <input type="radio" id="star3" name="rating" @click="setRating(3)">
              <label for="star3"></label>
              <input type="radio" id="star4" name="rating" @click="setRating(2)">
              <label for="star4"></label>
              <input type="radio" id="star5" name="rating" @click="setRating(1)">
              <label for="star5"></label>
            </div>
          </div>
          <button v-if="isLoggedIn" type="submit">Post</button>
          <button v-else>Log in</button>
        </form>
        <div class="show_comments">
          <div class="comment" v-for="comment in comments">
            <ProfileAvatar :user="comment.user"></ProfileAvatar>
            <div class="right">
              <div class="profile_name">{{ comment.user.username }}
                <div class="rating">
                  <div v-for="i in 5" :class="`star ${i <= ratings[comment.user.id] ? 'active' : ''}`"></div>
                </div>
              </div>
              <div class="text">{{ comment.comment.comment }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>

<script setup>
import { onMounted, computed, watch } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { HTTP, getUploadUrl } from "../http.js";
import ProfileAvatar from "../components/ProfileAvatar.vue";

const route = useRoute();
const store = useStore();



const isLoggedIn = computed(() => {
  return store.getters.isLoggedIn;
});
const user = computed(() => {
  return store.getters.getUser;
});

const mod = computed(() => {
  return store.getters.getMod;
});
const author = computed(() => {
  return store.getters.getAuthor;
});
const screenshots = computed(() => {
  return store.getters.getScreenshots;
});
const comments = computed(() => {
  return store.getters.getComments;
});
const ratings = computed(() => {
  return store.getters.getRatings;
});

function download(mod) {
  HTTP.get(`/mod/${mod.id}/download`).then((res) => {
    if (res.data.error) {
      console.log(res.data.error);
      return;
    }
    window.location.href = getUploadUrl(res.data.file);
  });
}

let comment = "";
//let rating = 5;

function setRating(r) {
  store.dispatch("postRating", r);
}

function postComment(e) {
  e.preventDefault();
  store.dispatch("postComment", comment);
  e.target.reset();
}

watch(() => route.params.id, () => {
  store.dispatch("fetchMod", route.params.id);
}, {
  immediate: true
});

onMounted(() => {
  //store.dispatch("fetchMod", route.params.id);
});
</script>