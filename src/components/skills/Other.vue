<template>
  <section class="focused-skill_container">
     <SingleSkill
            title= "GraphQL"
            text= "I have a <b> good </b> understanding of GraphQL. I have used it in one of my projects using Apollo-react. I am really impressed by it and plan to use it for all my future projects. <br><br> For the moment my knwoledge is only limited to Querying but I already started learning how to create my own Graphql API. "
            v-bind:tags="['Apollo', 'Variables', 'Query', 'Mutations']"
            imageName="graphql"
        />

         <SingleSkill
            title= "Ubuntu"
            text= "I use Ubuntu as my prefered <b> Linux distribution </b>. I have a <b> sufficiant </b> knowledge on ubuntu as a web developer. I  feel very comfortable using the CLI. Understanding I have a good understanding of user & file permissions.<br><br> I can easily set up a web server, firewall, pm2... Basically everything to deploy a website or web app using the CLI only.  "
            v-bind:tags="['Linux', 'Sudo', 'Server', 'SSH']"
            imageName="ubuntu"
        />

        
         <SingleSkill
            title= "Digital Ocean"
            text= "I have a <b> basic </b> knowledge of Digital Ocean. I know how to set up a droplet and SSH into it and start working. <br><br> I only recently decides to use this. I expect to use this VPS as my default in the near future. I use Ubuntu as my default system. Other goals are to set up <b> CI/CD </b> together with  <b> Github actions </b> to ensure worriless hosting. "
            v-bind:tags="['VPS', 'SSH', 'Cmder', 'CI/CD' , 'Github Actions']"
            imageName="digitalocean"
        />

        <SingleSkill
            title= "Docker"
            text= "I have a <b> Good </b> understanding of the theoretical part of docker. I am currently using Docker in practice for a personal project. <br><br> In the future I hope to also learn Kubernetes and eventually use these together to create microservice architecture based applications. "
            v-bind:tags="['Container', 'Images', 'Kubernetes', 'Microservice']"
            imageName="docker"
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