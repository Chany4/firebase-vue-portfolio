<template>
  <div class="footerBottom py-3">
    <div class="d-flex justify-content-center py-3">
      <a href="https://github.com/Chany4"><i class="bi bi-github"></i></a>
      <a href=""></a>
    </div>
    <div>
      <p class="lead text-center">
      Chandré Leigh Davids &copy; <span>{{ cYear }}</span>
    </p>
    </div>
    
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
