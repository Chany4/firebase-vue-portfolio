<template>
  <div class="footerBottom py-3">
    <p class="lead text-center">
      Chandré Leigh Davids &copy; <span>{{ cYear }}</span>
    </p>
  </div>
</template>
<script>
export default {
  name: "FooterComp",
  data() {
    return {
      cYear: new Date().getUTCFullYear(),
    };
  },
};
</script>
<style scoped>
 
</style>
