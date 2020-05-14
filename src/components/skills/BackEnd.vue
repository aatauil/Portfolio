<template>
  <section class="focused-skill_container">
      <SingleSkill
            title= "NodeJS"
            text= "I am still in the process of learning nodejs since I recently made the switch from PHP. I have a <b> basic to good </b> understanding of NodeJS. I can set up a server and connect to a database, make <b> POST GET DELETE </b> request functions, User authentification using <b> Json Web tokens </b>. <br><br> I am in the process of learning <b> ExpressJS </b>. "
            v-bind:tags="['javascript', 'JWT', 'NPM', 'ExpressJS']"
            imageName="nodejs"
        />
        <SingleSkill
            title= "MongoDB"
            text= "I am still in the process of learning MongoDB since I made the switch from MySQL. I have a <b> basic to good </b> understanding of MongoDB. The data is stored in <b> JSON </b> like format that I feel familiar with. I can make a local connection using <b> MongoDB Atlas </b> and a remote one using <b> MongDB Atlas and Nodejs </b>. <br><br> There is still a road ahead but I feel <b> very very positive </b> in mastering this towards the future. "
            v-bind:tags="['BSON', 'Compass', 'Atlas', 'query']"
            imageName="mongodb"
        />
         <SingleSkill
            title= "PHP & MySQL"
            text= "I know more then the basics in how to use PHP & MySQL. I did not feel comfortable using these towards the future so I made the switch to NodeJS and MongoDB. <br><br> I can use these technologies if I have to but I prefere the alternatives.  "
            v-bind:tags="['phpMyAdmin', 'Wordpress', 'Jquery', 'Tables', 'Relational']"
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