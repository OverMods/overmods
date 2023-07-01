<template>
  <div class="logo"></div>
    <div class="title"><h2>Profile settings</h2></div>
    <div class="content">
      <div class="container">
        <div class="top_block">
          <div class="title">Account information</div>
        </div>
        <div class="bottom_block">
          <div class="elems">
            <div class="title"><span><img src="../assets/images/icons/orange/name_ico.png">Nickname:</span> <span>{{ user?.username }}</span></div>
            <div class="title"><span><img src="../assets/images/icons/orange/role_ico.png">Role:</span> <span style="text-transform: lowercase;">{{ user?.role }}</span></div>
            <div class="title"><span><img src="../assets/images/icons/orange/calendar_ico.png">Registered at:</span> <span>25.05.2023</span></div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="top_block">
          <div class="title"><span>Password</span><span class="button" @click="onSettings(passwordBlock)"><img src="../assets/images/icons/edit.png" alt=""><a>Update</a></span></div>
          <div class="desc">We recommend periodically updating your password to enhance the security of your account.</div>
        </div>
        <div class="bottom_block">
            <div class="elems" :style="block === passwordBlock ? 'display: none' : 'display: inherit'">
              <div class="title"><span><img src="../assets/images/icons/orange/secure_ico.png">Password:</span> updated 2 days ago</div>
            </div>
            <div class="elems" :style="block === passwordBlock ? 'display: inherit' : 'display: none'">
              <form onsubmit="return false">
                <div class="title">Old password: <input type="password"></div>
                <div class="title">New password: <input v-model="password" @input="updatePassStrenght" type="password"></div>
                <div class="title">Confirm password: <div class="column_elem"><input type="password"><div class="pass_strenght"><div class="active" :style="`width: ${meterWidth}`"></div></div>
                <div class="strenght_text">{{ text }}</div></div></div>
                <div class="buttons">
                  <button type="submit" @click="onSettings(empty)">Save</button>
                  <button @click="onSettings(empty)">Cancel</button>
                </div>
              </form>
            </div>
        </div>
      </div>
      <div class="container">
        <div class="top_block">
          <div class="title"><span>Email</span><span class="button" @click="onSettings(emailBlock)"><img src="../assets/images/icons/edit.png" alt=""><a>Update</a></span></div></div>
        <div class="bottom_block">
            <div class="elems" :style="block === emailBlock ? 'display: none' : 'display: inherit'">
              <div class="title"><span><img src="../assets/images/icons/orange/mail_ico.png">Email:</span> amy******l@gmail.com</div>
            </div>
            <div class="elems" :style="block === emailBlock ? 'display: inherit' : 'display: none'">
              <form onsubmit="return false">
                <div class="title">Old email: <input type="text"></div>
                <div class="title">New email: <input type="text"></div>
                <div class="buttons">
                  <button type="submit" @click="onSettings(empty)">Save</button>
                  <button @click="onSettings(empty)">Cancel</button>
                </div>
              </form>
            </div>
        </div>
      </div>
      <div class="container">
        <div class="top_block">
          <div class="title"><span>Avatar</span><span class="button" @click="onSettings(avatarBlock)"><img src="../assets/images/icons/edit.png" alt=""><a>Update</a></span></div>
        </div>
        <div class="bottom_block">
          <div class="elems" :style="block === avatarBlock ? 'display: none' : 'display: inherit'">
            <div class="profile_icon"><img :src="user?.avatar ? user.avatar : defaultAvatar">Explore and customize your unique profile avatar in the world of game modifications. Discover, preview, and change your avatar to reflect your individuality and style.</div>
          </div>
          <div class="elems" :style="block === avatarBlock ? 'display: inherit' : 'display: none'">
            <form onsubmit="return false">
              <div class="avatar_change">
                <div class="avatar" :style="user?.avatar ? 'background-image: url('+ user.avatar + ')' : 'background-image: url(' + defaultAvatar + ')'"></div>
                <div class="file">
                  <img src="../assets/images/icons/upload_icon.png" alt="">
                  <p>Drag & Drop image here</p>
                  <p>OR</p>
                  <input type="file" id="overmodsAvatarUpload">
                  <label for="overmodsAvatarUpload">Browse image</label>
                </div>
              </div>
              <div class="buttons">
                <button type="submit" @click="onSettings(empty)">Save</button>
                <button @click="onSettings(empty)">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="top_block">
          <div class="title"><span>Became a modder</span></div>
        </div>
        <div class="bottom_block">
          <div class="elems">
            <div class="text">Unleash your creativity and become a modder extraordinaire! Join our community and showcase your unique game modifications on our platform. Share your creations with fellow gamers and leave your mark on the gaming world.</div>
            <a class="title">Submit an application</a>
          </div>
        </div>
      </div>
    </div>
</template>

<style scoped>

</style>

<script setup>
import { onMounted, ref, computed } from 'vue';
import { useStore } from 'vuex';
import installScollbar from "../betterScrollbar.js";
import defaultAvatar from '../assets/images/icons/default_profile_avatar.png';
const store = useStore();

onMounted(() => {
  installScollbar();
})

const empty = 0;
const passwordBlock = 1;
const emailBlock = 2;
const avatarBlock = 3;
const block = ref(empty);

function onSettings(b) {
  block.value = b;
}

const user = computed(() => {
  return store.getters.getUser;
});

// passStrenght.js
let password = "";

import { calculatePassStrength } from "../passStrength.js";

const startWidth = "0%";
const meterWidth = ref(startWidth);

const startText = "Password strenght";
const text = ref(startText);

function updatePassStrenght(){
  const strength = calculatePassStrength(password);
  meterWidth.value = `${strength * 20}%`;
  if (strength == 1){
    text.value = "Very Weak"
  } else if (strength == 2){
    text.value = "Weak"
  } else if (strength == 3){
    text.value = "Moderate"
  } else if (strength == 4){
    text.value = "Strong"
  } else if (strength == 5){
    text.value = "Very strong"
  } else {
    text.value = startText;
  }
}
</script>