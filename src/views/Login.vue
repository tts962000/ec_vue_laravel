<template>
    <h1 class="text-center text-info my-5">Login Page</h1>
    <form @submit.prevent="userLogin" class="col-md-6 offset-md-3">
        <div class="mb-3">
            <label for="email" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" v-model="userCreditial.email" @input="emailChange">
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" v-model="userCreditial.password" @input="passwordChange">
        </div>
        <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" class="btn btn-primary">Login</button>
    </form>
    <button @click="loginLogoutToggle">Login Logout Toggle</button>
</template>
<script>
export default {
    props: ['logged'],
    data () {
        return {
            userCreditial:{
            email:"",
            password:""
        }
        }
    },
    methods: {
        emailChange(){
            console.log(this.userCreditial.email)
        },
        loginLogoutToggle() {
            this.$emit('loginLogoutChange')
        },
        async userLogin(){
            // console.log(this.userCreditial);
            let res = await fetch("http://localhost:8000/api/login", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.userCreditial),
    });
    let userData = await res.json();
    console.log(userData);
    if(userData.status){
        localStorage.setItem('token',userData.token);
    }
        }
    }
}
</script>