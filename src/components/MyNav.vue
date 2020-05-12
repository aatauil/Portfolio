<template>
  <nav class="nav-container">
      <div class="nav-list">
          <router-link class="nav-item" to="/">Home</router-link>
          <router-link class="nav-item" to="/MySkills">My skills</router-link>
          <router-link class="nav-item" to="/MyWork">My work</router-link>
      </div>
      <button class="btn-menu btn-menu_close" v-on:click="$emit('close-menu')">CLOSE</button>
      <img class="nav-dots1" src="../assets/decoration/Dots1.svg" alt="dots decoration">
  </nav>
</template>

<script>
export default {
    name: "MyNav",

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

.btn-menu_close{
    color: white;

    &::before{
        content: url("../assets/icons/menu-close.svg");
        margin-right: 1rem;
        height: 20px;

    }

}

// Decoration

.nav-dots1{
    position: absolute;
    bottom: 5rem;
    opacity: .2;
}



</style>