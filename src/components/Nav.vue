<template>
  <div class="container-fluid bg-dark">
    <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div class="container-fluid">
    <router-link class="nav-link active text-white" aria-current="page" to="/">EC_Vue_Laravel <i class="ms-2 fa-solid fa-house"></i></router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li v-if="logged"><a class="dropdown-item" href="#">Logout</a></li>
            <li v-if="!logged"><router-link class="dropdown-item" to="/login">Login</router-link></li>
            <li><hr class="dropdown-divider"></li>
            <li v-if="!logged"><router-link class="dropdown-item" to="/register">Register</router-link></li>
          </ul>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  </div>
</template>

<script>
export default {
    props:['logged']
}
</script>

<style>

</style>