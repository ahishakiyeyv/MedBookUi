<template>
<head>
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" integrity="sha512-5A8nwdMOWrSz20fDsjczgUidUBR8liPYU+WymTZP1lmY9G6Oc7HlZv156XqnsgNUzTyMefFTcsFH/tnJE/+xBg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>
<div class="home"><router-link to="/" class="icons"><i class="fa fa-home" aria-hidden="true"></i></router-link></div>
    <div class="wrapper">
       <section class="form signup">
           <header>Créer Un Compte</header>
           <div class="forme">
               <div class="error-txt"></div>
               <div class="name-details">
                   <div class="field input">
                        <label>Nom</label>
                        <input type="text" v-model="form.nom_patient"  placeholder="Nom..." required>
                   </div>
                   <div class="field input">
                        <label>Prénom</label>
                        <input type="text" v-model="form.prenom_patient" placeholder="Prénom..." required>
                   </div>
               </div>
               <div class="name-details">
                    <div class="field input">
                        <label>Adresse</label>
                        <input type="text" v-model="form.adresse" placeholder="Adresse..." required>
                   </div>
                   <div class="field input">
                        <label>Téléphone</label>
                        <input type="text" v-model="form.telephone" placeholder="Téléphone..." @input="validatePhoneNumber" required>
                        <span class="invalide" v-if="errorMessage">{{errorMessage}}</span>
                        <!-- <span class="valide" v-else>Numéro valide</span> -->
                   </div>
               </div>
                   
                   <div class="field input">
                        <label>Email</label>
                        <input type="text" v-model="form.email" placeholder="Email..." @input="validateEmail" required>
                        <span class="valide" v-if="isValid">Email est valide</span>
                        <span class="invalide" v-else>Email est invalide</span>
                   </div>
                   <div class="field input">
                        <label>Mot de Passe</label>
                        <input type="password" v-model="form.password" placeholder="Mot de Passe..." @input="validatePassword" required>
                        <div v-if="!isPasswordValid">
                        <p class="validation" v-if="form.password.length < 8">Le mot de passe doit comporter au moins 8 caractères</p>
                        <p class="validation" v-if="!hasUppercase">Le mot de passe doit contenir au moins une lettre majuscule</p>
                        <p class="validation" v-if="!hasLowercase">Le mot de passe doit contenir au moins une lettre minuscule</p>
                        <p class="validation" v-if="!hasNumber">le mot de passe doit contenir au moins un chiffre</p>
                        <p class="validation" v-if="!hasSpecialChar">Le mot de passe doit contenir au moins un caractère spécial</p>
                    </div>
                        <input type="hidden" v-model="form.status">
                   </div>
                   <div class="field button">
                       <button @click="savePatient()" :disabled="!isFormValid">Creer un Compte</button>
                   </div>
                   </div>
           <div class="link">Vous avez déjà un compte? <router-link to="/login" class="a">Se connecter</router-link></div>
       </section>
    </div>
    
</template>
<script>
import axios from 'axios'
export default {
    name:'signin',
   data(){
    return{
        form:{
            nom:'',
            prenom:'',
            email:'',
            telephone:'',
            adresse:'',
            password:'',
            status:0
        },
        errorMessage:'',
        isValid:false,
        isPasswordValid:true,
        hasUppercase:false,
        hasLowercase:false,
        hasNumber:false,
        hasSpecialChar:false,
        
    }
   },
   methods:{
    savePatient(){
        axios.post('http://127.0.0.1:8000/api/register',this.form)
        .then((res)=>{
            console.log(res.data.message);
            this.form={
            nom:'',
            prenom:'',
            email:'',
            telephone:'',
            adresse:'',
            password:'',
            status:0
            }
            window.location.href="#/appointment"
        })
        
    },
    validatePhoneNumber(){
        const phoneRegex=/^\d{8}$/;
        if(phoneRegex.test(this.form.telephone)){
            this.errorMessage='';
        }else{
            this.errorMessage='Veuillez entrer le numéro valide!'
        }
    },
    validateEmail(){
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                this.isValid=emailRegex.test(this.form.email)
            },
            validatePassword(){
                this.hasUppercase= /[A-Z]/.test(this.form.password);
                this.hasLowercase= /[a-z]/.test(this.form.password);
                this.hasNumber= /\d/.test(this.form.password);
                this.hasSpecialChar= /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(this.form.password);
                this.isPasswordValid=
                    this.form.password.length >= 8 &&
                    this.hasUppercase &&
                    this.hasLowercase &&
                    this.hasNumber &&
                    this.hasSpecialChar;
            }
   },
   computed:{
    isFormValid(){
        return this.isValid && this.isPasswordValid;    
    }
   }
}
</script>
<style scoped>
*
{
     font-family: 'Rambla', sans-serif;
     margin: 0;
     padding: 0;
     box-sizing: border-box;
     outline: none;
     border: none;
     text-decoration: none;
}
.home{
    position:relative;
    left:100px;
    top:20px;
    width:100px;
}
.icons i{
    font-size:40px;
    color:#416991;
}
.wrapper{
    position:absolute;
    top:60px;
    left:400px;
    min-height:400px;
    background:#fff;
    width:500px;
    border-radius: 16px;
    box-shadow:0 0 12px 0 rgba(0,0,0,0.1), 0 3px 6px -8px rgba(0,0,0,0.5);
}
.form{
    padding:25px 30px;
}
.form header{
    font-size: 25px;
    font-weight:600;
    padding-bottom: 10px;
    border-bottom: 1px solid #e6e6e6;
    color:#416991;
}
.form .forme{
    margin:20px 0;
}
.form .forme .error-txt{
    color:#721c24;
    background:#f8d7da;
    padding:8px 10px;
    text-align:center;
    border-radius: 5px;
    margin-bottom: 10px;
    border:1px solid #f5c6cb;
    display:none; 
}
.form .forme .name-details{
    display:flex;
    justify-content: space-between;
}
.forme .name-details .field:first-child{
    margin-right:5px;
}
.forme .name-details .field:last-child{
    margin-left:10px;
}
.form .forme .field{
    display:flex;
    position: relative;
    flex-direction:column;
    margin-bottom: 10px;
}
.form .forme .field label{
    margin-bottom: 2px;
}
.form .forme .field input{
    outline:none;
}
.form .forme .input input{
    height:40px;
    width:100%;
    font-size:14px;
    padding:0 10px;
    border:1px solid #ccc;
    border-radius: 5px;
}
.valide{
    font-size:0.7rem;
    color:green;
    padding:5px;
    letter-spacing: 1px;
}
.invalide{
    font-size:0.7rem;
    color:red;
    padding:5px;
    letter-spacing:1px;
}
.validation{
    font-size:0.7rem;
    color:red;
    padding:5px 0 0 5px;
}
.form .forme .image input{
    font-size: 17px;
}
.form .forme .button button{
    margin-top: 13px;
    height:45px;
    border:none;
    font-size:17px;
    font-weight:bold;
    background:#416991;   
    color:#fff;
    border-radius: 5px;
    cursor:pointer;
}
.form .forme .button button:disabled{
    background:#7e7c7c;
}
.form .link{
    text-align: center;
    margin: 1px 0;
    font-size: 15px;
}
.form .link .a{
    color:#416991;
    font-weight:bold;
    text-decoration: underline;
}
.form .link .a:hover{
    color:#337;
}


@media (max-width: 768px){
.wrapper{
    position:absolute;
    top:8rem;
    left:1.5rem;
}
}
@media (max-width: 450px){
    .wrapper{
        position:absolute;
        top:8rem;
        left:1.5rem;
    }
}
</style>