<template>
    <div  class="row d-flex justify-content-center" v-for="x in getAbout" :key="x">
        <div>
            <h1>Who am I ?</h1>
            <p>{{ x. }}</p>
        </div>
    </div >
</template>
<script>
export default{
    methods : {
        getAbout(){
            this.$store.dispatch('about')
        }
    }
}
</script>