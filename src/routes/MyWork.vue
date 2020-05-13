<template>
  <section class="work_container">
      <MyTitle title="My work"/>
        <SingleWork
          title="Alphabitat"
          text="Alphabitat is a Real Estate Agency located in Woluwe-Sint-Pierre.
          My first big project. <br><br> I build this while I was studying at BeCode.  
          I went through all stages of Web development from Design to deployment."
          siteLink="https://www.google.com"
          imageName="alphabitat"
          v-bind:tags="['webpack', 'vuejs', 'Jquery', 'I18next']"
          />

          <SingleWork
          title="Coach Gab"
          text="Alphabitat is a Real Estate Agency located in Woluwe-Sint-Pierre.
          My first big project. <br><br> I build this while I was studying at BeCode.  
          I went through all stages of Web development from Design to deployment."
          siteLink="https://www.google.com"
          imageName="alphabitat"
          v-bind:tags="['webpack', 'vuejs', 'Jquery', 'I18next']"
          />
 

  </section>
</template>

<script>
import SingleWork from "../components/SingleWork"
import MyTitle from "../components/MyTitle"

export default {
    name: "mywork",
    components:{
      SingleWork,
      MyTitle
    }

}
</script>

<style lang="scss">

.work_container{
  max-width: 1280px;
  margin: auto;
}

.work-item:nth-child(even){
  flex-direction: row-reverse;  
  &>img{
    margin-right: 2rem;
  }
}




</style>