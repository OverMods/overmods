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
            <div class="title"><span><img src="../assets/images/icons/orange/name_ico.png">Nickname:</span> {{ user?.username }}</div>
            <div class="title"><span><img src="../assets/images/icons/orange/role_ico.png">Role:</span> <span>{{ user?.role }}</span></div>
            <div class="title"><span><img src="../assets/images/icons/orange/calendar_ico.png">Registered at:</span> 25.05.2023</div>
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
                <div class="title">Old password: <input type="text"></div>
                <div class="title">New password: <input type="text"></div>
                <div class="title">Confirm password: <input type="text"></div>
                <button type="submit" @click="onSettings(empty)">Save</button>
                <button @click="onSettings(empty)">Cancel</button>
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
                <button type="submit" @click="onSettings(empty)">Save</button>
                <button @click="onSettings(empty)">Cancel</button>
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

          </div>
          <div class="elems" :style="block === avatarBlock ? 'display: inherit' : 'display: none'">
            <a>Save </a>
            <a @click="onSettings(empty)">Cancel</a>
            <p>ds</p>
            <p>ds</p>
            <p>ds</p>
            <p>ds</p>
            <p>ds</p>
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
const store = useStore();

const scriptPath = `${import.meta.env.BASE_URL}/js/betterScrollbar.js`;

const script = document.createElement('script');

onMounted(() => {
  script.src = scriptPath;
  document.head.appendChild(script);
});

const empty = 0;
const passwordBlock = 1;
const emailBlock = 2;
const avatarBlock = 3;
const block = ref(empty);

function onSettings(b) {
  block.value = b;
  console.log(b);
}

const user = computed(() => {
  return store.getters.getUser;
});
</script>