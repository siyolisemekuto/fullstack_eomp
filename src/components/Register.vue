<template>
<div>
  <h1>Register</h1>
 <div class="container">
    <h1>Register</h1>
   <form @submit.prevent="SubmitForm">
          <div >
            <input type="text" name="full_name" id="full_name" class="form-control" placeholder="Full name" required v-model="Password">
            <input type="email" name="email" id="email" class="form-control" placeholder="Email" required  v-model="email">
            <input type="password" name="password" id="password" class="form-control" placeholder="Password" required v-model="Password">
            <input type="text" name="contact_number" id="contact_number" class="form-control" placeholder="Contact Number" required v-model="Password">
          </div>
          <button type="submit" class="btn" v-on:click="POST">Register</button>
  </form>
  </div>
  </div>
</template>

<script scoped>
export default {
    name:'Register',
    methods: 'POST'
}
</script>

<style scoped>
.page{
  display:block;
  padding:0 40px;
  background-color:rgb(250, 249, 246);
}
.container{
  background-color:white;
  width: 50vw;
  height: 68vh;
  margin-top: 80px;
  margin-bottom: 20px;
  border:1px solid grayscale;
  box-shadow:2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  display:flex;
  flex-direction:column;
  align-items: center;
  justify-content: space-evenly;
  
}
h1{
  font-size:25px;
}
input{
    height: 48px;
    padding: 19px 16px 7px;
    width:20rem;
    color:black;  
    margin-bottom:10px;

    /* margin: 20px;
    border: none; */
    border: 1px solid gray;
    /* background:inherit; */
}
button{
  background-color:#141414;
  color:white;
  border-radius: 0;
  height: 48px;
  padding: 19px 16px 7px;
  width:20rem;
  margin-top: 20px;
  padding: 5px;
  font-size: large;
}
button:hover{
  background-color:rgba(20,20,20,0.8);
  
}
.register{
  text-decoration:underline;
  color:#C7A17F;
}
:-ms-input-placeholder::after{
    display: none;
}

form{
  width: fit-content;
  display:flex;
  flex-direction:column;
  align-items: center;
  justify-content: space-evenly;
}
</style>