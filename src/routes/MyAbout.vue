<template>
  <section class="about_container">
    <MyTitle
    title="About"
    />
      <article class="about_info">
        <h3 class="about_title">Personal Info</h3>
        <p class="about_text">On this page you find links and other information.
            My personal information can <b> only be found on my resume (paper or digital) </b>.
            You do not have my resume yet? Fill in the form below and I will mail it to you as 
            quickly as possible. 

            I decided not to display my personal information here to <b> protect my  privacy and 
            prevent identity theft </b>.
        </p>
      </article>
      <article class="about_form-container">
        <h3 class="about_form-title">Request resume</h3>
      <form action="" netlify>
        <div class="form_section">
          <label class="form_label" for="name">Name</label>
          <input class="form_input" type="text" name="name" id="name" required placeholder="">
        </div>
         <div class="form_section">
          <label class="form_label" for="message">Message</label>
          <textarea class="form_input" name="message" id="message" placeholder="(optional but highly recommended)"></textarea>
        </div>
        <input type="submit" class="form_submit-btn" value="Request">
      </form>

      </article>

      <article class="about_links-container">
        <h3 class="about_links-title">Links</h3>
        <div class="link-container">
          <p class="about_link-desc">Github:</p>
          <a class="about_link" href="https://github.com/aatauil">https://github.com/aatauil</a>
        </div>
        <div class="link-container">
          <p class="about_link-desc">Dribbble:</p>
          <a class="about_link" href="https://dribbble.com/Atauil">https://dribbble.com/Atauil</a>
        </div>

        <div class="link-container">
          <p class="about_link-desc">This website's Github Repo:</p>
          <a class="about_link" href="https://github.com/aatauil/Portfolio">https://github.com/aatauil/Portfolio</a>
        </div>

           <div class="link-container">
          <p class="about_link-desc">How incredibly fast this website has been made:</p>
          <a class="about_link" href="https://github.com/aatauil/Portfolio/blob/master/README.md">README link</a>
        </div>
      </article>
  </section>
</template>

<script>
import MyTitle from "../components/MyTitle"
export default {
    name: "MyAbout",
    components: {
      MyTitle

    }
}
</script>

<style lang="scss">
@import "../scss/main.scss";

.about_container{
  position: relative;
  max-width: 1280px;
  margin: auto;
  z-index: 10;
}


.about_info, .about_form-container, .about_links-container{
  background-color: white;
  width: 80%;
  margin: auto;
  margin-top: 3rem;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0px 0px 30px rgb(202, 202, 202);
}

.about_links-container{
  margin-bottom: 5rem;
}

.about_info{
  margin-top: 10rem;
}


.about_title, .about_form-title, .about_links-title{
  font-size: var(--size-h2);
  margin-top: 1rem;
}

.about_text{
  font-size: var(--size-p);
}


.form_section{
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  margin-top: 1rem;
}

.form_label{
  font-weight: 700;
  font-size: var(--size-p);
}

.form_input{
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.438);
  padding: 1rem;
  resize: none;
  font-size: var(--size-p);
}

.form_submit-btn{
  margin-top: 1rem;
  padding: 1rem 2rem;
  font-size: var(--size-p);
  font-weight: 700;
  background-color: var(--color-pink);
  border: none;
  border-radius: 5px;
  color: white;

}

.link-container{
  padding: 1rem;
  border-bottom: 1px solid rgba(216, 216, 216, 0.473);
}


.about_link-desc, .about_link{
  font-size: var(--size-p);
  font-weight: 700;
}



</style>