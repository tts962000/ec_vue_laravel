<template>
  <ul class="list-group list-group-horizontal">
  <li class="list-group-item" v-for="tag in tags" :key="tag.id">{{ tag.name }}</li>
  
</ul>
</template>
<script>
    import data from '../api/data'
    export default{
        mixins:[data],
        data () {
            return {
                tags:[]
            }
        },
        async beforeMount(){
            // this.loadData('cats') //1
            let tagsData=await this.loadData('tags'); 
            // console.log(tagsData);
            this.tags=tagsData.tags;   
         }
    }
</script>