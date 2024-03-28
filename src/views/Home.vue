
<template>
  <h1 class="text-danger">Home Page</h1>
  <div class="">
    <HeadSlider :cats="cats" :tags="tags"/>
    <div class="d-flex justify-content-center mb-3">

  </div>
  </div>
</template>
<script>
import datas from '../api/data'
import HeadSlider from '../components/HeadSlider.vue'
export default {
mixins:[datas],
components:{HeadSlider},
data () {
  return {
    tags: [],
    cats:[]
  }
},

async beforeMount(){
    this.tags=await this.loadData('tags');
    for(let tag of this.tags){
      tag.products=await this.loadData('pbt/'+tag.id);
    }
    console.log(this.tags);
    this.cats=await this.loadData('cats');
    // // console.log(this.cats)
    // this.tags=await this.loadData(this.$baseUrl+"tags");
    // for(let tag of this.tags){
    //   tag.products=await this.loadData(this.$baseUrl+"pbt/"+tag.id);
    // }
    // console.log(this.tags);
    // this.cats=await this.loadData(this.$baseUrl+"cats");
}
}
</script>
<style>

</style>