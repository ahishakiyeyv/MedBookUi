<template>
<head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" integrity="sha512-5A8nwdMOWrSz20fDsjczgUidUBR8liPYU+WymTZP1lmY9G6Oc7HlZv156XqnsgNUzTyMefFTcsFH/tnJE/+xBg==" crossorigin="anonymous" referrerpolicy="no-referrer" />

</head>
     <div class="container">
        <div class="topbar">
            <div class="logo">
                <h2><span>Med</span>Book</h2>
            </div>
            <!-- <div class="search">
                <input type="text" name="search" placeholder="search here">
                <label for="search"><i class="fa fa-search" aria-hidden="true"></i></label>
            </div> -->
            <i class="fa fa-bell" aria-hidden="true"></i>
            <div class="user">
                <img src='@/assets/images/200.jpg' alt="">
            </div>
            <!-- {{ this.$store.state.infirmier.nom_inf }} -->
            <div class="logout">
                <a @click="logout_inf()"><i class="fa fa-power-off" aria-hidden="true"></i></a>
            </div>
        </div>
        <div class="sidebar">
            <ul>
                <li>
                    <router-link to="/dashboard" class="a">
                        <i class="fa fa-th-large" aria-hidden="true"></i>
                        <div>Dashboard</div>
                    </router-link>
                </li>
                <li>
                    <router-link to="/Adminappointment" class="a">
                        <i class="fa fa-calendar-plus-o" aria-hidden="true"></i>
                        <div>Rendez-Vous</div>
                    </router-link>
                </li>
                <li>
                    <router-link to="/TestAdmin" class="a">
                        <i class="fa fa-medkit" aria-hidden="true"></i>
                        <div>Details Test</div>
                    </router-link>
                </li>
                <li>
                    <router-link to="/service" class="a">
                         <i class="fa fa-list-ul" aria-hidden="true"></i>
                        <div>Service</div>
                    </router-link>
                </li>
                <li>
                    <router-link to="/medecin" class="a">
                        <i class="fa fa-user-md" aria-hidden="true"></i>
                        <div>Medecin</div>
                    </router-link>
                </li>
                <li>
                    <router-link to="/patient" class="a">
                        <i class="fa fa-user-o" aria-hidden="true"></i>
                        <div>Patient</div>
                    </router-link>
                </li>
                <li>
                    <router-link to="/utilisateur" class="a">
                       
                        <i class="fa fa-users" aria-hidden="true"></i>
                        <div>Utilisateur</div>
                    </router-link>
                </li>
               
            </ul>
        </div>
        <div class="main">
            
            
        </div>
    </div>
</template>
<script>
export default {
   name:'Dashboard',
   methods:{
    logout_inf(){
            localStorage.removeItem('user')
            this.$router.push('/admin')
            
        }
   }
}
</script>
<style scoped>
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'poppins', sans-serif;
}

.topbar {
    position: fixed;
    background-color: #fff;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.08);
    width: 100%;
    padding: 0 20px;
    height: 60px;
    display: grid;
    grid-template-columns: 2fr 10fr 0.4fr 1fr;
    align-items: center;
    z-index: 1;
}

img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.logo h2 {
    color: #416991;
}
.logo h2 span{
    background:#416991;
    color:#fff;
    padding:0.1rem 0.3rem;
    border-radius:5px;
}

.search {
    position: relative;
    width: 60%;
    justify-self: center;
}

.search input {
    width: 100%;
    min-width: 128px;
    height: 40px;
    padding: 0 40px;
    font-size: 16px;
    outline: none;
    border: none;
    border-radius: 10px;
    background: #f5f5f5;
}

.search i {
    position: absolute;
    right: 15px;
    top: 15px;
    cursor: pointer;
    color:#343a40;
}

.fa-bell {
    justify-self: right;
    color:#416991;
}

.user {
    position: relative;
    width: 20px;
    height: 20px;
    /* justify-self: right; */
    margin-left:30px;
}
.logout{
    margin-left:30px;
}
.logout a i{
    color:#416991;
}

/* sidebar */

.sidebar {
    position: fixed;
    top: 60px;
    width: 260px;
    height: calc(100% - 60px);
    background:#416991;
    overflow-x: hidden;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    z-index: 2;
}

.sidebar ul {
    margin-top: 20px;
}

.sidebar ul li {
    width: 100%;
    list-style: none;
}

.sidebar ul li:hover {
    background: #fff;
}

.sidebar ul li:hover .a {
    color: #416991;
}

.sidebar ul li .a {
    width: 100%;
    text-decoration: none;
    color: #fff;
    height: 60px;
    display: flex;
    align-items: center;
}

.sidebar ul li .a i {
    min-width: 60px;
    font-size: 24px;
    text-align: center;
}

/* main */

.main {
    position: absolute;
    top: 60px;
    width: calc(100% - 260px);
    min-height: calc(100vh - 60px);
    left: 260px;
    background: #f5f5f5;
}

.cards {
    width: 100%;
    padding: 35px 20px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
}

.cards .card {
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 7px 25px rgba(0, 0, 0, 0.08);
}

.number {
    font-size: 35px;
    font-weight: 500;
    color: #416991;
}

.card-name {
    color: #888;
    font-weight: 600;
}

.icon-box i {
    font-size: 45px;
    color: #416991;
}


/* charts */

.charts {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 20px;
    width: 100%;
    padding: 20px;
    padding-top: 0;
}

.chart {
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 7px 25px rgba(0, 0, 0, 0.08);
    width: 100%;
}

.chart h2 {
    margin-bottom: 5px;
    font-size: 20px;
    color: #666;
    text-align: center
}

@media (max-width:1115px) {
    .sidebar {
        width: 60px;
    }
    .main {
        width: calc(100% - 60px);
        left: 60px;
    }
}

@media (max-width:880px) {
    /* .topbar {
        grid-template-columns: 1.6fr 6fr 0.4fr 1fr;
    } */
    .fa-bell {
        justify-self: left;
    }
    .cards {
        width: 100%;
        padding: 35px 20px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 20px;
    }
    .charts {
        grid-template-columns: 1fr;
    }
    .doughnut-chart {
        padding: 50px;
    }
    #doughnut {
        padding: 50px;
    }
}

@media (max-width:500px) {
    .topbar {
        grid-template-columns: 1fr 5fr 0.4fr 1fr;
    }
    .logo h2 {
        font-size: 20px;
    }
    .search {
        width: 80%;
    }
    .search input {
        padding: 0 20px;
    }
    .fa-bell {
        margin-right: 5px;
    }
    .cards {
        grid-template-columns: 1fr;
    }
    .doughnut-chart {
        padding: 10px;
    }
    #doughnut {
        padding: 0px;
    }
    .user {
        width: 40px;
        height: 40px;
    }
}
</style>