<template>
  <section class="focused-skill_container">
      <SingleSkill
            title= "NodeJS"
            text= "I am still in the process of learning nodejs since I made the switch from PHP. I do already feel comfortable using it as my back-end. I can set up a server and connect to a database, make POST GET DELETE request, User autentification using Json Web tokens. "
            v-bind:tags="['webpack', 'vuejs', 'Jquery', 'I18next']"
            imageName="nodejs"
        />
        <SingleSkill
            title= "MongoDB"
            text= "I am still in the process of learning nodejs since I made the switch from PHP. I do already feel comfortable using it as my back-end. I can set up a server and connect to a database, make POST GET DELETE request, User autentification using Json Web tokens. "
            v-bind:tags="['webpack', 'vuejs', 'Jquery', 'I18next']"
            imageName="mongodb"
        />
         <SingleSkill
            title= "PHP & MYSQL"
            text= "I am still in the process of learning nodejs since I made the switch from PHP. I do already feel comfortable using it as my back-end. I can set up a server and connect to a database, make POST GET DELETE request, User autentification using Json Web tokens. "
            v-bind:tags="['webpack', 'vuejs', 'Jquery', 'I18next']"
            imageName="server"
        />            
    </section>
    
</template>

<script>
import SingleSkill from "../SingleSkill";
export default {
    name: "BackEnd",
    components: {
        SingleSkill
    }

}
</script>

<style>

</style>