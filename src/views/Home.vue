<template lang="">
  <div class="Wrapper">
    <section class="section Landing i" id= "main">
      <LandingComp/>
    </section>

    <section class="section about i" id= "aboutSection">
      <AboutMe/>
    </section>
    
    <section class="section space-resume i" id= "Resume">
      <Resume/>
    </section>

    <section class="section i" id= "skills">
      <Skills/>
    </section>

    <section class="section space-projects i" id= "projects">
      <Projects/>
    </section>
    <section class="section" id="contact">
      <Contact/>
    </section>
    
    

  </div>
</template>
<script>
import LandingComp from '@/components/Landing.vue'
import AboutMe from '@/components/AboutMe.vue'
import Resume from '@/components/Resume.vue'
import Skills from '@/components/Skills.vue'
import Projects from '@/components/Projects.vue'
import Contact from '@/components/Contact.vue'


export default {
  components : {
    LandingComp,
    AboutMe,
    Resume,
    Skills,
    Projects,
    Contact
  }
  }

</script>
<style>
  
</style>