<template>
  <img v-if="user?.avatar" class="profile_avatar" :src="user.avatar" alt="avatar">
  <img v-else-if="user" class="profile_avatar" :src="defaultAvatar" alt="avatar"
       :style="`background-color: #${user.color}`">
  <img v-else class="profile_avatar" :src="defaultAvatar" alt="avatar"
       style="'background-color: #949494;'">
</template>

<style scoped>

</style>

<script setup>
import defaultAvatar from '../assets/images/icons/default_profile_avatar.png';

defineProps({
  user: Object
})
</script>