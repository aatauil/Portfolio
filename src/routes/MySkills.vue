<template>
  <section class="skills_container">
      <MyTitle title="My Skills"/>
      <div class="drop_container">
        <div class="drop_selected drop_item" @click="showDrop = !showDrop">
          <span>{{selected}}</span> 
          <i class="gg-chevron-down" v-bind:class="{ rotate : showDrop }"></i>
        </div>
        <div v-if="showDrop == true" class="drop_menu">
              <router-link class="drop_item" @click.native="ChangeSelected('Front-end')" to="/MySkills/">Front-end</router-link>
              <router-link class="drop_item" @click.native="ChangeSelected('Back-end')" to="/MySkills/BackEnd">Back-end</router-link>
              <router-link class="drop_item" @click.native="ChangeSelected('Design')" to="/MySkills/Design">Design</router-link>
              <router-link class="drop_item" @click.native="ChangeSelected('Adobe')" to="/MySkills/Adobe">Adobe</router-link>
              <router-link class="drop_item" @click.native="ChangeSelected('CMS')" to="/MySkills/Cms">CMS</router-link>
              <router-link class="drop_item" @click.native="ChangeSelected('Other')" to="/MySkills/Other">Other</router-link>
        </div>
      </div>
      <router-view :key="$route.path"></router-view>
  </section>
</template>

<script>
import MyTitle from "../components/MyTitle"
export default {
    name: "MySkills",
    data() {
      return {
        selected: "Front-end",
        showDrop: false,
      }
    },
    components: {
      MyTitle
    },

    methods: {
      ChangeSelected: function(name) {
         console.log(this.selected)
        this.selected = name;
        this.showDrop = false;
       
      }
    },

}
</script>

<style lang="scss">
@import "../scss/main.scss";
@import "../scss/font-icons.scss";

// The current skill child container 

.focused-skill_container{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @include breakpoint(tablet-md){
       flex-direction: row;
       flex-wrap: wrap;
       padding: 1rem;
    }

    
}

// ==================================

.skills_container{
  max-width: 1280px;
  margin: auto;
}

li {
    list-style-type: none;
}


.drop_container{
  position: relative;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.13);
  width: 80%;
  margin: auto;
  margin-bottom: 2rem;
   @include breakpoint(tablet-md){
     margin-top: 6rem;
     margin-bottom: 5rem;
   }

}

.drop_selected{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.drop_menu{
  position: absolute;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.13);
  width: 100%;
  padding-left: 0;
  margin-top: 1rem;

  & > .active-link{
    display: none;
  }
}

.drop_item{
  padding: .8rem .8rem .8rem 1.5rem;
  font-weight: 700;
  font-size: var(--size-btn);
  border: 2px solid rgba(0, 0, 0, 0.048);
  text-decoration: none;
  color: black;
  background-color: white;
}

.rotate{
  transition: all .2s;
  transform: rotate(180deg);
}





</style>