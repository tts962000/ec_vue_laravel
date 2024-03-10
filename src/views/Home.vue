<template>
  <h1 class="text-danger">Home Page</h1>
</template>

<script>
import datas from '../api/data'
export default {
mixins:[datas],
beforeMount(){
  this.loadData('cats');
}
}
</script>

<style>

</style>