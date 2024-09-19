<template>
        <!-- Landing Page -->
        <div class="row justify-content-center align-items-center pt-5 b"  data-aos="zoom-in-right" id="Landing" v-for="job in jobTitleData()" :key="job">
          <div class="col-md-6 d-flex justify-content-start a">
            <div class="home-text">
              <h1>{{job.nameInJob}}</h1>
              <p>{{ job.title }}</p>
              <div class="d-flex justify-content-start">

                <!-- Download CV -->
                <button class="button" type="button">
                  <span class="button__text">Download CV</span>
                  <span class="button__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35" id="bdd05811-e15d-428c-bb53-8661459f9307" data-name="Layer 2" class="svg"><path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path><path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path><path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path></svg></span>
                </button>

              </div>
            </div>
          </div>
          <div class="col-md-6  pt-3 b" id="self3-div">
            <img
              src="https://chany4.github.io/images.Portfolio/images/Desktop%20-%202%20(1).png"
              class="mx-auto"
              alt="self3" id="self3"
              
            />
            <div class="pt-5">
            <i class="lab la-html5"></i>
            <i class="lab la-css3-alt"></i>
            <i class="lab la-js-square"></i>

          </div>
          </div>
         
        </div>
        
</template>
<script>
export default {
  
    methods:{
        jobTitleData(){
            return this.$store.state.jobTitle
    },
  },
    computed: {
        getjobTitleData(){
            return this.$store.dispatch('getData')
    },
},
mounted() {
    this.getjobTitleData
}

}
</script>
<style scoped>

h1{
  color: #DB5500;
  font-size: 300%;
  font-family: "Oranienbaum", serif;

}

[alt="self3"]{
    aspect-ratio: 1/1;
}
.home-text{
  object-fit:contain;
}
h3{
  font-family: "Antic Didone", serif;
  font-size: 1.9rem;
  margin-top: 5%;
  font-weight: bolder;
}
#self3-div{
  object-fit: contain;
  object-position: center;
}

p{
  font-family: "Chathura", sans-serif;
  font-size: 70px;
  color: black;
  font-weight: bolder;
}

.lab{
  color: black;
  font-size: 4rem;
}
.lab{
  color: black;
  font-size: 3rem;
  animation: float 3s ease-in-out infinite;
}
.lab ::before{
  box-sizing: border-box;
}
.lab ::after{
  box-sizing: border-box;
}

@keyframes float {
  0%{
    transform: translateY(0px);
  }
  50%{
    transform: translateY(-10px);
    scale:1.1;
  }
  100%{
    transform: rotateY(0px);
  }
}

/* Download CV */
.button {
  position: relative;
  width: 160px;
  height: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  border: 1px solid #17795E;
  border-radius: 9px;
  background-color: #209978;
  overflow: hidden;
}

.button, .button__icon, .button__text {
  transition: all 0.3s;
}

.button .button__text {
  transform: translateX(10px);
  color: #fff;
  font-weight: 600;
}

.button .button__icon {
  position: absolute;
  transform: translateX(120px);
  height: 100%;
  width: 39px;
  background-color: #17795E;
  display: flex;
  align-items: center;
  justify-content: center;
}

.button .svg {
  width: 21px;
  fill: #fff;
}

.button:hover {
  background: #17795E;
}

.button:hover .button__text {
  color: transparent;
}

.button:hover .button__icon {
  width: 148px;
  transform: translateX(0);
}

.button:active .button__icon {
  background-color: #146c54;
}

.button:active {
  border: 1px solid #146c54;
}

</style>
    