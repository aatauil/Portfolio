<template>
  <nav class="nav nav_container">
      <div class="nav_list">
          <router-link class="nav_item" to="/">Home</router-link>
          <router-link class="nav_item" to="/MySkills">My skills</router-link>
          <router-link class="nav_item" to="/MyWork">My work</router-link>
          <router-link class="nav_item" to="/MyAbout">About</router-link>
      </div>
      <div class="nav_video-container">
         <video class="nav_video-image" src="../assets/images/menu-vid.mp4" autoplay="true" loop="true" >
            </video>    
          <p class="nav_hashtag">#Brussels</p>
      </div>
      <button class="btn-menu btn-menu_close" v-on:click="$emit('close-menu')">CLOSE</button>
      <img class="nav_dots1" src="../assets/decoration/Dots1.svg" alt="dots decoration">
  </nav>
</template>

<script>
export default {
    name: "MyNav",
}

</script>

<style lang="scss">

@import "../scss/main.scss";

.nav_container{
    position: fixed;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    width: 100vw;
    height: 100vh;
    background-color: $color-black;
    top: 0;
    left: 0;
    font-weight: bold;
    z-index: 100;
}

.nav_list{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 60%;
    padding-left: calc(2rem + 5vw);
    margin: auto;
    width: 95%;

    .active-link{
    opacity: 1;
    &::before{
        content: url("../assets/icons/menu-triangle.svg");
        margin-right: 1rem;
    }
}
}

.nav_item{
    font-size: var(--size-menu);
    color: white;
    text-decoration: none;
}

.btn-menu_close{
    color: white;
    bottom: 1rem;
    right: 1rem;

    &::before{
        content: url("../assets/icons/menu-close.svg");
        margin-right: 1rem;
        height: 20px;

    }

}

.nav_video-container{
    position: relative;
    height: 100%;
    display: none;
    @include breakpoint(tablet-sm){
     display: none;
    }
    @include breakpoint(tablet-md){
     display: block;
    }
}

.nav_video-image{
    top: 0;
    left: 0;
    height: 100vh;
}

// Decoration

.nav_dots1{
    position: absolute;
    bottom: 5rem;
    opacity: .2;
}

.nav_hashtag{
    position: absolute;
    bottom: 2rem;
    left: 2rem;
    font-size: var(--size-h2);
    color: white;
    margin: 0;
}



</style>