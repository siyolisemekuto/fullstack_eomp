<!-- <template>
    <div >
      <h1>this is a cart</h1> 
        <div class="column-labels">
    <label class="product-image">Image</label>
    <label class="product-details">Product</label>
    <label class="product-price">Price</label>
    <label class="product-quantity">Quantity</label>
    <label class="product-removal">Remove item</label>
    <label class="product-line-price">Total</label>
  </div>

  <div class="product">
    <div class="product-image">
      <img :src={{product.image}}>
    </div>
    <div class="product-details">
      <div class="product-title">{{product.name}}</div>
      <p class="product-description">{{product.description}}</p>
    </div>
    <div class="product-price">{{product.price}}</div>
    <div class="product-quantity">
      <input type="number" value="" min="1">
    </div>
    <div class="product-removal">
      <button class="remove-product">
        Remove
      </button>
    </div>
    <div class="product-line-price">{{product.total}}</div>
  </div> 
  </div>

</template>
<script>
export default {
    name:'Cart'
    computed:{
      this.$store.dispatch.fetchCart()
    }
}
</script>
<style lang="">
    
</style> -->