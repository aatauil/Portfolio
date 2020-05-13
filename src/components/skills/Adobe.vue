<template>
    <section class="focused-skill_container">
        <SingleSkill
                title= "XD"
                text= "I am still in the process of learning nodejs since I made the switch from PHP. I do already feel comfortable using it as my back-end. I can set up a server and connect to a database, make POST GET DELETE request, User autentification using Json Web tokens. "
                v-bind:tags="['webpack', 'vuejs', 'Jquery', 'I18next']"
                imageName="adobexd.png"
        />
         <SingleSkill
                title= "Illustrator"
                text= "I am still in the process of learning nodejs since I made the switch from PHP. I do already feel comfortable using it as my back-end. I can set up a server and connect to a database, make POST GET DELETE request, User autentification using Json Web tokens. "
                v-bind:tags="['webpack', 'vuejs', 'Jquery', 'I18next']"
                imageName="illustrator.png"
        />
           <SingleSkill
                title= "After Effects"
                text= "I am still in the process of learning nodejs since I made the switch from PHP. I do already feel comfortable using it as my back-end. I can set up a server and connect to a database, make POST GET DELETE request, User autentification using Json Web tokens. "
                v-bind:tags="['webpack', 'vuejs', 'Jquery', 'I18next']"
                imageName="aftereffects.png"
        />
         <SingleSkill
                title= "Premiere Pro"
                text= "I am still in the process of learning nodejs since I made the switch from PHP. I do already feel comfortable using it as my back-end. I can set up a server and connect to a database, make POST GET DELETE request, User autentification using Json Web tokens. "
                v-bind:tags="['webpack', 'vuejs', 'Jquery', 'I18next']"
                imageName="premierepro.png"
        />
    </section>
</template>

<script>
import SingleSkill from "../SingleSkill";
export default {
    name: "Adobe",
    components: {
        SingleSkill
    }

}
</script>

<style>

</style>