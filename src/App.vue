<template>
  <div id="app">
    <router-view>

    </router-view>
    <button class="btn-menu btn-menu_open">MENU</button>
    <MyNav/>
  </div>
</template>

<script>

import MyNav from "./components/MyNav";

export default {
  name: 'App',
  components: {
    MyNav
  }
}
</script>

<style lang="scss">

@import "./scss/main.scss";


html{
  font-size: 62.5%;
}

#app {
  font-family: $poppins;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;

}

.btn-menu{
  position: absolute;
  right: 1rem;
  bottom: 1rem;
}

// Global classes

.active-link{
    opacity: 1;
    &::before{
        content: url("./assets/icons/menu-triangle.svg");
        margin-right: 1rem;
    }
}
</style>
