<template>
  <section class="error_container">
      <h1 class="error_title">4<span class="pink">0</span>4</h1>
      <h2 class="error_text">Sorry This Page has not been found</h2>
      <a class="error_link" href="">Back to Home</a>
  </section>
</template>

<script>
export default {
    name: "404"

}
</script>

<style lang="scss">
  .error_container{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
  }

  .error_title{
    font-size: var(--size-h1);
    margin-bottom: 0;
  }

  .error_text{
    font-weight: 700;
    font-size: var(--size-p);
    opacity: .8;
    margin-bottom: 3rem;
  }

  .error_link{
    transition: box-shadow .3s ease;
    text-decoration: none;
    font-weight: 700;
    font-size: var(--size-btn);
    box-shadow: 0px 0px 30px rgba(31, 31, 31, 0.205);
    background-color: white;
    color: black;
    padding: 1rem 2rem;
    border-radius: .5rem;
    z-index: 10;

    &:hover{
      box-shadow: 0px 0px 30px rgba(31, 31, 31, 0.507);
    }
  }

</style>