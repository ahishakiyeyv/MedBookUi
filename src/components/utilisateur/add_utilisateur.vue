<template>
    <div class="bloc-modale" v-if="dialog">
        <div class="overlay" @click="close"></div>
        <div class="modale">
            <div class="title"><h3>Ajouter Utilisateur</h3></div>
            <div class="btn-close" @click="close">X</div>
        <div class="form">
            <form>
                <div class="blocs1">
                    <label>Matricule</label>
                    <input type="text" v-model="admin.matricule" placeholder="Matricule...">
                    <label>Nom</label>
                    <input type="text" v-model="admin.nom_inf" placeholder="Nom...">
                    <label>Prenom</label>
                    <input type="text" v-model="admin.prenom_inf" placeholder="Prenom...">
                    <label>Email</label>
                    <input type="text" v-model="admin.email" placeholder="Email...">
                </div>
                <div class="blocs2">
                    <label>Telephone</label>
                    <input type="text" v-model="admin.telephone" placeholder="Telephone...">
                    <label>Specialite</label>
                    <select v-model="admin.specialite">
                        <option value="">--Specialité--</option>
                        <option value="cardiologie">Cardiologie</option>
                        <option value="pediatrie">Pediatrie</option>
                        <option value="gynecologie">Gynecologie</option>
                        <option value="generaliste">Medecin Generaliste</option>
                        <option value="medecin">Medecin</option>
                        <option value="infirmier">Infirmier</option>
                    </select>
                    <label>Sexe</label>
                    <select v-model="admin.sexe">
                        <option value="">--Sexe--</option>
                        <option value="homme">Homme</option>
                        <option value="femme">Femme</option>
                    </select>
                    <label>Mot de Passe</label>
                    <input type="password" v-model="admin.password" placeholder="Mot de Passe..." required>
                </div>
                
            </form>
            <button @click="login()">Enregistrer</button>
        </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
  name:'add_utilisateur',
  props:['dialog'],
  data(){
    return{
        admin:{
            matricule:'',
            nom_inf:'',
            prenom_inf:'',
            email:'',
            telephone:'',
            specialite:'',
            sexe:'',
            password:'',
            status:0,
        }
    }
  },
  methods:{
    login(){
        axios
        .post('http://127.0.0.1:8000/api/register_inf',this.admin)
        .then(res=>{
            this.close()
            window.location.reload()
        })
    },
    close(){
        this.$emit('close')
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
    align-items:center;
    justify-content:center;
    z-index:1000;
}
.overlay{
    background:rgba(0,0,0,0.5);
    backdrop-filter: blur(2px);
    position:fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
}
.modale{
    background:#f1f1f1;
    color:#333;
    position:fixed;
    top:20%;
    padding:20px;
    border-radius:5px;
    width:800px;
}
.title h3{
    color:#7e7c7c;
    position:absolute;
    left:20px;
    top:10px;
    font-weight:normal;
}
.btn-close{
    position:absolute;
    top:10px;
    right:10px;
    padding:0.2rem 1rem;
    background:red;
    border-radius:5px;
    color:#fff;
    cursor:pointer;
}
.blocs1{
    display:flex;
    flex-direction: column;
}
.blocs2{
    display:flex;
    flex-direction: column;
}
.form{
    margin-top:30px;
}
.form form{
    display: flex;
    justify-content: space-around;
    align-items:center;
}
.blocs1 input{
    width:20.5rem;
    height:2rem;
    padding:0.2rem 0.2rem;
    font-size:1rem;
    outline:none;
    color:#333;
}
.blocs1 select{
    width:20.5rem;
    height:2rem;
    padding:0.2rem 0.2rem;
    font-size:1rem;
    outline:none;
    color:#333;
}
.blocs2 input{
    height:2rem;
    width:20.5rem;
    padding:0.2rem 0.2rem;
    font-size:1rem;
    outline:none;
    color:#333;
}
.blocs2 select{
    width:20.5rem;
    height:2rem;
    padding:0.2rem 0.2rem;
    font-size:1rem;
    outline:none;
    color:#333;
}
.blocs1 label{
    color:#416991;
}
.blocs2 label{
    color:#416991;
}
.form button{
    display:block;
    margin-right:auto;
    margin-left:auto;
    margin-top:20px;
    padding:0.5rem 2rem;
    font-size:1.2rem;
    border-radius:5px;
    background:#416991;
    border:none;
    color:#f1f1f1;
}
</style>