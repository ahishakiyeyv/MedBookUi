<template>
    <!-- <Menu/> -->
    <div v-if="$store.state.user">
  <MenuLog></MenuLog>
</div>
<div v-else>
  <Menu></Menu>
</div>
    <head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" integrity="sha512-5A8nwdMOWrSz20fDsjczgUidUBR8liPYU+WymTZP1lmY9G6Oc7HlZv156XqnsgNUzTyMefFTcsFH/tnJE/+xBg==" crossorigin="anonymous" referrerpolicy="no-referrer" />

</head>

    <section>
        <div class="tabs">
                        <router-link to="/appointment" class="tab-item" >Tous</router-link>
            <router-link to="/tab2" class="tab-item">En Attente <span>{{this.$store.state.attente_count}}</span></router-link>
            <router-link to="/tab1" class="tab-item selected">Accepté <span>{{ this.$store.state.accepter_count }}</span></router-link>
            <router-link to="/tab" class="tab-item">Refuser <span>{{this.$store.state.refuser_count}}</span></router-link>
        </div>
        
    <div class="top_row">
         
         
        <div class="search">
            <input type="text" class="search-input" placeholder="Search..." v-model="inputSearch">
        </div>
      
        <div class="addBtn">
            
            <button v-on:click="toggleModale">PRENDRE RENDEZ-VOUS</button>
            
        </div>
        
    </div>
     <Modal v-bind:dialog="dialog" v-bind:toggleModale="toggleModale"></Modal>
      <ModalDetails v-bind:details="details" v-bind:toggleModaleDetails="toggleModaleDetails" @getAppointment="getAppointment" @close="close" ></ModalDetails>
    <div class="table">
        <table>
                <thead>
                    <tr>
                    <th>Numero</th>
                    <th>Nom</th>
                    <th>Date</th>
                    <th>Service</th>
                    <th>Status</th>
                    <th colspan="1">Action</th>
                   
                 </tr>
                </thead>
            <tbody v-if="appointment.length > 0">
                <tr v-for="app in filteredAppointment" :key="app.id">
                    <!-- {{ this.$store.state.user.user.id }} -->
                    <!-- <div v-if="this.$store.state.user.user.id==app.user_id"> -->
                        
                        <td>{{app.numero_ordre}}-0{{app.id}}</td>
                        <td>{{app.nom}}</td>
                        <td>{{app.date_arrive}}</td>
                        <td>{{ app.service }}</td>
                        <td v-if="app.status==='1'" class="accepte"><h4>Accepté</h4></td>
                        <!-- <td v-if="app.status==='0'" class="refus"><h4>Refusé</h4></td>
                        <td v-if="app.status==='2'" class="wait"><h4>En Attente</h4></td>
                        <td v-if="app.status===null" class="inconnu"><h4>Inconnu</h4></td> -->
                    
                        <!-- <ModalDetails v-bind:details="details" @getAppointment="getAppointment" @close="close" v-if="details"></ModalDetails> -->
                        <td><button   @click="detailsAppointment(app)"><i class="fa fa-eye" aria-hidden="true"></i></button></td>
                        <!-- <td><a href="#"><i class="fa fa-pencil" aria-hidden="true"></i></a></td>
                        <td><a href="#"><i class="fa fa-trash-o" aria-hidden="true"></i></a></td> -->
                    <!-- </div> -->
                </tr>   
            </tbody>
            <tbody v-else>
                <tr>
                    <td colspan="8">Chargement....</td>
                </tr>

            </tbody>
        </table>
    </div>
