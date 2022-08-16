import { createStore } from 'vuex';
import axios from 'axios';
const grpjpURL = 'https://ps-fumes.herokuapp.com/';
export default createStore({
  state: {
    user: null,
    products: null,
    product: null
  },
  getters: {
  },
  mutations: {
    setUser (state, value) {
      state.user = value;
    },
    setProducts (state, values) {
      state.products = values;
    },
    setProduct (state, value) {
      state.product = value;
    }
  },
  actions: {
    fetchProducts: async (context) => {
      const res = await axios.get(grpjpURL +'products');
      const results = await res.data;
      if (results) {
        context.commit('setProducts', results);
      }
    },
    fetchProduct: async (context) => {
      const res = await axios.get(grpjpURL + 'product');
      const { results } = await res.data;
      if (results) {
        context.commit('setProduct', results);
      }
    },
    fetchUser: async (context) => {
      const res = await axios.get(grpjpURL + 'user');
      const { results } = await res.data;
      if (results) {
        context.commit('setUsers', results);
      }
    }
  },
  modules: {
  }
});