<template>
    <section class="focused-skill_container">
        <SingleSkill
                title= "XD"
                text = "I have a <b> very good </b> understanding of adobe XD. It's my prefered mockup tool if I work alone. In team I use <b> Figma </b> instead since I feel it is so much butter for collaboration use. <br><br> I do not use the animation capabilities as often but I know how it works. I also name my layers for ease of use and exports."
                v-bind:tags="['Mockups', 'Figma', 'Animation', 'Mobile & Desktop']"
                imageName="adobexd"
        />
         <SingleSkill
                title= "Illustrator"
                text= "I have a good to very good understanding of Illustrator. Most of the tools on the toolbar I have used before. I mainly use Illustrator for logo Design, custom icons and advanced background shapes.
                <br><br> Affter adobe XD , illustrator is on of the adobe softwares I feel most comfortable using."
                v-bind:tags="['Vector', 'Logo', 'Icons', 'Backgrounds']"
                imageName="illustrator"
        />
           <SingleSkill
                title= "After Effects"
                text= "I have a basic to good understanding of After effects. It is one of the more complicated and advanced software of Adobe. I know how to create animations based on vector layers. How to customize ease functions. <br><br> For web Devlopment I mainly use this together with the BodyMovn plugin to export Lottie animations. "
                v-bind:tags="['Animations', 'Lottie', 'Effects', 'Media Encoder']"
                imageName="aftereffects"
        />
         <SingleSkill
                title= "Premiere Pro"
                text= "I have a good understading of Premiere Pro. It is relatively easy to use. I made myself familiar with the effects panel. I also know how to balance sound and retouch color with it. I mainly use Premiere pro to customize stock videos for website video backgrounds. <br><br> I also use it to reduce video sizes."
                v-bind:tags="['Montage', 'Color', 'Audio', 'Compression', 'Media Encoder']"
                imageName="premierepro"
        />
         <SingleSkill
                title= "Photoshop"
                text= "I have a basic understading of Photoshop. If I need to edit images I mostly use Pixlr since it has every tool I need for it. I mostly use Photoshop if I want to remove backgrounds with a mask."
                v-bind:tags="['Image mask', 'Pixlr']"
                imageName="photoshop"
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