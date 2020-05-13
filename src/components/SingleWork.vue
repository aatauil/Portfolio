<template>
  <article class="work-item">
    <div class="work-item_header">
      <h2 class="work-item_title">{{title}}</h2>
      <p class="work-item_text" v-html="text"></p>
      <div class="work-item_taglist" v-bind:class="{ hide : !hideItem }">
          <div class="tag_container">
              <div class="tag_item" v-for="tag in tags" :key="tag.index">
                  {{ tag }}
              </div>
          </div>
      </div> 
    </div>
      <a class="work-item_link" v-bind:class="{ hide : hideItem }" v-bind:href="siteLink"><span class="pink">Visit</span> {{title}}</a>
      <img class="work-item_image" v-bind:src="require('../assets/images/' + imageName + imageSize + '.png')" v-bind:alt="imageName"> 
     
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
      tags: Array
    },


    data() {
      return {
        imageSize: "",
        hideItem: true
      }
    },

    methods: {
    handleView(){
      if((window.innerWidth >= 992 )){
      this.imageSize= "@2x"
      this.hideButton = true
      } else {
        this.imageSize= ""
        this.hideButton = false
      }
    }
  },

  
  created() {
    this.handleView();
    window.addEventListener("resize", this.handleView)
  }


}
</script>



<style lang="scss">
@import "../scss/main.scss";

.work-item{
  position: relative;
  padding: 1rem;
  margin-bottom: 3rem;
  border-top: 1px solid rgba(0, 0, 0, 0.055);
  @include breakpoint(tablet-md){
    margin: auto;
    border-top: none;
    padding-bottom: 6rem;
    padding-top: 6rem;
    display: flex;
    border-bottom: 2px solid rgba(0, 0, 0, 0.055);
  }


}

.work-item_header{
  @include breakpoint(tablet-md){
  width: 50%;
  }
  
}

.work-item_title{
  font-size: var(--size-h2);
}

.work-item_text{
  font-size: var(--size-p);
  width: 80%;
  font-weight: 700;
  opacity: .7;
  margin-bottom: 2rem;
  @include breakpoint(tablet-md){
    width: 90%;
    opacity: 1;
  }
  
}

.work-item_link{
  font-weight: 700;
  text-decoration: none;
  color: black;
  font-size: var(--size-btn);
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

  @include breakpoint(tablet-md){
     position: relative;
     transform: translate(0%, 0%);
     opacity: 1;
      bottom: 0%;
      width: 50%;
  }
}

.hide{
  display: none;
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