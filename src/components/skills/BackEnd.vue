<template>
  <section class="focused-skill_container">
      <SingleSkill
            title= "NodeJS"
            text= "I am currently in the process of learning NodejJS. I have a <b> basic to good </b> understanding of NodeJS. I can set up a server and connect to a database, make <b> CRUD </b> request functions, User authentification using <b> Json Web tokens </b>. <br><br> I am in the process of learning <b> ExpressJS </b>. "
            v-bind:tags="['Javascript', 'JWT', 'NPM', 'ExpressJS', 'CRUD']"
            imageName="nodejs"
        />
        <SingleSkill
            title= "MongoDB"
            text= "I am currently in the process of learning MongoDB. I have a <b> basic to good </b> understanding of MongoDB. The data is stored in <b> JSON </b> like format that I feel familiar with. I can make a local connection using <b> MongoDB shell as wel as Compas </b> and a remote one using <b> MongDB Atlas</b>. <br><br> There is still a road ahead but I feel <b> very very positive </b> in mastering this towards the future. "
            v-bind:tags="['BSON', 'Compass', 'Atlas', 'query']"
            imageName="mongodb"
        />
         <SingleSkill
            title= "PHP & MySQL"
            text= "I have a good understanding of PHP & MySQL. I recently switched from procedural PHP to Object Oriented PHP. I also have a general understanding of the MVC model and know how to apply this model in a project. Using Mysqli & PDO is no problem for me. I am currently learning Symfony as my PHP framework."
            v-bind:tags="['phpMyAdmin', 'PDO', 'Mysqli', 'Object oriented', 'MVC', 'Symfony', 'Queries', 'Composer']"
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