<template>
<head>
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" integrity="sha512-5A8nwdMOWrSz20fDsjczgUidUBR8liPYU+WymTZP1lmY9G6Oc7HlZv156XqnsgNUzTyMefFTcsFH/tnJE/+xBg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>
<div class="home"><router-link to="/" class="icons"><i class="fa fa-home" aria-hidden="true"></i></router-link></div>
     <div class="wrapper">
       <section class="form login">
           <header>Réinitialiser le mot de passe</header>
           <form @submit.prevent="submit" >
               <div class="error-txt"></div>
                   <div class="field input">
                    <label>Email</label>
                    <input type="email" v-model="form.email" placeholder="Entrer le mail..."  required>
                    
                   </div>
                   <div class="field input">
                    <label>Nouveau mot de passe</label>
                    <input type="password" v-model="form.password" placeholder="Entrer le mot de passe..."  required>
                   </div>
                   <div class="field input">
                    <label>Confirmer le nouveau mot de passe</label>
                    <input type="password" v-model="form.cpassword" placeholder="Confirmer le mot de passe..."  required>
                   </div>
                   <div class="field button">
                    <button >Réinitialiser</button>
                   </div>
           </form>
           <div class="link"><router-link to="/login" class="a">Se connecter</router-link></div>
       </section>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name:'resetpassword',
    data(){
        return{
            form:{
                email:'',
                password:'',
                cpassword:''
            }
        }
    },
    methods:{
        submit(){
            if(this.form.password === this.form.cpassword){
                axios
                .post('http://127.0.0.1:8000/api/reset_password',this.form)
                .then(res=>{
                    alert('Mot de passe réinitialisé avec succès')
                    window.location.reload()
                })
            }else{
                alert('Vérifier le mot de passe !')
            }
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
.validate{
    font-size:0.7rem;
    color:green;
    padding:5px 0 0 5px;
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
    background:#416991;   
    color:#fff;
    border-radius: 5px;
    cursor:pointer;
}
.form form .button button:disabled{
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