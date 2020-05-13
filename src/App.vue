<template>
  <div id="app">
    <router-view>
    </router-view>
    <button class="btn-menu btn-menu_open" @click="menuToggle()">MENU</button>
    <MyNav  v-if="!menuState" v-on:close-menu="menuToggle" />
  </div>
</template>

<script>

import MyNav from "./components/MyNav";

export default {
  name: 'App',
  data() {
    return {
      menuState: true
    }
  },

  methods: {
    menuToggle: function (){
      this.menuState = !this.menuState
    }
  },
  components: {
    MyNav
  }
}
</script>

<style lang="scss">

@import "./scss/main.scss";
@import "./scss/global-class.scss";


html{
  font-size: 62.5%;
  height: 100%;

}

*{
  box-sizing: border-box;
  line-height: normal;
}

#app {
  font-family: $poppins;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
  overflow-x: hidden;
  width: 100vw;

}

.btn-menu_open{
    color: black;

    &::before{
        content: url("./assets/icons/menu-open.svg");
        margin-right: 1rem;
        height: 20px;

    }

}




</style>
