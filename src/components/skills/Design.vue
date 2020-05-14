<template>
   <section class="focused-skill_container">
      <SingleSkill
          title= "UI"
          text= "I have a <b> very good </b> understanding of UI design. I really enjoy designing websites. I understand the Design Principles and know all about for example: <b> Color Theory </b> and  <b> Typography </b>. I regularly visit <b> Dribbble & Pinterest </b> to stay up to date with the current trends.I can adapt to many styles and tastes. <br><br> <i> On the About page you can find the link to my Dribbble account. </i>"
          v-bind:tags="['Typography', 'Whte-space', 'Dribbble', 'Pinterest']"
          imageName="ui"
      />
       <SingleSkill
          title= "logo"
          text= "I have a <b> good </b> understanding of logo Design. I know how to match the logo with the feeling of a company. I mostly do geometric design & word logo's. <br><br> This is more of a hobby but I did already create logo's professionally ."
          v-bind:tags="['Illustrator', 'Geometric', 'Alignment', 'Golden ratio']"
          imageName="fayli"
      />
   </section>
</template>

<script>
import SingleSkill from "../SingleSkill";
export default {
    name: "Design",
    components: {
        SingleSkill
    }
}
</script>

<style>

</style>