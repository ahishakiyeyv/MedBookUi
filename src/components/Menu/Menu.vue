<template>
     <header class="navbar"> 
          <div class="logo">
               <a href="#" class="icon"><span>Med</span>Book</a>
          </div>
          <div class="menu" >
               <button class="hamburger" @click="toggleMenu">
               <span class="bar"></span>
               <span class="bar"></span>
               <span class="bar"></span>
                </button>
               <ul :class="{ show: menuVisible }">
                    <li><router-link to="/" class="menu-link">Accueil</router-link></li>
                    <li><a href="#container2" @click="scrollTo('container2')"  class="menu-link">A Propos</a></li>
                    <li><a href="#container3" @click="scrollTo('container3')" class="menu-link">Service</a></li>
                    <li><a href="#controller4" @click="scrollTo('container4')" class="menu-link">Medecin</a></li>
                    <li><router-link to="/test" class="menu-link">Test</router-link></li>
                    <li><router-link to="/login"  class="btn">Se connecter</router-link></li>
                    <!-- <Modal v-bind:dialog="dialog" v-bind:toggleModale="toggleModale"></Modal> -->
               </ul>
          </div>
          

     </header>
</template>
<script>
export default {
 name: 'menu',
 data() {
    return {
      menuVisible: false,
    };
 },
 methods: {
    toggleMenu() {
      this.menuVisible = !this.menuVisible;
    },
    scrollTo(id) {
      const el = document.getElementById(id);
      el.scrollIntoView({ behavior: 'smooth' });
    },
 },
};

</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400&family=Roboto:wght@100;300&display=swap');
*{
     padding:0;
     margin:0;
     box-sizing: border-box;
     font-family: 'Poppins', sans-serif;
     scroll-behavior: smooth;
}
.navbar{
     display:flex;
     align-items:center;
     justify-content:space-around;
     position:sticky;
     height:80px;
     width:100%;
     z-index:100;
    box-shadow: 0 1px 0px 0px rgba(0,0,0,0.1);
}
.logo a{
     color:#416991
}
.logo a span{
     background:#416991;
     color:#fff;
     padding:0.1rem 0.3rem;
     border-radius:5px;
}
.menu ul{
     display:flex;
     flex-direction: row;
}
.menu ul li{
     list-style:none;
     padding:0.5rem 1.5rem;
}
.menu .menu-link{
     text-decoration:none;
     color:#416991;
     font-size:1rem;
     font-weight:500;
}
.btn{
     text-decoration:none;
     font-size:1.2rem;
     background:#416991;
     color:#fff;
     padding:0.5rem 1.3rem;
     border:1px solid #416991;
     border-radius:10px;
}
.icon{
     text-decoration:none;
     font-size:1.5rem;
     font-weight:700;
}

.hamburger {
 display: none;
 flex-direction: column;
 justify-content: space-between;
 width: 30px;
 height: 21px;
 cursor: pointer;
 border:none;
}

.hamburger .bar {
 height: 4px;
 width: 100%;
 background-color: #416991;
 border-radius: 5px;
}

@media (max-width: 768px) {
 .hamburger {
    display: flex;
 }

 .menu ul {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 80px;
    left: 0;
    width: 100%;
    background-color: #fff;
    z-index: 1000;
 }

 .menu ul.show {
    display: flex;
 }

}

/* =============================section 2============================== */

</style>