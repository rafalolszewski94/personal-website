<template>
  <div :id="$style.app" :class="$style.wrapper">
    <div :class="$style.sidebar">
      <template v-if="user">
        <div :class="$style.avatarContainer">
          <img
            :src="user.avatar_url"
            :alt="user.name"
            :class="$style.avatar"
          >
        </div>
        <h2>
          <a :href="user.html_url">{{user.login}}</a>
        </h2>
      </template>
    </div>
    <!--<router-view class="content"/>-->
    <home :class="$style.content" :user="user"/>
  </div>
</template>

<script>
import Home from './views/Home'

export default {
  name: 'app',
  components: {
    Home,
  },
  data() {
    return {
      user: null,
    }
  },
  created() {
    this.$http.get('https://api.github.com/users/rafalolszewski94').then(res => {
      this.user = res.data
    })
  },
}
</script>

<style lang="scss" module>
body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @apply bg-grey-lightest m-0 font-sans;
}

#app {
  height: 100vh;
  width: 100vw;
  transition: background-color 0.2s ease, color 0.2s ease;
}

.wrapper {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 340px 100fr;
  grid-template-areas: "sidebar content";
}

.sidebar {
  grid-area: sidebar;
  @apply bg-white border-r;

  h2 {
    @apply m-0 mt-4 text-center w-full;
  }
}

.content {
  grid-area: content;
  @apply flex items-center justify-center flex-col;
}

.avatar-container {
  @apply mx-4 mt-4 text-center;
}

.avatar {
  composes: avatar from "./assets/app.scss";
}
</style>
