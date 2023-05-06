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
                    <input type="hidden" v-model="appointment.numero_ordre" placeholder="Numero" readonly>
                    <input type="hidden" v-model="appointment.nom" placeholder="Nom..." readonly>
                    <input type="hidden" v-model="appointment.prenom" placeholder="Prenom..." readonly>
                    <input type="hidden" v-model="appointment.adresse" placeholder="Adresse..." readonly>
                    
                </div>
                <div class="content2">
                    <select v-model="appointment.sexe" class="selected">
                        <option value="">--Votre Sexe--</option>
                        <option value="homme">Homme</option>
                        <option value="femme">Femme</option>
                    </select>
                    <input type="text" v-model="appointment.age" placeholder="Année Naissance..." required>
                    <input type="date" v-model="appointment.date_arrive" placeholder="Date..." :min="minDate" required> 
                    <select v-model="appointment.service" class="selected">
                        <option value="">--Service Souhaitée--</option>
                        <option value="cardiologie">Cardiologie</option>
                        <option value="pediatrie">Pediatrie</option>
                        <option value="gynecologie">Gynecologie</option>
                        <option value="Minterne">Medecine interne</option>
                        <option value="Mgenerale">Medecine Generale</option>
                        <option value="laboratoire">Laboratoire</option>
                        <option value="pharmacie">Pharmacie</option>
                    </select>
                </div>
                
            </div>
            <button class="btn" @click="saveAppointment" :disabled="!isDateValid">Envoyer</button>
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
        const today=new Date();
        today.setDate(today.getDate());
        return{
            appointment:{
                numero_ordre:'PSJ-2023',
                nom:this.$store.state.user.user.nom_patient,
                prenom:this.$store.state.user.user.prenom_patient,
                age:'',
                sexe:'',
                adresse:this.$store.state.user.user.adresse,
                date_arrive:null,
                service:'',
                user_id:this.$store.state.user.user.id
                
            },
            minDate:today.toISOString().substr(0,10),
        }
    },
    methods:{
        saveAppointment(){
            axios.post('http://127.0.0.1:8000/api/create_appointment',this.appointment)
            .then(res=>{
                console.log(res.data)
                alert(res.data.message)
                window.location.reload()
                // this.numero_ordre=Math.floor(Math.random() * 100) +1;
                this.appointment={
                    numero_ordre:null,
                    nom:'',
                    prenom:'',
                    age:'',
                    sexe:'',
                    adresse:'',
                    date_arrive:'',
                    service:'',
                    user_id:this.$store.state.user.user.id
                }
            })
            },
            // generateNumber(){
            //     this.numero_ordre=Math.floor(Math.random() * 100) +1;
            // }
        },
        computed:{
            isDateValid(){
                const selected=new Date(this.appointment.date_arrive)
                const min = new Date(this.minDate)
                return selected >= min
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
    
}
.overlay{
    background:rgba(0,0,0,0.5);
    backdrop-filter: blur(4px);
    position:fixed;
    top:0;
    right:0;
    left:0;
    bottom:0;
z-index:999;
}
.modale{
    background:#f1f1f1;
    color:#333;
    position:fixed;
    left:40%;
    top:10%;
    width:400px;
    height:500px;
    border-radius:5px;
    z-index:1000;
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
    color:green;
    letter-spacing: 1px;
    outline:none;
    border:none;
    border-bottom:2px solid #416991;
    background:transparent; 
}
.content2{
    display:flex;
    flex-direction:column;
}
.content2 input{
    width:350px;
    margin:15px;
    height:40px;
    font-size:1rem;
    color:#416991;
    letter-spacing: 1px;
    outline:none;
    border:none;
    border-bottom:2px solid #416991;
    background:transparent; 
}
.content2 select{
    width:350px;
    margin:15px;
    height:40px;
    font-size:1rem;
    outline:none;
    color:#416991;
    letter-spacing: 1px;
    border:none;
    border-bottom:2px solid #416991;
    background:transparent;
}
::placeholder{
    color:#416991;
    letter-spacing: 1px;
}
.btn{
    padding:0.5rem 3rem;
    background:#416991;
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