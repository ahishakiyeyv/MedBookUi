<template>
    <div class="bloc-modale" v-if="details">
        <div class="overlay" v-on:click="toggleModaleDetails"></div>
        <!-- <div class="overlay" @click="close"></div> -->

        <div class="modale">
            <div class="head">
                <div class="title">Details Rendez-Vous</div>
                <button v-on:click="toggleModaleDetails" class="btn-close">X</button>
            </div>
            <div class="body-container">
                <div class="body1">
                    <h2>Numero: <span>{{$store.state.appointment.numero_ordre}}</span></h2>
                    <h2>Nom: <span>{{$store.state.appointment.nom}}</span></h2>
                    <h2>Prenom: <span>{{$store.state.appointment.prenom}}</span></h2>
                    <h2>Age: <span>{{$store.state.appointment.age}}</span></h2>
                </div>
                <div class="body2">
                    <h2>Adresse: <span>{{$store.state.appointment.sexe}}</span></h2>
                    <h2>Date: <span>{{$store.state.appointment.date_arrive}}</span></h2>
                    <h2>Service: <span>{{$store.state.appointment.service}}</span></h2>
                    <!-- <h2>Status: <span v-if="status==='1'">Accepté</span> <span v-else-if="status==='2'">En Attente</span> <span v-else-if="status==='0'">Refuser</span></h2> -->
                    <h2>Status:
  <span v-if="$store.state.appointment.status === '1'">Accepté</span>
  <span v-else-if="$store.state.appointment.status === '2'">En Attente</span>
  <span v-else-if="$store.state.appointment.status === '0'">Refuser</span>
  <span v-else-if="$store.state.appointment.status===''">Inconnu</span>
</h2>

                    <!-- <h2>Status: <span>{{$store.state.appointment.status}}</span></h2> -->
                </div>
            </div>
            <h2 class="h2">Message</h2>
            <!-- <p class="para" v-if="remarque.length > 0">{{$store.state.appointment.remarque}}</p> -->
            <p class="para">{{$store.state.appointment.remarque}}</p>
            <!-- <p class="para" v-else>Pas de message pour le moment....</p> -->
        </div>
    </div>
</template>
<script>
export default {
    name:'app_details',
    props:['details','toggleModaleDetails'],
    data(){
        return{
            selectedOption:null,
            appointment:[]
        }
    },
    
    // mounted(){
    //    this.getAppointment()
    // },
   
    methods:{
         close(){
       this.$emit('close')
    },
    getAppointment(){
        this.$emit('getAppointment')
    },
    }
}
</script>
<style scoped>
*{
    margin:0;
    padding:0;
    box-sizing: border-box;
}
.bloc-modale{
    position:fixed;
    right:0;
    top:0;
    left:0;
    bottom:0;
    display:flex;
    align-items:center;
    justify-content:center;
    z-index:1000;
}
.overlay{
    background:rgba(0,0,0,0.5);
    position:fixed;
    right:0;
    top:0;
    left:0;
    bottom:0;
}
.modale{
    background:#f1f1f1;
    color:#333;
    position:fixed;
    width:900px;
    height:530px;
    z-index: 1000;
    top:14%;
    border-radius:5px;
}
.title{
    position:absolute;
    left:10px;
    top:10px;
    color:#7e7c7c;
    font-size:1.2rem;
}
.btn-close{
    position:absolute;
    right:10px;
    top:10px;
    padding:5px 10px;
    color:#fff;
    border-radius:5px;
    border:none;
    background:red;
    cursor: pointer;
}
.body-container{
    display:flex;
    align-items: center;
    justify-content: space-around;
    margin-top:40px;
}
.body1 h2{
    margin-top:40px;
    font-size:1.5rem;
    color:#333;
}
h2 span{
    font-weight:400;
    letter-spacing: 1px;
    color:#333;
    margin-left:30px;
    font-size:1.3rem;
}
.body2 h2{
     margin-top:40px;
    font-size:1.5rem;
    color:#333;
}
.h2{
    margin-left:40px;
    margin-top:40px;
    color:#731acc;
}
.para{
    border:1px solid #731acc;
    border-radius:5px;
    margin:5px 40px;
    padding:10px;
    color:#7e7c7c;
}
</style>