<template>
<h1>This is a catalogue</h1>
<SortVue/>
<div class="product_card row" >
  <div class="card col-md-3" v-for="product of products" :key="product.id" :product="product">
    <img :src="product.imgURL" class="card-img-top" :alt="product.title">
    <div class="card-body">
      <h5 class="card-title">{{product.title}}</h5>
      <p class="card-text">{{product.description}}</p>
      <div class="card-footer">
      <p><small>R{{product.price}}</small></p>
      </div>
    </div>
  </div>
  </div>
  
</template>

<script>
import SortVue from '../components/SortVue.vue';
export default {
    computed: {
        products() {
            return this.$store.state.products;
        }
    },
    mounted() {
        this.$store.dispatch("fetchProducts");
    },
    components: { SortVue }
}
</script>
<style>
  /* .card{
    width:350px;
  } */
  .product_card{
    display:flex;
    flex:wrap;
  }
  img{
    height:220px;
    object-fit:cover;
  }
  
  small{
    height:50px;
  }
</style>