<template>
  <div class="logo"></div>
    <div class="title"><h2>My comments</h2></div>
    <div class="content">
      <div class="comm_cont">
        <form @submit="onDeleteComments">
          <div v-for="comment in myComments" class="comm_block" :key="comment.comment.id">
            <div class="comm_dirr">{{ comment.game.title }} > {{ comment.mod.title }}</div>
              <div class="comm_body">
                <div class="comm_text">
                  {{ comment.comment.comment }}
                  <div class="comm_date">{{ comment.comment.commentedAt }}</div>
                </div>
                <input type="checkbox"
                       v-model="ids"
                       :value="comment.comment.id"
                       :id="`c${comment.comment.id}`">
                <label :for="`c${comment.comment.id}`"></label>
              </div>
          </div>
          <input type="submit" id="formSubmit">
        </form>
      </div>
    </div>
</template>

<style scoped>

</style>

<script setup>
import { onMounted, ref, computed } from 'vue';
import { useStore } from "vuex";
import installScollbar from "../betterScrollbar.js";
const store = useStore();

const myComments = computed(() => store.getters.getMyComments);

let ids = ref([]);

function onDeleteComments(e) {
  e.preventDefault();
  store.dispatch("deleteComments", {isMyComments: true, ids: ids.value});
  ids.value = [];
}

onMounted(() => {
  store.dispatch("fetchMyComments");
  installScollbar();
})

</script>