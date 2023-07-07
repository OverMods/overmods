<template>
  <div class="side_menu">
    <div class="logo_box">
      <router-link to="/"><img src="../assets/images/icons/logo.png" alt="logo" class="logo">
      </router-link>
      <hr class="underLogo_line">
    </div>
    <div class="instruments_box">
      <div class="go_add_mod"></div>
      <div class="go_admin"></div>
    </div>
    <div class="auth_box">
      <hr class="underLogo_line">
      <img src='../assets/images/icons/logout_icon.png' @click="logout()" alt="" class="login_icon">
    </div>
  </div>
  <div class="background">
    <div class="content">
      <div class="helper">
        <div class="mod_block">
          <div class="top">
            <div class="mod_logo"></div>
            <div class="info_block">
              <input class="mod_name" value="Mod name" oninput="this.style.width = ''; this.style.width = this.scrollWidth + 'px'">
              <div class="info">
                <div class="version"><img src="../assets/images/icons/version_icon.png">Game version</div>
                <input class="changeble" value="1.0" oninput="this.style.width = ''; this.style.width = this.scrollWidth + 'px'">

                <div class="modVersion"><img src="../assets/images/icons/version_icon.png" alt="">Mod version</div>
                <input class="changeble" value="1.0" oninput="this.style.width = ''; this.style.width = this.scrollWidth + 'px'">

                <div class="author"><img src="../assets/images/icons/author_icon.png">Author</div>
                <input class="changeble" :value="user?.username" oninput="this.style.width = ''; this.style.width = this.scrollWidth + 'px'">

                <div class="size"><img src="../assets/images/icons/file_icon.png">Size</div>
                <div class="changeble">-</div>

                <div class="downloads"><img src="../assets/images/icons/download_icon.png">Downloads</div>
                <div class="changeble">-</div>
                <div class="date"><img src="../assets/images/icons/upload_icon.png">Upload date</div>
                <div class="changeble">-</div>

                <div class="rating"><img src="../assets/images/icons/star.png" rate>Rating</div>
                <div class="changeble">-</div>
              </div>
            </div>
            <div class="buttons">
              <button class="download">
                <img src="../assets/images/icons/download_icon.png" alt="">Download
              </button>
              <button class="comments"><img src="../assets/images/icons/comments_icon.png" alt="">Comments</button>
            </div>
          </div>
          <div class="description">
            <div class="line_block">Description</div>
            <div class="lines"></div>
            <p><textarea oninput="this.style.height = ''; this.style.height = this.scrollHeight + 'px'">Write here the description for your modification.</textarea></p>          </div>
          <div class="screenshots">
            <div class="line_block_mirror">Screenshots</div>
            <div class="lines_mirror"></div>
            <div class="images">
              <div class="image">
                <img alt="">
                <div class="img_info">
                  <div class="text_block">
                    <div class="title"><input type="text" value="//code to show mod name from the input above" oninput="this.style.width = ''; this.style.width = this.scrollWidth + 'px'">
                      <div class="underline"></div>
                    </div>
                    <textarea class="desc" placeholder="//icon" oninput="this.style.height = ''; this.style.height = this.scrollHeight + 'px'"></textarea>
                    <p>Click here to view full screenshot</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="howToInstall">
            <div class="line_block">Installation</div>
            <div class="lines"></div>
            <div class="text">
              <div ref="instructionText" oninput="this.style.height = ''; this.style.height = this.scrollHeight + 'px'" contenteditable id="instructionText">
                <span>Write here how to install your modification.</span>
              </div>
            </div>
            <button @click="insertLink">Insert Link</button>
          </div>
          <div class="comments">
            <div class="line_block_mirror">Comments</div>
            <div class="lines_mirror"></div>
            <div class="write_comment">
              <img class="profile_avatar" :src="user?.avatar ? user.avatar : defaultAvatar"
                    :style="user?.avatar ? '' : 'background-color: #949494;'">
              <textarea id="overmodsCommentArea"
                        type="text"
                        placeholder="Write here your impression about this modification" disabled></textarea>
              <div class="rate_mod">
                <p>Rate the mod</p>
                <div class="stars">
                  <input type="radio" id="star1" name="rating">
                  <label for="star1"></label>
                  <input type="radio" id="star2" name="rating">
                  <label for="star2"></label>
                  <input type="radio" id="star3" name="rating">
                  <label for="star3"></label>
                  <input type="radio" id="star4" name="rating">
                  <label for="star4"></label>
                  <input type="radio" id="star5" name="rating">
                  <label for="star5"></label>
                </div>
              </div>
              <button>Post</button>
            </div>
            <div class="show_comments"></div>
          </div>
        </div>
      </div>  
    </div>
  </div>
</template>

<style scoped src="../adminPage.css">

</style>

<script setup>
import { computed, ref } from "vue";
import { useStore } from "vuex";

const store = useStore();

const user = computed(() => {
  return store.getters.getUser;
})

const instructionText = ref(null);

const insertLink = () => {
  const selectedText = window.getSelection().toString();

  if (selectedText && isInInstructionText()) {
    const link = prompt('Enter the link URL:');
    const linkElement = document.createElement('a');
    linkElement.href = link;
    linkElement.textContent = selectedText;

    const range = window.getSelection().getRangeAt(0);
    range.deleteContents();
    range.insertNode(linkElement);
  }
}
const isInInstructionText = () => {
  const selection = window.getSelection();
  if (selection.rangeCount > 0) {
    const range = selection.getRangeAt(0);
    const container = range.commonAncestorContainer;
    return instructionText.value.contains(container);
  }
  return false;
}

function onProfile() {
  store.dispatch("setShowPanel", {panel: "profile", show: true});
}

</script>