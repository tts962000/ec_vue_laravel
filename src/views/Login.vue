<template>
    <h1>Login Page</h1>
    <button @click="loginLogoutToggle">Login Logout Toggle</button>
</template>
<script>
    export default{
        props:['logged'],
        methods:{
            loginLogoutToggle(){
                this.$emit('loginLogoutChange')
            }
        }
    }
</script>