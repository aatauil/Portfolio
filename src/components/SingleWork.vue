<template>
  <article class="work-item">
      <h3 class="work-item_title">{{title}}</h3>
      <p class="work-item_text" v-html="text"></p>
      <a class="work-item_link" v-bind:href="siteLink"><span class="pink">Visit</span> {{title}}</a>
      <img class="work-item_image" v-bind:src="require('../assets/images/' + imageName + '')" v-bind:alt="imageName">

  </article>
</template>

<script>
export default {
    name: "SingleWork",
    props: {
      title: String,
      text: String,
      siteLink: String,
      imageName: String,
    }


}
</script>



<style lang="scss">
@import "../scss/main.scss";

.work-item{
  position: relative;
  padding: 1rem;
  margin-bottom: 2rem;
  border-top: 1px solid rgba(0, 0, 0, 0.055);


}

.work-item_title{
  font-size: $size-h3;
}

.work-item_text{
  font-size: $size-p;
  width: 80%;
  font-weight: 700;
  opacity: .7;
  margin-bottom: 2rem;
}

.work-item_link{
  font-weight: 700;
  text-decoration: none;
  color: black;
  font-size: $size-btn;
  padding: .5rem 1rem;
  background-color: white;
  border-radius: 1rem;

}

.work-item_image{
  position: absolute;
  right: 0;
  bottom: 50%;
  transform: translate(40%, 60%);
  z-index: -1;
  opacity: .1;
}

</style>