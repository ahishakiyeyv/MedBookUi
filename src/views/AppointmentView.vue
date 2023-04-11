<template>
    <Menu/>
    <head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" integrity="sha512-5A8nwdMOWrSz20fDsjczgUidUBR8liPYU+WymTZP1lmY9G6Oc7HlZv156XqnsgNUzTyMefFTcsFH/tnJE/+xBg==" crossorigin="anonymous" referrerpolicy="no-referrer" />

</head>

    <section>
        
    <div class="top_row">
         <Modal v-bind:dialog="dialog" v-bind:toggleModale="toggleModale"></Modal>
        <div class="search">
            <input type="search" class="search-input" placeholder="Search...">
        </div>
      
        <div class="addBtn">
            
            <button v-on:click="toggleModale">PRENDRE RENDEZ-VOUS</button>
            
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
                    <td>{{ app.service }}</td>
                    <ModalDetails v-bind:details="details" v-bind:toggleModaleDetails="toggleModaleDetails"></ModalDetails>
                    <td><button  v-on:click="toggleModaleDetails"><i class="fa fa-eye" aria-hidden="true"></i></button></td>
                    <td><a href="#"><i class="fa fa-pencil" aria-hidden="true"></i></a></td>
                    <td><a href="#"><i class="fa fa-trash-o" aria-hidden="true"></i></a></td>
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
export default {
    name:'AppointmentView',
    data(){
        return{
            appointment:[],
            dialog:true,
            details:false
        }
    },
    components:{
        Menu,
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
        getAppointment(){
            axios
            .get('http://127.0.0.1:8000/api/appointment')
            .then((res)=>{
                this.$store.state.appointment = res.data
                this.appointment = res.data
            })
            .catch((error)=>{
                console.log(error.response.data.message)
            })
        }
    },
    mounted(){
        this.getAppointment()
    },
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
    width:900px;
}
.search .search-input{
    height:2.5rem;
    width:15rem;
    border:2px solid #713acc;
    border-radius:5px;
    outline:none;
    color:#713acc;
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
    background:#713acc;
    padding:.5rem 1rem;
    cursor:pointer;
}
::placeholder{
    color:#713acc;
    letter-spacing: 1px;
}
.table{
    position:relative;
    top:30px;
    left:220px;
    width:900px;
}

table{
    width:900px;
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
</style>