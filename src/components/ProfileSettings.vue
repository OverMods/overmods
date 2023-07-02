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
              <div class="title"><span><img src="../assets/images/icons/orange/secure_ico.png">Password:</span> updated {{ user.passwordChanged }}</div>
            </div>
            <div class="elems" :style="block === passwordBlock ? 'display: inherit' : 'display: none'">
              <form @submit="onPassword">
                <div class="title">Old password: <input v-model="oldPassword" type="password"></div>
                <div class="title">New password: <input v-model="password" @input="updatePassStrenght" type="password"></div>
                <div class="title">Confirm password: <div class="column_elem">
                  <input v-model="confirmPassword" type="password"><div class="pass_strenght">
                  <div class="active" :style="`width: ${meterWidth}`"></div>
                </div>
                <div class="strenght_text">{{ text }}</div></div></div>
                <div class="buttons">
                  <button type="submit">Save</button>
                  <button type="button" @click="onSettings(empty)">Cancel</button>
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
              <div class="title"><span><img src="../assets/images/icons/orange/mail_ico.png">Email:</span> {{ user.email }}</div>
            </div>
            <div class="elems" :style="block === emailBlock ? 'display: inherit' : 'display: none'">
              <form @submit="onEmail">
                <div class="title">Old email: <input v-model="oldEmail" type="text"></div>
                <div class="title">New email: <input v-model="email" type="text"></div>
                <div class="buttons">
                  <button type="submit">Save</button>
                  <button type="button" @click="onSettings(empty)">Cancel</button>
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
            <form @submit="onAvatar">
              <div class="avatar_change">
                <div class="avatar" :style="user?.avatar ? 'background-image: url('+ user.avatar + '); background-size: contain;' : 'background-image: url(' + defaultAvatar + ')'"></div>
                <div class="file" 
                  :class="{ active: isDragOver }" 
                  @dragover.prevent="handleDragOver" 
                  @dragleave="handleDragLeave" 
                  @drop.prevent="handleDrop">
                <img v-if="fileURL" :src="fileURL" class="new_avatar_img">
                <img v-else :src="uploadIcon">
                <p class="dragText">{{ dragText }}</p>
                <p v-if="dragText !== null">OR</p>
                <input @change="handleInputChange" ref="input" type="file" id="overmodsAvatarUpload">
                <label v-if="dragText !== null" for="overmodsAvatarUpload">Browse image</label>
              </div>
              </div>
              <div class="buttons">
                <button type="submit">Save</button>
                <button type="button" @click="onSettings(empty)">Cancel</button>
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
import uploadIcon from '../assets/images/icons/upload_icon.png';
import { calculatePassStrength } from "../passStrength.js";
const store = useStore();

onMounted(() => {
  installScollbar();
})

const user = computed(() => {
  return store.getters.getUser;
});

const empty = 0;
const passwordBlock = 1;
const emailBlock = 2;
const avatarBlock = 3;
const block = ref(empty);

const isDragOver = ref(false);
const dragText = ref("Drag & Drop to Upload File");
const fileURL = ref(null);
const file = ref(null);

function onSettings(b) {
  block.value = b;

  if (b === empty){
    isDragOver.value = false;
    dragText.value = "Drag & Drop to Upload File";
    fileURL.value = null;
    file.value = null;
  }
}

// onAvatarUpload.js

function viewFile() {
  let fileType = file.value.type;
  let validExtensions = ["image/jpeg", "image/jpg", "image/png"];
  if (validExtensions.includes(fileType)) {
    let fileReader = new FileReader();
    fileReader.onload = () => {
      fileURL.value = fileReader.result;
    };
    fileReader.readAsDataURL(file.value);
  } else {
    alert("This is not an Image File!");
    dragText.value = "Drag & Drop to Upload File";
    file.value = null;
  }
}

function handleDragOver(event) {
  event.preventDefault();
  isDragOver.value = true;
  dragText.value = "Release to Upload File";
}
function handleDragLeave() {
  isDragOver.value = false;
  dragText.value = "Drag & Drop to Upload File";
}
function handleDrop(event) {
  event.preventDefault();
  isDragOver.value = false;
  dragText.value = null;

  file.value = event.dataTransfer.files[0];
  viewFile();
}
function handleInputChange(event) {
  file.value = event.target.files[0];
  isDragOver.value = true;
  dragText.value = null;
  viewFile();
}

// settingsChange

let oldPassword = "";
let password = "";
let confirmPassword = "";

let oldEmail = "";
let email = "";

function onPassword(e) {
  e.preventDefault();
  if (password === confirmPassword) {
    store.dispatch("patchUser", {oldPassword, password});
    onSettings(empty);
  } else {
    alert("Password doesn't match with confirm password field.");
  }
}

function onEmail(e) {
  e.preventDefault();
  store.dispatch("patchUser", {oldEmail, email});
  onSettings(empty);
}

function onAvatar(e) {
  e.preventDefault();
  console.log(file.value);
  if (file.value) {
    store.dispatch("putAvatar", file.value);
  }
  onSettings(empty);
}

// passStrenght.js

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