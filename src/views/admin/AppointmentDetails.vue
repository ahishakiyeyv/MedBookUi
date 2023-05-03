<template>
<Dashboard/>
    <div class="main">
        <div class="label-top">
            <h3>Details Rendez-Vous</h3>
        </div>
        <Modal v-bind:actualiser="actualiser" v-bind:toggleModale="toggleModale" v-if="actualiser"></Modal>
        <div class="modale">
            <router-link to="/AdminAppointment" class="btn-ba"><i class="fa fa-long-arrow-left" aria-hidden="true"></i></router-link>
            <button class="btn-back" v-on:click="toggleModale">Actualiser Status</button>
            
            <div class="body-container" v-for="appointment in appointments" :key="appointment.id">
                <div class="body1">
                    <h2>Numero: <span>{{ appointment.numero_ordre}}-0{{appointment.id}}</span></h2>
                    <h2>Nom: <span>{{ appointment.nom}}</span></h2>
                    <h2>Prenom: <span>{{appointment.prenom}}</span></h2>
                    <h2>Age: <span>{{appointment.age}}</span></h2>
                    <h2>Sexe: <span>{{appointment.sexe}}</span></h2>
                </div>
                <div class="body2">
                    
                    <h2>Date: <span>{{appointment.date_arrive}}</span></h2>
                    <h2>Service: <span>{{appointment.service}}</span></h2>
                    <h2>Status:
                         <span v-if="appointment.status ==='1'" class="accepte">Accepté</span>
                         <span v-if="appointment.status ==='0'" class="refus">Refusé</span>
                         <span v-if="appointment.status ==='2'" class="wait">En Attente</span>
                         <span v-if="appointment.status ===null" class="inconnu">Pas Encore actualiser!</span>
                         
                         </h2>
                    <h2>Message: <span>{{appointment.remarque}}</span></h2>
                    <h2></h2>
          
                    <!-- <pre>
                        {{ JSON.stringify(appointment,null,2) }}
                    </pre> -->
                        
                    </div>
                </div>
                <!-- <h2>Status: 
                            <select name="" v-model="form.status">
                                <option value="" selected>--Status--</option>
                                <option value="1">Accepte</option>
                                <option value="0">Refuser</option>
                                <option value="2">En Attente</option>
                            </select>
                        </h2>
                <h2 class="h2">Message</h2>
                <textarea class="text" id="" cols="0" rows="0" placeholder="Message..." v-model="form.remarque"/>
                <button class="btn-send" @click="saveAppointment()">Envoyer</button> -->
            <!-- <p class="para" v-if="remarque > 0">{{$store.state.appointment.remarque}}</p>
            <p class="para" v-else>Pas de message pour le moment....</p> -->
        </div>

    </div>
</template>
<script>
import Dashboard from '@/components/Dashboard.vue'
import axios from 'axios'
import Modal from '@/components/appointment/status.vue'
export default {
  name:'AppointmentDetails',
  data(){
    return{
        form:{
            status:'',
            remarque:'',
        },
        appointments:{},
        actualiser:false
    }
  },
  components:{
    Dashboard,
    Modal
  },
  mounted(){
    this.getAppointment()
  },
  methods:{
    toggleModale:function(){
            this.actualiser=!this.actualiser
        },
    
     getAppointment(){
        const appID = this.$route.params.id
        axios
        .get(`http://127.0.0.1:8000/api/appointment/${appID}`)
        .then(response=>{
            this.appointments=response.data
        })
        .catch(error=>{
            console.log(JSON.stringify(error))
        })
     },
    // saveAppointment() {
    //     const ID = this.$route.params.id;
    //     axios.put(`http://127.0.0.1:8000/api/update_message/${ID}`, this.form)
    //         .then(response => {
    //             this.$store.state.appointment=response.data
    //         this.appointment = response.data;
    //         window.location.reload()
    //         })
    //         .catch(error => {
    //         console.log(error);
    //         });
    //         } 
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
.btn-back{
    background: #731acc;
    border-radius:5px;
    padding:0.5rem 1rem;
    float:right;
    border:none;
    color:#fff;
    font-size:0.8rem;
}

.modale{
    width:1020px;
   margin-left:2rem;
}

.body-container{
    display:flex;
    align-items: center;
    justify-content: space-between;
    margin-top:30px;
}

.body1 h2{
    margin-top:40px;
    font-size:1.4rem;
    color:#333;
}
h2 span{
    font-weight:400;
    letter-spacing: 1px;
    color:#333;
    margin-left:30px;
    font-size:1.3rem;
}
h2 select{
    width:300px;
    height: 30px;
    border:none;
    border-bottom:1px solid #731acc;
    font-size:1rem;
    padding:0 0.5rem;
    background: transparent;
    color:#731acc;
    margin-left:30px;
    outline: none;
}

.body2 h2{
     margin-top:40px;
    font-size:1.4rem;
    color:#333;
}
.h2{
    margin-left:40px;
    margin-top:40px;
    color:#731acc;
}
.para{
    border:1px solid red;
    margin:5px 40px;
    padding:10px;
    color:#7e7c7c;
}
.btn-ba{
    float:left;
    border:1px solid #731acc;
    padding:0.2rem 1rem;
    border-radius:5px;
}
.btn-ba i{
    font-size:2rem;
    color:#731acc;
}
/* .text{
    margin-top:10px;
    margin-left:3rem;
    width:930px;
    height:60px;
    border:1px solid #731acc;
    border-radius:5px;
    outline:none;
    padding:5px;
    font-size:1rem;
    color:#731acc;
} */
/* .message{
    height:50px;
    width:300px;
    outline:none;
    border:1px solid #731acc;
    border-radius:5px;
    padding:5px;
    color:#731acc;
}
.btn-send{
    width:200px;
    height:40px;
    background:#731acc;
    color:#fff;
    display:block;
    margin-left:auto;
    margin-right:auto;
    font-size: 1.4rem;
    border:none;
    border-radius:5px;
    margin-bottom:20px;
    cursor:pointer;
}
.btn-send:hover{
    background:#894ec5;
} */
.accepte{
    border:1px solid green;
    border-radius:5px;
    background:green;
    color:#fff;
    padding:0.1rem 1rem;
}
.refus{
    border:1px solid red;
    border-radius:5px;
    background:red;
    color:#fff;
    padding:0.1rem 1rem;
}
.wait{
    border:1px solid gray;
    border-radius:5px;
    background:gray;
    color:#fff;
    padding:0.1rem 1rem;
}
.inconnu{
    border:1px solid #333;
    border-radius:5px;
    background:#333;
    color:#fff;
    padding:0.1rem 1rem;
}
</style>