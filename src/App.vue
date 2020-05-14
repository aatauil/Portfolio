<template>
  <div id="app">
    <router-view>
    </router-view>
    <button class="btn-menu btn-menu_open" @click="menuToggle()">MENU</button>
    <MyNav  v-if="!menuState" v-on:close-menu="menuToggle" />
    <KinesisContainer class="kinesis_container">
      <Kinesis-element class=" kinesis_element home_x-mark " :strength="20" type="depth">
        <img  src="./assets/decoration/x-mark.svg" alt="x-mark decoration">
      </Kinesis-element>
      <Kinesis-element class=" kinesis_element home_pink-circle" :strength="10" type="depth">
        <img  src="./assets/decoration/pink-circle.svg" alt="pink-circle decoration">
      </Kinesis-element>
      <Kinesis-element class=" kinesis_element home_x-outline" :strength="30" type="depth" axis="y" transformOrigin="-150% 100%">
        <img  src="./assets/decoration/x-outline.png" alt="x-outline decoration">
      </Kinesis-element>
      <Kinesis-element class=" kinesis_element home_dots2" :strength="5">
        <img  src="./assets/decoration/dots2-big.svg" alt="dots decoration">
      </Kinesis-element>
    </KinesisContainer>
  </div>
</template>

<script>

import MyNav from "./components/MyNav";
import { KinesisContainer, KinesisElement} from 'vue-kinesis';

export default {
  name: 'App',
  data() {
    return {
      menuState: true
    }
  },

  methods: {
    menuToggle: function (){
      this.menuState = !this.menuState
    }
  },
  components: {
    MyNav,
    KinesisContainer,
    KinesisElement
  }
}
</script>

<style lang="scss">

@import "./scss/main.scss";
@import "./scss/global-class.scss";


html{
  font-size: 62.5%;
  height: 100%;
  background-color: #F6F6F6;


}

*{
  box-sizing: border-box;
  line-height: normal;
}

#app {
  position: relative;
  font-family: $poppins;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
  overflow-x: hidden;
  overflow-y: hidden;;


}

.btn-menu_open{
    color: black;
    background-color: white;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.342);
    border-radius: 5px;
    z-index: 10;
    cursor: pointer;

    &::before{
        content: url("./assets/icons/menu-open.svg");
        margin-right: 1rem;
        height: 20px;

    }

}

// Decoration 

.kinesis_container{
  position: absolute;
  width: 100vw;
  height: 100%;
  left: 0;
  top: 0;
}

.kinesis_element{
  position: absolute;
}

//Decoration

.home_x-mark{
  top: 60%;
  left: -10px;
  opacity: 1;
}

.home_pink-circle{
  top: -10px;
  right: -120px;
}

.home_x-outline{
  right: -100px;
  bottom: -100px;
}

.home_dots2{
  top: -100px;
  left: -100px;
}





</style>
