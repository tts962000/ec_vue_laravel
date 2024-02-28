<template>
  <Nav :logged="logged"/>
  <router-view logged="logged" @loginLogoutChange="loginLogoutChange"/>
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