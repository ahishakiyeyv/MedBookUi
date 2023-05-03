<template>
<head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" integrity="sha512-5A8nwdMOWrSz20fDsjczgUidUBR8liPYU+WymTZP1lmY9G6Oc7HlZv156XqnsgNUzTyMefFTcsFH/tnJE/+xBg==" crossorigin="anonymous" referrerpolicy="no-referrer" />

</head>
     <header class="navbar"> 
          <div class="logo">
               <a href="#" class="icon">LOGO</a>
          </div>
          <div class="menu">
               <ul>
                    <li><router-link to="/" class="menu-link">Accueil</router-link></li>
                    <li><a href="#" class="menu-link">A Propos</a></li>
                    <li><a href="#" class="menu-link">Service</a></li>
                    <li><a href="#" class="menu-link">Medecin</a></li>
                    <li><router-link to="/test" class="menu-link">Test</router-link></li>
                    <li><router-link to="/appointment" class="menu-link">Rendez-vous</router-link></li>
                    <li @click="logout()"><a href="#" class="menu-link"><i class="fa fa-power-off" aria-hidden="true"></i></a></li>
                    
                    <!-- <Modal v-bind:dialog="dialog" v-bind:toggleModale="toggleModale"></Modal> -->
               </ul>
          </div>
     </header>
</template>
<script>
export default {
    name:'MenuLog',
    methods:{
        logout(){
            localStorage.removeItem('user')
            this.$router.push('/')
          //   window.location.reload()
        }
    }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400&family=Roboto:wght@100;300&display=swap');
*{
     padding:0;
     margin:0;
     box-sizing: border-box;
     font-family: 'Poppins', sans-serif;
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

/* =============================section 2============================== */

</style>