<template>
  <div>
    <Spinner v-if="showSpinner" />
    <div v-else>
      <Navbar />
      <main>
        <router-view />
      </main>
      <Footer />
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import Spinner from '@/components/Spinner.vue';

export default {
  components: {
    Navbar,
    Footer,
    Spinner
  },
  data() {
    return {
      showSpinner: true
    };
  },
  mounted() {
    setTimeout(() => {
      this.showSpinner = false;
    }, 2000); // 2 seconds delay before hiding the spinner
  }
};
</script>

<style src="./assets/css/styles.css">
</style>