<template>
   <section class="focused-skill_container">
     <SingleSkill
            title= "Wordpress"
            text= "I have a very good <b> non coding </b> understanding of Wordpress. I have used wordpress for a couple of projects and seen in <b> My Work </b> page. I know how to install themes, plugins & use them builders like Elementor. I know how to migrate from local to live. I have used <b> Local By Flywheel </b>. <br><br> I now use wordpress less since I started using <b> Headless CMS's </b> like Strapi."
            v-bind:tags="['Themeforest', 'Plugins', 'Config.php', 'Elementor']"
            imageName="wordpress"
        />
       <SingleSkill
            title= "Strapi"
            text= "I have a <b> basic to good </b> understanding of Strapi. I believe headless CMS's are the future. I started using Strapi since it is open-source and their upcoming features look very promising. <br><br> I decided to use headless CMS's since it gives more control of the front-end. Also because they are much more scalable. I intend to also learn Contentfull, Butter & Craft in the future"
            v-bind:tags="['Headless CMS', 'Open-source', 'API', 'The future']"
            imageName="strapi"
        />
    </section>
</template>

<script>
import SingleSkill from "../SingleSkill";
export default {
    name: "Cms",
    components: {
        SingleSkill
    }

}
</script>

<style>

</style>