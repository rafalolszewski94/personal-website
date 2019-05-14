<template>
  <div id="app" class="wrapper">
    <div class="sidebar">
      <template v-if="user">
        <img
          :src="user.avatar_url"
          :alt="user.name"
          class="avatar"
          width="72"
          height="72"
        >
        <h2>
          <a :href="user.html_url">{{user.login}}</a>
        </h2>
      </template>
    </div>
    <!--<router-view class="content"/>-->
    <home class="content" :user="user"/>
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
      user: {
        avatar_url: '',
        html_url: '',
        login: '',
      },
    }
  },
  created() {
    this.$http.get('https://api.github.com/users/rafalolszewski94').then(res => {
      this.user = res.data
    })
  },
}
</script>

<style lang="scss">
body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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

  h2 {

  }
}

.content {
  grid-area: content;
  /*@apply flex items-center justify-center flex-col;*/
}
</style>
