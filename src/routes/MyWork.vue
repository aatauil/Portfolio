<template>
  <section class="work_container">
      <h1 class="work_title">My Work</h1>
      <SingleWork
        title="Alphabitat"
        text="Alphabitat is a Real Estate Agency located in Woluwe-Sint-Pierre.
        My first big project. <br><br> I build this while I was studying at BeCode.  
        I went through all stages of Web development from Design to deployment."
        siteLink="https://www.google.com"
        imageName="alphabitat.png"
        />

        <SingleWork
        title="Coach Gab"
        text="Alphabitat is a Real Estate Agency located in Woluwe-Sint-Pierre.
        My first big project. <br><br> I build this while I was studying at BeCode.  
        I went through all stages of Web development from Design to deployment."
        siteLink="https://www.google.com"
        imageName="alphabitat.png"
        />
 

  </section>
</template>

<script>
import SingleWork from "../components/SingleWork"

export default {
    name: "mywork",
    components:{
      SingleWork

    }

}
</script>

<style lang="scss">

@import "../scss/main.scss";

.work_title{
  position: relative;
  font-size: $size-h1;
  padding: 2rem 0 1rem 2rem;

  white-space: nowrap;
  width: min-content;

  &::before{
    position: absolute;
    content: "";
    width: 40%;
    height: 1rem;
    bottom: -5px;
    border-radius: 50px;
    background-color: $color-pink;
  }

  &::after{
    position: absolute;
    content: "My work";
    font-size: 5rem;
    left: 0;
    transform: translate(-10%, -10%);
    top: 0;
    opacity: .1;
  }
}

</style>