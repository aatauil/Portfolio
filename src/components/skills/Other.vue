<template>
  <section class="focused-skill_container">
     <SingleSkill
            title= "GraphQL"
            text= "I have a <b> basic </b> understanding of GraphQL. I am in the process of learning. This in combination of <b> Apollo & Hasura </b>. I very much like how GraphQL query's its data. I know how to <b> mutate </b> data too. Like MongoDB I feel very postive in learning this technologies towards the future"
            v-bind:tags="['Apollo', 'Hasura', 'Query', 'Mutations']"
            imageName="graphql"
        />

         <SingleSkill
            title= "Ubuntu"
            text= "I use Ubuntu as my prefered <b> Linux distribution </b>. I have a <b> sufficiant </b> knowledge on ubuntu for a web developer. This includes knowing how to use the CLI. Understanding file permissions. Setting up a server. Update & Upgrade packages."
            v-bind:tags="['Linux', 'Sudo', 'Server', 'SSH']"
            imageName="ubuntu"
        />

        
         <SingleSkill
            title= "Digital Ocean"
            text= "I have a <b> basic </b> knowledge of Digital Ocean. I know how to set up a droplet and SSH into it. <br><br> I only recently decides to use this. I expect to use this VPS as my default in the near future. I use Ubuntu as my default system. Other goals are to set up <b> CI/CD </b> together with  <b> Github actions </b> to ensure worriless hosting. "
            v-bind:tags="['VPS', 'SSH', 'Cmder', 'CI/CD' , 'Github Actions']"
            imageName="digitalocean"
        />

        <SingleSkill
            title= "MEVN stack"
            text= "The MEVN stack is my prefered stack. Not yet perfectionized but I do work towards this becoming my <b> default stack </b>.  "
            v-bind:tags="['MongoDB', 'ExpressJS', 'VueJS', 'NodeJS']"
            imageName="mevn"
        />


        
  </section>
</template>

<script>
import SingleSkill from "../SingleSkill";
export default {
    name: "Other",
    components: {
        SingleSkill
    }

}
</script>

<style>

</style>