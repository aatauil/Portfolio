<template>
    <section class="focused-skill_container"> 
        <SingleSkill
            title= "Javascript"
            text= "My first and most prefered programming language. I can say with confidence that I have a <b> very good </b> understanding of Javascript. I enjoy the language a lot. I use <b> ES6 syntax </b>. I can handle a lot of data in an arranged and tidy way. <br><br> I try to make my code as efficient as possible, no repeating or unnescessary long code. I have also used a lot of different libraries. "
            v-bind:tags="['Webpack', 'Vuejs', 'Jquery', 'I18next' , 'ES6']"
            imageName="javascript"
        />

         <SingleSkill
            title= "VueJS"
            text= "I have a <b> good </b> understanding of VueJS. I know how use components, routes, props, methods, bindings etc.. . I am in the process of learning Veux and Nuxtjs. <br><br> Otherwise I know how to manage a small to medium projects using VueJS. I am currently learning <b> NuxtJS </b><br><br> <i> note: This website has been made using VueJS </i>   "
            v-bind:tags="['Framework', 'Router', 'Components', 'NuxtJS']"
            imageName="vuejs"
        />

         <SingleSkill
            title= "HTML"
            text= "My HTML knowledge is <b> very good </b>. I know when and where to use the correct tags.<b> Meta tags </b> have no secrets for me either. <br><br> I know the importance of correct HTML tags for screen readers and SEO. So I try to use div tags only for styling purposes like described by <b> the World Wide Web Consortium. </b> "
            v-bind:tags="['Semantic', 'Meta', 'SEO Friendly']"
            imageName="html"
        />
         <SingleSkill
            title= "CSS"
            text= "I have a <b> very good </b> understanding of CSS, I mostly use Sass now. I try to avoid repeating code as much as possible. I use <b> variables </b> where possible. <br><br> I keep my code clean and formatted. 9/10 times I do not need to look up a specific attribute since I <b> memorized </b> the common and partially uncommon ones. I can write <b> mobile first </b> as wel as <b> desktop first </b>. I know how to write <b> custom animations </b>."
            v-bind:tags="['Scss/Sass', 'Flex', 'Grid', 'Responsive', 'Variables' , 'Mixins' ,'Structure']"
            imageName="css"
        />
    </section>
</template>

<script>
import SingleSkill from "../SingleSkill";
export default {
    name: "FrontEnd",
    components: {
        SingleSkill
    }

}
</script>

<style>


</style>