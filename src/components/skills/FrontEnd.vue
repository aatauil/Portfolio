<template>
    <section class="front_container"> 
        <SingleSkill
            title= "Javascript"
            text= "My first and most prefered programming language.  I can say with confident that I have a very good understanding of Javascript. I know how the language gets compiled in the browser and therefor bugs usually get resolve very quickly.<br><br> I use ES6 syntax and am currently learning ES7 & ES8 and ofcoarse keeping on eye out for es.next. Very excited!<br><br> You never finish learning Javascript there is always more!"
            v-bind:tags="['webpack', 'vuejs', 'Jquery', 'I18next']"
            imageName="javascript.png"
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

.front_container{
    display: flex;
    flex-direction: column;
}

</style>