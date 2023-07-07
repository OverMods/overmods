<template>
  <img v-if="user?.avatar" :class="type" :src="user.avatar" alt="avatar">
  <img v-else-if="user" :class="type" :src="defaultAvatar" alt="avatar"
       :style="`background-color: #${user.color}`">
  <img v-else :class="type" :src="defaultAvatar" alt="avatar"
       style="'background-color: #949494;'">
</template>

<style scoped>

</style>

<script setup>
import defaultAvatar from '../assets/images/icons/default_profile_avatar.png';

defineProps({
  user: {
    type: Object,
    required: true
  },
  type: {
    type: String,
    default: "profile_avatar"
  }
})
</script>