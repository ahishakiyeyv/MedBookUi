<template>
<Dashboard/>
    <div class="main">
        <div class="label-top">
            <h3>Liste Rendez-Vous</h3>
        </div>
        <div class="top_row">
            <div class="search">
                <input type="text" placeholder="Rechercher..." v-model="inputSearch">
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
                    <th>Numero</th>
                    <th>Nom</th>
                    <th>Date</th>
                    <th>Service</th>
                    <th>Status <span>
                        <i class="fa fa-caret-up" aria-hidden="true" @click="sort('status')"></i>
                        <i class="fa fa-caret-down" aria-hidden="true" @click="sort('status')"></i>
                        </span></th>
                    <th colspan="1">Action</th>
                </tr>
            </thead>
            <tbody v-if="filteredAppointment.length > 0">
                <tr v-for="app in filteredAppointment" :key="app.id">
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
            appointment:[],
            inputSearch:'',
            sortKey:'',
            sortOrder:1
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
        },
        Details(id){
            this.$store.state.appointment=id
        },
        sort(key){
            if(this.sortKey === key){
                this.sortOrder *= -1;
            }else{
                this.sortKey =key;
                this.sortOrder = 1;
            }
        }
   },
   mounted(){
    this.getAppointment()
   },
   computed:{
    filteredAppointment(){
        return this.appointment.filter(app=>{
            return(app.nom.toLowerCase().indexOf(this.inputSearch.toLowerCase()) > -1 ||
            app.prenom.toLowerCase().indexOf(this.inputSearch.toLowerCase()) > -1 ||
            app.service.toLowerCase().indexOf(this.inputSearch.toLowerCase()) > -1 ||
            app.date_arrive.toLowerCase().indexOf(this.inputSearch.toLowerCase()) > -1
            )
                
            
        })
    },
    appointment(){
        const appointment = [...this.appointment];
        if(this.sortKey){
            appointment.sort((a,b)=>{
                const fieldA = a[this.sortKey];
                const fieldB = b[this.sortKey];
                if(fieldA < fieldB){
                    return -1 * this.sortOrder;
                }
                if(fieldA > fieldB){
                    return 1 * this.sortOrder;
                }
                return 0;
            });
        }
        return appointment;
    }
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
    background:#416991;
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
    border:1px solid #416991;
    border-radius:3px;
    padding:0 1rem;
    font-size:1rem;
    outline:none;
    color:#416991;
}
.btn button{
    padding:0.2rem 1rem;
    font-size:1rem;
    background:#731acc;
    color:#fff;
    border:none;
    border-radius:5px;
    cursor:pointer;
    display:none;
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
    text-align: left;
}

table thead th span{
   cursor: pointer;
}
table tbody td{
    padding:0.5rem 1rem;
    height:35px;
    color:#7e7c7c;
    text-align:justify;
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
    text-align:center;
}
.refus h4{
    border:1px solid red;
    border-radius:5px;
    background:red;
    color:#fff;
    font-weight:normal;
    text-align:center;
}
.wait h4{
    border:1px solid gray;
    border-radius:5px;
    background:gray;
    color:#fff;
    font-weight:normal;
    text-align:center;
}
.inconnu h4{
    border:1px solid #333;
    border-radius:5px;
    background:#333;
    color:#fff;
    font-weight:normal;
}
</style>