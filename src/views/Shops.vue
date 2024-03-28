<template>
    <h1>Shops Page</h1>
    <div class="d-flex">
        <div class="col-md-3 col-md-auto" v-for="shop in shops" :key="shop.id">
        <div class="card h-100" style="width: 18rem;">
  <img :src="`http://localhost:8000/images/`+shop.image" class="card-img-top" style="height: 15rem;" alt="...">
  <div class="card-body">
    <h5 class="card-title">{{ shop.name }}</h5>
    <p class="card-text">{{ shop.price }}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
    </div>
    <!-- <h2>Id is{{ id }}</h2>
    <h3>Name is {{ name }}</h3> -->
</template>
<script>
import datas from '../api/data'

export default{
    mixins:[datas],
    data () {
        return {
            name: null,
            id:null,
            shops:[]
        }
    },
    methods: {
        async loadshops () {
            this.shops=await this.loadData(this.name+'/'+this.id)
            console.log(this.shops)
        }
    },
    beforeMount(){
        this.name=this.$route.params.name;
        this.id=this.$route.params.id
        this.loadshops();
    }
}
</script>