<template lang="">
  <div class="Wrapper">
    <section class="section Landing i" id= "main">
      <LandingComp/>
    </section>

    <section class="section about i" id= "aboutSection">
      <AboutMe/>
    </section>
    
    <section class="section space-resume i" id= "Resume">
      <ResumeComp/>
    </section>

    <section class="section i" id= "skills">
      <SkillsComp/>
    </section>

    <section class="section space-projects i" id= "projects">
      <Projects/>
    </section>
    <section class="section" id="contact">
      <Contact/>
    </section>
    
    <section class="footer">
      <FooterComp/>
    </section>

  </div>
</template>
<script>
import LandingComp from '@/components/Landing.vue'
import AboutMe from '@/components/AboutMe.vue'
// import ResumeComp from '@/components/ResumeComp.vue'
// import SkillsComp from '@/components/SkillsComp.vue'
import Projects from '@/components/Projects.vue'
// import TestimonialsComp from '@/components/TestimonialsComp.vue'
import Contact from '@/components/Contact.vue'
// import FooterComp from '@/components/FooterComp.vue'
// import SpinnerComp from '@/components/SpinnerComp.vue'


export default {
  components : {
    LandingComp,
    AboutMe,
    // ResumeComp,
    // SkillsComp,
    Projects,
    // TestimonialsComp,
    Contact
    // FooterComp
    // SpinnerComp
  }
  }

</script>
<style>
  
</style>