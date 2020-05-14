<template>
  <section class="home home-container">
    
    <article class="home_text-container">
      <h1 class="home_text anim a-1" >Hello there<span class="pink">!</span></h1>
      <h1 class="home_text anim a-2">I am Achraf</h1>
      <h1 class="home_text anim a-3">A <span class="pink">Full-Stack</span> Developer</h1>
      <h1 class="home_text a-4">Enjoy<span class="pink"> exploring </span> my site.</h1>
    </article>
    <article class="home_link-container">
      <a class="home_link" href="">Discover skills</a>
      <a class="home_link" href="">Visit my work</a>
    </article>



  </section>
</template>

<script>


export default {
    name: 'MyHome',

}
</script>

<style lang="scss">

@import "../scss/main.scss";

.home-container{
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 100vh;
  width: 90%;
  max-width: 1280px;
 
  margin: auto;
}

.home_text-container{
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;

}

.home_text{
  transition: all 1s;
  animation-delay: 2s;
  opacity: 0;
  font-size: var(--size-home);
  position: absolute;

}


.home_link-container{
  display: flex;
  flex-direction: column;
  height: 15%;
  justify-content: space-around;
  padding: 5px;
  padding-left: 0;

  @include breakpoint(tablet-sm){
      flex-direction: row;
      height: 5%;
      margin-bottom: 3rem;
      width: 35%;
      justify-content: space-between;
  }

}

.home_link{
  position: relative;
  text-decoration: none;
  color: black;
  font-weight: 700;
  font-size: var(--size-btn);
  white-space: nowrap;
  width: min-content;
  min-height: 30px;
  padding: 2px;
  padding-left: 0;
  z-index: 10;
  line-height: auto;

  &:nth-child(1){
    margin-right: 2rem;
  }

  &::before{
    transition: width .3s ease;
    position: absolute;
    content: "";
    width: 25%;
    height: 5px;
    bottom: -1vh;
    border: 1px;
    border-radius: 50px;
    background-color: var(--color-pink);
  }

  &:hover::before{
    width: 50%;
  }
}

// Animation 

.anim{
  animation-name: textAnim;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
  animation-iteration-count: 1;
}



@keyframes textAnim {
  0%{
    opacity: 0;
  }
  25%{
    opacity: 1;
  }
  60%{
   transform: translateY(0);
    opacity: 1;
  }
  75%{
    opacity: .2;
  }
  100%{
    transform: translateY(-20vw);
  opacity: 0;
  }
  
}

@keyframes fadeIn {
  0%{
    opacity: 0;
  }
  100%{
        opacity:1;
  }
}


.a-1{
  animation-delay: 0;
  animation-duration: 5s;
}

.a-2{
  animation-delay: 5s;
  animation-duration: 5s;
}

.a-3{
  animation-delay: 8s;
  animation-duration: 5s;
}

.a-4{
  animation-name: fadeIn;
  animation-delay: 11s;
  animation-duration: 3s;
  animation-fill-mode: forwards;

}


</style>