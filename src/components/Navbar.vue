<template>
  <div id="navbar">
      <nav class="navbar navbar-expand-md navbar-dark shadow p-3">
          <router-link to=/ class="navbar-brand active">Personal Fumes</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav-links" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
              <ul class="navbar-nav collapse navbar-collapse justify-content-end" id="nav-links">
            <div v-if="!user">
                  <Searchbar/>
                  <li><router-link to=/catalogue class=nav-link >Catalogue</router-link></li>
                  <li><router-link to=/cart class=nav-link>Cart</router-link></li>                        
                  <li><router-link to=/profile class=nav-link>Profile</router-link></li>
                  <li><router-link to=/contact class=nav-link>Contact Us</router-link></li>      
                <!-- <li><router-link to=/contact class=nav-link  id="nav-contact">Contact</router-link></li> -->
            </div>
            <div v-else>
                <li><router-link to=/contact class=nav-link>Contact Us</router-link></li>      
                <li><router-link to=/register class=nav-link>Register</router-link></li>
            </div>
            </ul>
        </nav>
      </div>
</template>

<script>
import Searchbar from './Searchbar.vue';
export default {
    computed: {
        user() {
            return this.$store.state.user;
        }
    },
    methods: {
        toggleMobileNav() {
            this.mobileNav = !this.mobileNav;
        },
        ScreenChecker() {
            this.windowWidth = window.innerWidth;
            if (this.windowWidth <= 750) {
                return this.mobile = true;
            }
            else {
                return this.mobile = false,
                    this.mobileNav = false;
            }
        },
        mounted() {
            // this.$store.dispatch('fe')
        }
    },
    components: { 
      Searchbar 
      }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Italianno&display=swap');

#navbar .navbar{
    background:#141414;
    opacity:0.9;
    box-shadow: 20px;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 3;
}
.navbar-brand{
    font-family: 'Italianno', cursive;
    font-size:45px;
    font-weight:lighter;
    margin-left: 50px;
}

nav ul li a {
    position: relative;

}

nav ul li a::after {
    content: '';
    width: 0;
    height: 3px;
    background: #C7A17F;
    position: absolute;
    left: 0;
    bottom: -6px;
    transition: 0.5s;
}

nav ul li a:hover::after{
    width: 100%;
}

.router-link-exact-active {
  color: #C7A17F !important;
}
#nav-links{
  display: flex !important;
}
</style>