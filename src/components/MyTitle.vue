<template>
  <h1 class="heading_title">{{title}} <span class="heading_title-decoration">{{title}}</span></h1>
</template>

<script>
export default {
    name: "singleTitle",
    props: {
        title: String
    }
}
</script>

<style lang="scss">

@import "../scss/main.scss";

.heading_title{
  z-index: 10;
  margin-top: 5vw;
  position: relative;
  font-size: var(--size-h1);
  padding: 2rem 0 1rem 2rem;

  white-space: nowrap;
  width: min-content;

  &::before{
    position: absolute;
    content: "";
    width: 40%;
    height: 1rem;
    bottom: -5px;
    border-radius: 50px;
    background-color: $color-pink;
  }

}

.heading_title-decoration{
    position: absolute;
    font-size: var(--size-h1);
    left: 0;
    transform: translate(-10%, -5%);
    top: 0;
    opacity: .1;
    @include breakpoint(tablet-md){
      font-size: calc(var(--size-h1) + 10vw );
      transform: translate(-30%, -40%);
    }
}

</style>