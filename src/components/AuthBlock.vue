<template>
  <div v-if="showLogin" class="auth_block">
    <div :class="`auth ${showRightPanel ? 'rightPanel_active' : ''}`">
      <div class="form_container logIn_container">
        <form action="loggedIn.html">
          <h1>Log in</h1>
          <div class="input_label">
            <input type="text" name="overmods_login" placeholder=" " id="overmodsLogin_username">
            <label for="overmodsLogin_username">username</label>
          </div>
          <div class="input_label">
            <input type="password" name="overmods_password" placeholder=" " id="overmodsLogin_password">
            <label for="overmodsLogin_password">password</label>
          </div>
          <a href="">Forgot your password?</a>
          <button>Log in</button>
        </form>
      </div>
      <div class="form_container signUp_container">
        <form action="loggedIn.html">
          <h1>Sign up</h1>
          <div class="input_label">
            <input type="text" name="overmods_login" placeholder=" " id="overmodsSignup_username">
            <label for="overmodsSignup_username">username</label>
          </div>
          <div class="input_label">
            <input type="password" name="overmodsSignup_email" placeholder=" " id="overmodsSignup_email">
            <label for="overmodsSignup_email">email</label>
          </div>
          <div class="input_label">
            <input type="text" name="overmodsSignup_password" placeholder=" " id="overmodsSignup_password">
            <label for="overmodsSignup_password">password</label>
          </div>
          <div class="input_label">
            <input type="password" name="overmodsSignup_confirm_password" placeholder=" " id="overmodsSignup_confirm_password">
            <label for="overmodsSignup_confirm_password">confirm password</label>
          </div>
          <button>Sign up</button>
        </form>
      </div>
      <div class="overlay_container">
        <div class="overlay">
          <div class="overlay_panel overlay_left">
            <h1>Welcome again<span>!</span></h1>
            <p>Unleash the power of your existing account! Dive into the world of gaming modifications by simply logging in and unlocking a universe of enhanced gameplay experiences.</p>
            <button class="ghost_button" id="logIn" @click="showRightPanel = false">Log in</button>
          </div>
          <div class="overlay_panel overlay_right">
            <h1>Hello<span>,</span> Gamer<span>!</span></h1>
            <p>Unlock a world of endless possibilities by registering with us! Enter your personal details and embark on an extraordinary gaming journey like never before!</p>
            <button class="ghost_button" id="signUp" @click="showRightPanel = true">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
    <div class="closeBtn" @click="close()">
      <div class="icon"></div>
      <p>Continue as a guest</p>
    </div>
  </div>
</template>

<style scoped>

</style>

<script setup>
import { computed, ref } from "vue";
import { useStore } from "vuex";
const store = useStore();

const showRightPanel = ref(false);
const showLogin = computed(() => {
  return store.getters.getShowPanel("login");
});

function close() {
  store.dispatch("setShowPanel", {panel: "login", show: false});
}
</script>