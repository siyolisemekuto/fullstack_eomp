import { createStore } from 'vuex';
import axios from 'axios';
import router from '@/router';

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
    },
    filterMen(state,category) {
      state.products.filter(data => 
        data.category === "Select Men") 
  },
    filterWomen(state,category) {
      state.products.filter(data => 
        data.category === "Select Women") 
  },
    filterUnisex(state,category) {
      state,products.filter(data => 
        data.category === "Select Unisex") 
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
      const res = await axios.get(grpjpURL + 'users');
      const { results } = await res.data;
      if (results) {
        context.commit('setUsers', results);
      }
    },
    login: async (context,payload) => {
      const {email,password}=payload
      // console.log(email, password);
      fetch('https://ps-fumes.herokuapp.com/users/login',{
        method:"POST",
        body:JSON.stringify({
          email: email,
          password: password
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      })
      .then(res=>res.json())
      .then(data => {
        console.log(data)
        context.commit('setUsers', data);
        router.push({name: 'catalogue'});
      });
      // let results = res.data;
      // console.log(results);
    }
  },
  modules: {
  }
});