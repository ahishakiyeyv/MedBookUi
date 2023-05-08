<template>
<head>
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" integrity="sha512-5A8nwdMOWrSz20fDsjczgUidUBR8liPYU+WymTZP1lmY9G6Oc7HlZv156XqnsgNUzTyMefFTcsFH/tnJE/+xBg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>
    <div class="wrapper">
       <section class="form signup">
           <header>Creez Un Compte</header>
           <form>
               <div class="error-txt"></div>
              
               <div class="name-details">
                   <div class="field input">
                        <label>Nom</label>
                        <input type="text"  v-model="admin.nom_inf" placeholder="Nom..." required>
                   </div>
                   <div class="field input">
                        <label>Prenom</label>
                        <input type="text" v-model="admin.prenom_inf" placeholder="Prenom..." required>
                   </div>
               </div>
               <div class="name-details">
                    <div class="field input">
                        <label>Email</label>
                        <input type="text" v-model="admin.email" placeholder="Email..." required>
                   </div>
                   <div class="field input">
                        <label>Telephone</label>
                        <input type="text" v-model="admin.telephone" placeholder="Telephone..." required>
                   </div>
               </div>
                   <div class="name-details">
                     <div class="field input">
                        <label>Matricule</label>
                        <input type="text" v-model="admin.matricule" placeholder="Matricule..." required>
                   </div>
                       
                     <div class="field input">
                         <label>Specialité</label>
                        <select v-model="admin.specialite">
                            <option value="">--Specialite--</option>
                            <option value="cardiologie">Cardiologie</option>
                            <option value="pediatrie">Pediatrie</option>
                            <option value="gynecologie">Gynecologie</option>
                            <option value="generaliste">Medecin Generaliste</option>
                            <option value="medecin">Medecin</option>
                            <option value="infirmier">Infirmier</option>
                        </select>
                     </div>
                   </div>
                   <div class="field input">
                         <label>Sexe</label>
                        <select v-model="admin.sexe">
                            <option value="">--Sexe--</option>
                            <option value="homme">Homme</option>
                            <option value="femme">Femme</option>
                        </select>
                     </div> 
                   
                   <div class="field input">
                        <label>Mot de Passe</label>
                        <input type="password" v-model="admin.password" placeholder="Mot de Passe..." required>
                   </div>
                   <div class="field button">
                       <button @click="login()">Creer un Compte</button>
                   </div>
           </form>
           <div class="link">Vous avez déjà un compte? <router-link to="/admin" class="a">se connecter</router-link></div>
       </section>
    </div>
    <!-- <pre>
                        {{ JSON.stringify(admin,null,2) }}
                    </pre> -->
    
</template>
<script>
import axios from 'axios'
export default {
    name:'signup',
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
                status:0
            }
        }
    },
    methods:{
        login(){
            axios
            .post('http://127.0.0.1:8000/api/register_inf', this.admin)
            .then(res=>{
                alert(res.data.message);
                 this.admin={
                matricule:'',
                nom_inf:'',
                prenom_inf:'',
                email:'',
                telephone:'',
                specialite:'',
                sexe:'',
                password:'',
                status:0
            }
            })
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
}
.icons i{
    font-size:40px;
}
.wrapper{
    position:absolute;
    top:50px;
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
    color:#713acc;
}
.form form{
    margin:20px 0;
}
.form form .error-txt{
    color:#721c24;
    background:#f8d7da;
    padding:8px 10px;
    text-align:center;
    border-radius: 5px;
    margin-bottom: 10px;
    border:1px solid #f5c6cb;
    display:none; 
}
.form form .name-details{
    display:flex;
    justify-content: space-around;
}
form .name-details .field:first-child{
    margin-right:5px;
}
form .name-details .field:last-child{
    margin-left:10px;
}
.form form .field{
    display:flex;
    position: relative;
    flex-direction:column;
    margin-bottom: 10px;
}
.form form .field label{
    margin-bottom: 2px;
}
.form form .field input{
    outline:none;
}
.form form .input input{
    height:40px;
    width:100%;
    font-size:14px;
    padding:0 10px;
    border:1px solid #ccc;
    border-radius: 5px;
}
.form form select{
    height:40px;
    width:100%;
    font-size:14px;
    padding:0 10px;
    border:1px solid #ccc;
    border-radius: 5px;
}
.form form .image input{
    font-size: 17px;
}
.form form .button button{
    margin-top: 13px;
    height:45px;
    border:none;
    font-size:17px;
    font-weight:bold;
    background:#713acc;   
    color:#fff;
    border-radius: 5px;
    cursor:pointer;
}
.form .link{
    text-align: center;
    margin: 1px 0;
    font-size: 15px;
}
.form .link .a{
    color:#333;
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