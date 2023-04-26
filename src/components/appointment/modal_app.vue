<template>
    <div class="bloc_modale" v-if="dialog">

        <div class="overlay" v-on:click="toggleModale"></div>

        <div class="modale">
            <div class="head">
            <div class="title">Prendre Rendez-vous</div>
            <div class="btn-modale" v-on:click="toggleModale">X</div>
            </div>
            <form>
            <div class="container">
                <div class="content1">
                    <input type="text" v-model="appointment.numero_ordre" placeholder="Numero" readonly>
                    <input type="text" v-model="appointment.nom" placeholder="Nom..." required>
                    <input type="text" v-model="appointment.prenom" placeholder="Prenom..." required>
                    <input type="text" v-model="appointment.age" placeholder="Age..." required>
                    
                </div>
                <div class="content2">
                    <select v-model="appointment.sexe" class="selected">
                        <option value="">--Sexe--</option>
                        <option value="homme">Homme</option>
                        <option value="femme">Femme</option>
                    </select>
                    <input type="text" v-model="appointment.adresse" placeholder="Adresse..." required>
                    <input type="Date" v-model="appointment.date_arrive" placeholder="Date..." required>
                    <select v-model="appointment.service" class="selected">
                        <option value="">--Service--</option>
                        <option value="cardiologie">Cardiologie</option>
                        <option value="pediatrie">Pediatrie</option>
                        <option value="gynecologie">Gynecologie</option>
                        <option value="Minterne">Medecine interne</option>
                        <option value="Mgenerale">Medecine Generale</option>
                        <option value="laboratoire">Laboratoire</option>
                        <option value="pharamacie">Pharmacie</option>
                    </select>
                </div>
                
            </div>
            <button class="btn" @click="saveAppointment">Envoyer</button>
            </form>

        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name:'modal_app',
    props:['dialog','toggleModale'],
    data(){
        return{
            appointment:{
                numero_ordre:'PSJ-12-01',
                nom:'',
                prenom:'',
                age:'',
                sexe:'',
                adresse:'',
                date_arrive:'',
                service:'',
            }
        }
    },
    methods:{
        saveAppointment(){
            axios.post('http://127.0.0.1:8000/api/create_appointment',this.appointment)
            .then(res=>{
                console.log(res.data)
                alert(res.data.message)
                this.appointment={
                    numero_ordre:'PSJ-12-01',
                    nom:'',
                    prenom:'',
                    age:'',
                    sexe:'',
                    adresse:'',
                    date_arrive:'',
                    service:'',
                }
            })
           

            }
        }
    }
</script>
<style scoped>
.bloc-modale{
    position:fixed;
    top:0;
    right:0;
    left:0;
    bottom:0;
    display:flex;
    justify-content:center;
    align-items:center;
    z-index:1000;
}
.overlay{
    background:rgba(0,0,0,0.5);
    position:fixed;
    top:0;
    right:0;
    left:0;
    bottom:0;

}
.modale{
    background:#f1f1f1;
    color:#333;
    position:fixed;
    left:15%;
    top:10%;
    z-index:1000;
    width:900px;
    height:500px;
    border-radius:5px;
}
.title{
    position:absolute;
    left:10px;
    top:10px;
    color:#7e7c7c;
    font-size:1.5rem;
}
.btn-modale{
    position:absolute;
    right:10px;
    top:10px;
    padding:5px 10px;
    color:#fff;
    border-radius:5px;
    background:red;
    cursor: pointer;
}
.container{
    display:flex;
    align-items: center;
    justify-content: space-around;
    margin-top:80px;
}
.content1{
    display:flex;
    flex-direction: column;
}
.content1 input{
    width:300px;
    margin:15px;
    height:40px;
    font-size:1rem;
    color:#731acc;
    letter-spacing: 1px;
    outline:none;
    border:none;
    border-bottom:2px solid #731acc;
    background:transparent; 
}
.content2{
    display:flex;
    flex-direction:column;
}
.content2 input{
    width:300px;
    margin:15px;
    height:40px;
    font-size:1rem;
    color:#731acc;
    letter-spacing: 1px;
    outline:none;
    border:none;
    border-bottom:2px solid #731acc;
    background:transparent; 
}
.content2 select{
    width:300px;
    margin:15px;
    height:40px;
    font-size:1rem;
    outline:none;
    color:#731acc;
    letter-spacing: 1px;
    border:none;
    border-bottom:2px solid #731acc;
    background:transparent;
}
::placeholder{
    color:#731acc;
    letter-spacing: 1px;
}
.btn{
    padding:1rem 4rem;
    background:#731acc;
    color:#fff;
    font-weight:normal;
    letter-spacing:1px;
    font-size:1.4rem;
    border-radius:10px;
    border:none;
    display:block;
    margin-left:auto;
    margin-right:auto;
    margin-top:20px;
    cursor: pointer;
}
</style>