<template>
  <div class="d-flex justify-content-center mb-3">
    <ul class="list-group list-group-horizontal">
  <li class="list-group-item" v-for="tag in tags" :key="tag.id">
    <router-link class="text-decoration-none" :to="'/shops/cbt/'+tag.id">{{ tag.name }}</router-link>
  </li>
  
</ul>
  </div>
<div class="col-md-6 offset-4">
    <div id="carouselExample" class="carousel d-flex justify-content-center w-50">
  <div class="carousel-inner">
    <div class="carousel-item"  v-for="(cat,index) in cats" :key="cat.id" :class="{active:index===0}">
      <img :src="`http://localhost:8000/images/`+cat.image" class="d-block w-100">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
</template>
<script>
    // import data from '../api/data'
    export default{
        // mixins:[data],
        props:['tags','cats']
    }
</script>