<template>
    <div class="bloc-modale" v-if="dialog">
        <div class="overlay" @click="close"></div>
        <div class="modale">
            <div class="title">
                <h3>{{title}}</h3>
            </div>
            <div class="btn-close" @click="close">X</div>
            <div class="form">
                <label>Nom</label>
                <input type="text" placeholder="Nom..." v-model="form.nom_med">
                <label>Prenom</label>
                <input type="text" placeholder="Prenom..." v-model="form.prenom_med">
                <label>Email</label>
                <input type="text" placeholder="Email..." v-model="form.email">
                <label>Telephone</label>
                <input type="text" placeholder="Telephone..." v-model="form.telephone">
                <label>Sexe</label>
                <select v-model="form.sexe">
                    <option value="">--Sexe--</option>
                    <option value="homme">Homme</option>
                    <option value="femme">Femme</option>
                </select>
                <label>Specialite</label>
                <select v-model="form.specialite">
                    <option value="">--Specialite--</option>
                    <option value="Cardiologue">Cardiologie</option>
                    <option value="pediatre">Pediatrie</option>
                    <option value="gynecologue">Gynecologie</option>
                    <option value="infirmier">Infirmier</option>
                    <option value="generaliste">Medecin Generaliste</option>
                </select>
                <label>Disponibilite</label>
                <input type="text" placeholder="Disponibilite..." v-model="form.disponibilite">
                <button @click="saveMedecin">{{btn}}</button>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
   name:'modal_med',
   props:['dialog','edit_medecin'],
   data(){
    return{
        title:'Ajouter Medecin',
        btn:'Enregistrer',
        form:{
            nom_med:'',
            prenom_med:'',
            email:'',
            telephone:'',
            sexe:'',
            specialite:'',
            disponibilite:'',
        },
        medecins:{}
    }
   },
   methods:{
    saveMedecin(){
        if(this.edit_medecin){
            axios
            .put('http://127.0.0.1:8000/api/update_medecin'+this.$store.state.medecins.id,this.form)
            .then(res=>{
                this.getMedecin()
                this.close()
                window.location.reload()
            })
        }else{
        axios
        .post('http://127.0.0.1:8000/api/create_medecin', this.form)
        .then(res=>{
            this.$store.state.medecin=res.data
            this.medecin=res.data
            this.close()
            window.location.reload()
        })
        }
    },
    getMedecin(){
        this.$emit('getMedecin')
    },
    close(){
        this.$emit('close')
    }
   },
   mounted(){
    this.getMedecin()
    if(this.edit_medecin){
        this.form.nom_med=this.$store.state.medecins.nom_med
        this.form.prenom_med=this.$store.state.medecins.prenom_med
        this.form.email=this.$store.state.medecins.email
        this.form.telephone=this.$store.state.medecins.telephone
        this.form.sexe=this.$store.state.medecins.sexe
        this.form.specialite=this.$store.state.medecins.specialite
        this.form.disponibilite=this.$store.state.medecins.disponibilite
        this.btn='Modifier'
        this.title='Modifier Medecin'
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
    top:6%;
    padding:20px;
    border-radius:5px;
    width:350px;
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
.form{
    margin-top:30px;
    display:flex;
    flex-direction:column;
}
.form label{
    color:#416991;
    margin-top:5px;
}
.form input{
    height:2rem;
    font-size:1rem;
    padding:0.2rem 0.3rem;
    outline:none;
    color:#333;
}
.form select{
    height:2rem;
    font-size:1rem;
    padding:0.2rem 0.3rem;
    outline:none;
}
.form button{
    margin-top:10px;
    padding:0.5rem 1rem;
    background:#416991;
    border:none;
    border-radius:5px;
    color:#f1f1f1;
    font-size:1rem;
    cursor: pointer;
}
</style>