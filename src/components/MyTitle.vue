<template>
  <h1 class="heading_title">{{title}}</h1>
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
  position: relative;
  font-size: $size-h1;
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

  &::after{
    position: absolute;
    content: "My work";
    font-size: 5rem;
    left: 0;
    transform: translate(-10%, -10%);
    top: 0;
    opacity: .1;
  }
}

</style>