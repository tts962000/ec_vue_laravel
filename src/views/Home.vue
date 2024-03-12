
<template>
  <h1 class="text-danger">Home Page</h1>
  <div class="d-flex justify-content-center">
    <HeadSlider/>
  </div>
</template>
<script>
// import datas from '../api/data'
import HeadSlider from '../components/HeadSlider.vue'
export default {
// mixins:[datas],
components:{HeadSlider},
// beforeMount(){
//   this.loadData('cats');
// }
}
</script>
<style>

</style>