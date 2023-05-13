<template>
<Dashboard/>
    <div class="main">
       <div class="cards">
                <router-link to="/patient" class="card">
                    <div class="card-content">
                        <div class="number">{{this.$store.state.patient_count}}</div>
                        <div class="card-name">Patient</div>
                    </div>
                    <div class="icon-box">
                        <i class="fa fa-user-o" aria-hidden="true"></i>
                    </div>
                </router-link>
                <router-link to="/AppointItem" class="card">
                    <div class="card-content">
                        <div class="number">{{this.$store.state.rendezvous_count}}</div>
                        <div class="card-name">Rendez Vous <span>(Aujourd'hui)</span></div>
                    </div>
                    <div class="icon-box">
                        <i class="fa fa-calendar-plus-o" aria-hidden="true"></i>
                    </div>
                </router-link>
                <router-link to="/Adminappointment" class="card">
                    <div class="card-content">
                        <div class="number">{{this.$store.state.all}}</div>
                        <div class="card-name">Tous Rendez vous</div>
                    </div>
                    <div class="icon-box">
                        <i class="fa fa-calendar-o" aria-hidden="true"></i>
                    </div>
                </router-link>
                <router-link to="/TestAdmin" class="card">
                    <div class="card-content">
                        <div class="number">{{this.$store.state.test_count}}</div>
                        <div class="card-name">Examen Medical</div>
                    </div>
                    <div class="icon-box">
                        <i class="fa fa-medkit" aria-hidden="true"></i>
                    </div>
                </router-link>
            </div>
            <div class="label-top">
            <h3>Rendez Vous Pour Aujourd'hui</h3>
             </div>
            <div class="table">
                <table>
               <thead>
                <tr>
                    <th>#</th>
                    <th>Numero</th>
                    <th>Nom</th>
                    <th>Date</th>
                    <th>Service</th>
                    <th>Status</th>
                    <th colspan="1">Action</th>
                </tr>
              </thead>
                 <!-- <tbody v-if="appointment.length > 0"> -->
                    <tbody>
                <tr v-for="app in appointment" :key="app.id">
                    <td>{{app.id}}</td>
                    <td>{{app.numero_ordre}}-0{{app.id}}</td>
                    <td>{{app.nom}}</td>
                    <td>{{app.date_arrive}}</td>
                    <td>{{app.service}}</td>
                    <td v-if="app.status==='1'" class="accepte"><h4>Accepté</h4></td>
                    <td v-if="app.status==='0'" class="refus"><h4>Refusé</h4></td>
                    <td v-if="app.status==='2'" class="wait"><h4>En Attente</h4></td>
                    <td v-if="app.status===null" class="inconnu"><h4>Inconnu</h4></td>
                    <td><router-link :to="`/AppointmentDetails/${app.id}`" class="voir"><i class="fa fa-eye" aria-hidden="true"></i></router-link></td>
                    <!-- <td><router-link to="/AppointmentDetails/" @click="Details(app)" class="voir"><i class="fa fa-eye" aria-hidden="true"></i></router-link></td> -->
                    <!-- <td><a href="#" class="modify"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></a></td>
                    <td><a href="#" class="delete"><i class="fa fa-times-circle-o" aria-hidden="true"></i></a></td> -->
                </tr>
                    <!-- </tbody>
                    <tbody v-else>
                        <tr>
                            <td colspan="8">Chargement....</td>
                        </tr> -->
                    </tbody>
                </table>
            </div>
 
    </div>
</template>
<script>
import Dashboard from '@/components/Dashboard.vue'
import axios from 'axios'
export default {
    name:'dashboardView',
    data(){
        return{
            allData:[]
        }
    },
    components:{
        Dashboard
    },
    methods:{
        getAppointment(){
            axios
            .get('http://127.0.0.1:8000/api/today')
            .then((res)=>{
                this.$store.state.appointment=res.data
                this.appointment=res.data
            })
            .catch((error)=>{
                console.log(error.response.data.message)
            })
        },
        Details(id){
            this.$store.state.appointment=id
        },
        PatientCount(){
            axios
            .get('http://127.0.0.1:8000/api/countUser')
            .then(res=>{
                this.$store.state.patient_count=res.data
                this.allData=res.data
            })
        },
        RendezvousCount(){
            axios
            .get('http://127.0.0.1:8000/api/allcount')
            .then(res=>{
                this.$store.state.rendezvous_count=res.data
                this.allData=res.data
            })
        },
        ServiceCount(){
            axios
            .get('http://127.0.0.1:8000/api/countservice')
            .then(res=>{
                this.$store.state.service_count=res.data
                this.allData=res.data
            })
        },
        TestCount(){
            axios
            .get('http://127.0.0.1:8000/api/countTest')
            .then(res=>{
                this.$store.state.test_count=res.data
                this.allData=res.data
            })
        },
        AllAppointment(){
            axios
            .get('http://127.0.0.1:8000/api/all')
            .then(res=>{
                this.$store.state.all=res.data
                this.allData=res.data
            })
        }
    },
    mounted(){
        this.getAppointment();
        this.PatientCount();
        this.RendezvousCount();
        this.ServiceCount();
        this.TestCount();
        this.AllAppointment();
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
    text-decoration:none;
}

.number {
    font-size: 35px;
    font-weight: 500;
    color: #416991;
}

.card-name {
    color: #7e7c7c;
    font-weight: 600;
}
.card-name span{
    font-weight:normal;
    color:#416991;
}

.icon-box i {
    font-size: 45px;
    color: #416991;
}
/* ================================================================ */
.label-top{
    /* margin-top:1.5rem; */
    margin-left:2rem;
    margin-bottom:2rem;
    border-radius:5px;
    background:#416991;
    width:1020px;
    padding:1rem 1rem;
}
.label-top h3{
    color:#fff;
    font-weight:normal;
    text-align: center;
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
    background:#343a40;
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
.accepte h4{
    border:1px solid green;
    border-radius:5px;
    background:green;
    color:#fff;
    font-weight:normal;
}
.refus h4{
    border:1px solid red;
    border-radius:5px;
    background:red;
    color:#fff;
    font-weight:normal;
}
.wait h4{
    border:1px solid gray;
    border-radius:5px;
    background:gray;
    color:#fff;
    font-weight:normal;
}
.inconnu h4{
    border:1px solid #333;
    border-radius:5px;
    background:#333;
    color:#fff;
    font-weight:normal;
}
</style>