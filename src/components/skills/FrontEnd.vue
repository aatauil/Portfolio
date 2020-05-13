<template>
    <section class="focused-skill_container"> 
        <SingleSkill
            title= "Javascript"
            text= "My first and most prefered programming language.  I can say with confident that I have a very good understanding of Javascript. I know how the language gets compiled in the browser and therefor bugs usually get resolve very quickly.<br><br> I use ES6 syntax and am currently learning ES7 & ES8 and ofcoarse keeping on eye out for es.next. Very excited!<br><br> You never finish learning Javascript there is always more!"
            v-bind:tags="['webpack', 'vuejs', 'Jquery', 'I18next']"
            imageName="javascript"
        />
         <SingleSkill
            title= "HTML"
            text= "My HTML knowledge is very good. I know when and where to use the correct tags. Meta tags have no secrets for me either. I know the importance of correct HTML tags for screen readers and SEO. So I try to use div tags only for styling purposes like described by the World Wide Web Consortium. "
            v-bind:tags="['semantic', 'meta', 'SEO Friendly']"
            imageName="html"
        />
         <SingleSkill
            title= "CSS"
            text= "Very under-estimated but luckily mastered! I can write clean, non repeating and responsive css. Mobile first or desktop first. No need to constantly look up attributes as I know most of them. I use css units and variables appropriotly. I make sure that every browser displays the website the same way. 

I evolved and use Sass/scss now as standard. Creating a structured filetree and using variables and mixins where possible.  "
            v-bind:tags="['Scss/Sass', 'Flex', 'Grid', 'Responsive']"
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