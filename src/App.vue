<template>
  <Nav :logged="logged"/>
  <div class="container">
    <router-view logged="logged" @loginLogoutChange="loginLogoutChange"/>
  </div>
</template>
<script>
import Nav from './components/Nav.vue'
  export default{
    components:{Nav},
    data (){
      return{
        logged:false
      }
    },
    methods:{
      loginLogoutChange(){
        this.logged=!this.logged
      }
    }
  }
</script>