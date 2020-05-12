<template>
  <section class="home home-container">
    
    <article class="home_text-container">
      <h1 class="home_text">Hello there<span class="pink">!</span></h1>
      <h1 class="home_text">My name Achraf</h1>
      <h1 class="home_text">A <span class="pink">Full-Stack</span> Developer</h1>
      <h1 class="home_text home_text--active">Enjoy<span class="pink"> exploring </span> my site.</h1>
    </article>
    <article class="home_link-container">
      <a class="home_link" href="">Discover skills</a>
      <a class="home_link" href="">Visit my work</a>
    </article>


<!-- 
    <img class="home_x-mark home_decoration" src="../assets/decoration/x-mark.svg" alt="x-mark decoration">
    <img class="home_pink-circle home_decoration" src="../assets/decoration//pink-circle.svg" alt="pink-circle decoration"> -->
      
  </section>
</template>

<script>
export default {
    name: 'MyHome'

}
</script>

<style lang="scss">

@import "../scss/main.scss";

.home-container{
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 1rem;

}

.home_text-container{
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;

}

.home_text{
  opacity: .2;
  font-size: $size-h2;
}

.home_text--active{
  opacity: 1;
}

.home_link-container{
  display: flex;
  flex-direction: column;
  height: 15%;
  justify-content: space-around;
  padding: 5px;
  padding-left: 0;

}

.home_link{
  position: relative;
  text-decoration: none;
  color: black;
  font-weight: 700;
  font-size: $size-btn;
  white-space: nowrap;
  width: min-content;
  padding: 2px;
  padding-left: 0;

  &::before{
    position: absolute;
    content: "";
    width: 25%;
    height: 5px;
    bottom: -5px;
    border: 1px;
    border-radius: 50px;
    background-color: $color-pink;
  }
}

//Decoration

.home_decoration{
  position: absolute;
}

.home_x-mark{
  top: 60%;
  left: 0;
  transform: translateX(-50%);
}


.home_pink-circle{
  top: 0;
  right: 0;
  transform: translate(50%, -50%)
}

</style>