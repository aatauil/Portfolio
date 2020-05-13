<template>
    <article class="skill-item">
       <h2 class="skill-item_header"><img class="skill-item_logo" v-bind:src="require('../assets/images/' + imageName + '')" v-bind:alt="imageName"><span>{{title}}</span></h2>
       <p class="skill-item_text" v-html="text"></p>
       <div class="skill-item_taglist">
           <div class="tag_container">
                <div class="tag_item" v-for="tag in tags" :key="tag.index">
                    {{ tag }}
                </div>
           </div>
       </div>
    </article>
</template>

<script>
export default {
    name: "Javascript",
    props: {
        title: String,
        text: String,
        tags: Array,
        imageName: String,

    }

}
</script>

<style lang="scss">

@import "../scss/main.scss";

.skill-item{
    width: 90%;
    margin: auto;
    margin-bottom: 3rem;
    border-top: 1px solid rgba(0, 0, 0, 0.055);
    @include breakpoint(tablet-md){
       width: 48%;
       border-top: none;
       margin: inherit;
       margin-bottom: 3rem;
    }
}



.skill-item_header{
    display: flex;
    align-items: center;
    font-size: var(--size-h2);
}

.skill-item_text{
    font-size: var(--size-p);
    background-color: white;
    box-shadow: 0px 0px 30px rgb(202, 202, 202);
    min-height: 200px;
    padding: 2rem 1.5rem;
    box-sizing: border-box;
    border-radius: 10px;
    @include breakpoint(tablet-md){
    min-height: 300px;
    }
}

.skill-item_logo{
    margin-right: 1rem;
}

.tag_container{
    display: flex;
    flex-wrap: wrap;
}

.tag_item{
    background-color: #111;
    color: white;
    font-weight: 700;
    padding: .5rem 1.5rem;
    border-radius: .5rem;
    margin-right: .5rem;
    margin-bottom: .5rem;
    font-size: var(--size-p);
}

</style>