</section>
</template>
<script>
import axios from 'axios'
import ModalDetails from '@/components/appointment/app_details.vue'
import Modal from '@/components/appointment/modal_app.vue'
import Menu from '@/components/Menu/Menu.vue'
import MenuLog from '@/components/Menu/MenuLog.vue'
export default {
    name:'AppointmentView',
    data(){
        return{
            appointment:[],
            dialog:false,
            details:false,
            inputSearch:'',
            allData:[]
        }
    },
    components:{
        Menu,
        MenuLog,
        Modal,
        ModalDetails
    },
    methods:{
        toggleModale:function(){
            this.dialog=!this.dialog
        },
        toggleModaleDetails:function(){
            this.details=!this.details
        },
        detailsAppointment(item){
            this.details=true,
            this.$store.state.appointment=item
        },
        getAppointment(){
            axios
            .get('http://127.0.0.1:8000/api/status1')
            .then((res)=>{
                this.$store.state.appointment = res.data
                this.appointment = res.data
                
            })
            .catch((error)=>{
                console.log(error.response.data.message)
            })
        },
         AccepterCount(){
            axios
            .get('http://127.0.0.1:8000/api/count1')
            .then(res=>{
                this.$store.state.accepter_count=res.data
                this.allData=res.data
            })
        },
        RefuserCount(){
            axios
            .get('http://127.0.0.1:8000/api/count0')
            .then(res=>{
                this.$store.state.refuser_count=res.data
                this.allData=res.data
            })
        },
        AttenteCount(){
            axios
            .get('http://127.0.0.1:8000/api/count2')
            .then(res=>{
                this.$store.state.attente_count=res.data
                this.allData=res.data
            })
        },
        allCount(){
            axios
            .get('http://127.0.0.1:8000/api/count')
            .then(res=>{
                this.$store.state.all_count=res.data
                this.allData=res.data
            })
        }
    },
    mounted(){
        this.getAppointment();
        this.AccepterCount();
        this.RefuserCount();
        this.AttenteCount();
        this.allCount();
    },
        close(){
            this.details=false
        },
        computed: {
    //         appointment() {
    //            return this.$store.state.appointment.filter(app => {
    //          return(app.nom.toLowerCase().indexOf(this.inputSearch.toLowerCase()) > -1 ||
    //         app.prenom.toLowerCase().indexOf(this.inputSearch.toLowerCase()) > -1 ||
    //         app.service.toLowerCase().indexOf(this.inputSearch.toLowerCase()) > -1
    //         )
    //     })
    // },
    filteredAppointment(){
        return this.appointment.filter((app)=>{
            return this.$store.state.user.user.id===app.user_id
        })
    }
}

    // computed:{
    //     appointment(){
    //         const appointment =this.$store.state?.appointment

    //         return appointment
    //     }
   // }
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
section{
    margin-top:50px;
}
.top_row{
    display:flex;
    align-items:center;
    justify-content:space-between;
    margin-left:auto;
    margin-right:auto;
    width:1020px;
}
.tabs{
    display: flex;
    align-items:center;
    margin-left:auto;
    margin-right:auto;
    width:1020px;
}
.tabs .tab-item{
    border:none;
    border-bottom:1px solid #7e7c7c;
    padding:0 30px 5px 30px;
    margin-bottom:40px;
    margin-left:5px;
    color:#7e7c7c;
    font-size:1.1rem;
}
.tab-item{
    text-decoration: none;
}
.tabs .tab-item.selected{
    border-bottom:2px solid #416991;
}
.tabs .tab-item span{
    border:1px solid gray;
    height:20px;
    width:30px;
    padding:2px;
    background:#f2f2f2;
    color:#333;
    font-weight:bold;
    font-size:0.8rem;
    border-radius:5px;
}
.search .search-input{
    height:2.5rem;
    width:15rem;
    border:2px solid #416991;
    border-radius:5px;
    outline:none;
    color:#416991;
    font-size:1rem;
    padding:10px;
}
.addBtn button{
    height:2.5rem;
    font-size:1rem;
    font-weight:bold;
    color:#fff;
    letter-spacing: 1px;
    border-radius:5px;
    border:none;
    background:#416991;
    padding:.5rem 1rem;
    cursor:pointer;
}
::placeholder{
    color:#416991;
    letter-spacing: 1px;
}
.table{
    position:relative;
    top:30px;
    left:170px;
    width:1020px;
}

table{
    width:1020px;
}
table,td{
    border:none;
    border-bottom:1px solid #b8b7b7;
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
table tbody td a{
    cursor:pointer;
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