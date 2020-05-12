<template>
  <nav class="nav-container">
      <div class="nav-list">
          <router-link class="nav-item" to="/">Home</router-link>
          <router-link class="nav-item" to="/MySkills">My skills</router-link>
          <router-link class="nav-item" to="/MyWork">My work</router-link>
      </div>
      <button class="btn-menu btn-menu_open">Close</button>
  </nav>
</template>

<script>
export default {
    name: "MyNav"

}
</script>

<style lang="scss">

@import "../scss/main.scss";

.nav-container{
    position: fixed;
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    background-color: $color-black;
    top: 0;
    left: 0;
    font-weight: bold;
}

.nav-list{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 50%;
    padding: 0 3rem;
}

.nav-item{
    font-size: $size-menu;
    color: white;
    text-decoration: none;
}


</style>