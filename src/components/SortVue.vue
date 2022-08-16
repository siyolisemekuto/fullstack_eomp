<template>
    <div>
        <div name="category">
            <select v-model="category">
                <option value="Men's scents">Men's scents</option>
                <option value="Women's scents">Women's scents</option>
                <option value="Unisex scents">Unisex scents</option>
            </select>
        </div> 
    </div>
</template>
<script>
export default {
    data(){
        return {
            category: null
        }
    },
    methods:{
        categoryFilter(category){
            this.$store.commit('set', category)
        }
    },
}
</script>
<style lang="">
    
</style>