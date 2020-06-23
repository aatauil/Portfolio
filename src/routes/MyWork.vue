<template>
  <section class="work_container">
      <MyTitle title="My work"/>
        <SingleWork
          title="Alphabitat"
          text="Alphabitat is a Real Estate Agency located in Woluwe-Sint-Pierre.
          My first big project. <br><br> I build this while I was studying at BeCode.  
          I went through all stages of Web development from Design to deployment."
          siteLink="https://alphabitat.be"
          imageName="alphabitat"
          v-bind:tags="['webpack', 'Jquery', 'localization' , 'API' ]"
          />
          
          <SingleWork
          title="Le jardin de Nicolas"
          text="Le jardin de Nicolas is a high class restaurant situated in Montgomery. My colleague and I used a theme to create this website and personalized it to the owners liking. <br> <br> We mainly used high quality images as a mean attract new customers.</i>  "
          siteLink="https://www.lejardindenicolas.be/"
          imageName="jardin"
          v-bind:tags="['Wordpress', 'SEO', 'Migration' , 'Theme']"
          />

          <SingleWork
          title="Navatech"
          text="Navatech is a pool temperature solution company located in Singapore. A specialized store with a only a handfull of high-end products.<br><br> For this reason I used Strapi for the back-end as it is easy to navigate and highly costumizable.  "
          siteLink="https://navatech.sg/"
          imageName="navatech"
          v-bind:tags="['Strapi', 'React', 'Tailwindcss' , 'Graphql', 'Heroku']"
          />




          <SingleWork
          title="Coach Gab"
          text="Coach Gab is a personal fitness coach here in Brussels. <br><br> In combination with SimplyBook.me coach Gab's web presence, booking & management has completely transformed to become future proof. <i> Still in the development stage</i>  "
          siteLink="#"
          imageName="gab"
          v-bind:tags="['vuejs', 'Jquery', 'SwiperJS' , 'SimplyBook']"
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