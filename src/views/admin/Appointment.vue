<template>
<Dashboard/>
    <div class="main">
        <div class="label-top">
            <h3>Liste des Rendez-Vous</h3>
        </div>
        <div class="top_row">
            <div class="search">
                <input type="search" placeholder="Rechercher...">
            </div>
            <div class="btn">
                <button>Prendre Rendez-Vous</button>
            </div>
        </div>
       <div class="table">
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nom</th>
                    <th>Prenom</th>
                    <th>Date</th>
                    <th>Service</th>
                    <th colspan="3">Action</th>
                </tr>
            </thead>
            <tbody v-if="appointment.length > 0">
                <tr v-for="app in appointment" :key="app.id">
                    <td>{{app.id}}</td>
                    <td>{{app.nom}}</td>
                    <td>{{app.prenom}}</td>
                    <td>{{app.date_arrive}}</td>
                    <td>{{app.service}}</td>
                    <td><a href="#" class="voir"><i class="fa fa-eye" aria-hidden="true"></i></a></td>
                    <td><a href="#" class="modify"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></a></td>
                    <td><a href="#" class="delete"><i class="fa fa-times-circle-o" aria-hidden="true"></i></a></td>
                </tr>
            </tbody>
            <tbody v-else>
                <tr>
                    <td colspan="8">Chargement....</td>
                </tr>
            </tbody>
        </table>
       </div>
    </div>
</template>
<script>
import Dashboard from '@/components/Dashboard.vue'
import axios from 'axios'
export default {
   name:'Appointment',
    data(){
        return{
            appointment:[]
        }
    },
   components:{
    Dashboard
   },
   methods:{
        getAppointment(){
            axios
            .get('http://127.0.0.1:8000/api/appointment')
            .then((res)=>{
                this.$store.state.appointment=res.data
                this.appointment=res.data
            })
            .catch((error)=>{
                console.log(error.response.data.message)
            })
        }
   },
   mounted(){
    this.getAppointment()
   }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400&family=Roboto:wght@100;300&display=swap');
*{
    padding:0;
    margin:0;
    box-sizing:border-box;
    font-family: 'Poppins',sans-serif;
}
.main {
    position: absolute;
    top: 60px;
    width: calc(100% - 260px);
    min-height: calc(100vh - 60px);
    left: 260px;
    background: #f5f5f5;
}
.label-top{
    margin-top:1.5rem;
    margin-left:2rem;
    border-radius:5px;
    background:#731acc;
    width:1020px;
    padding:1rem 1rem;
}
.label-top h3{
    color:#fff;
    font-weight:normal;
}
.top_row{
    display:flex;
    align-items:center;
    justify-content:space-between;
    width:1020px;
    margin:1.2rem 0 1.2rem 2rem;
}
.search input{
    height:35px;
    width:230px;
    border:1px solid #731acc;
    border-radius:3px;
    padding:0 1rem;
    font-size:1rem;
    outline:none;
    color:#731acc;
}
.btn button{
    padding:0.2rem 1rem;
    font-size:1rem;
    background:#731acc;
    color:#fff;
    border:none;
    border-radius:5px;
    cursor:pointer;
}
.table{
    width:1020px;
    margin-left:2rem;
}
table{
    width:1020px;
}
table,td{
    border:none;
    border-bottom:2px solid #7e7c7c;
    border-collapse: collapse;
}
table thead{
    background:#896cb8;
    height:50px;
}
table thead th{
    padding:1rem 1rem;
    color:#fff;
    font-weight:normal;
    font-size:1rem;
}
table tbody td{
    padding:0.5rem 1rem;
    height:35px;
    color:#7e7c7c;
    text-align:center;
}
table td .modify i{
    color:#63d471;
}
table td .delete i{
    color:red;
}
</style>