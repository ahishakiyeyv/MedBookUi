<template>
<head>
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" integrity="sha512-5A8nwdMOWrSz20fDsjczgUidUBR8liPYU+WymTZP1lmY9G6Oc7HlZv156XqnsgNUzTyMefFTcsFH/tnJE/+xBg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>
     <div class="wrapper">
       <section class="form login">
           <header>Compte Admin</header>
           <form @submit.prevent="submit" >
               <div class="error-txt">{{ errorMessage }}</div>
                   <div class="field input">
                    <label>Email</label>
                    <input type="email" v-model="form.email" placeholder="Entrer le mail..." required>
                   </div>
                   <div class="field input">
                    <label>Mot de passe</label>
                    <input type="password" v-model="form.password" placeholder="Entrer le mot de passe..." required>
                   </div>
                   <div class="field button">
                    <button>Se Connecter</button>
                       <!-- <input type="submit" value="Se Connecter" name="submit"> -->
                   </div>
           </form>
           <div class="link"><router-link to="/reset" class="a">Mot de passe oublié ?</router-link></div>
       </section>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return{
            form:{
                email:'',
                password:''
            },
            errorMessage:''
        }
    },
    methods:{
          submit(){
            
                axios.post('http://127.0.0.1:8000/api/login_inf',this.form)
                .then((response)=>{
                    if(response.data.success){
                        this.$store.commit("login_inf",JSON.stringify(response.data.data))
                        this.$router.push({path:'/dashboard'})
                        alert('Good!')
                    }
                    
                })
                .catch((error)=>{
                    if(error.message == "Network Error"){
                        this.errorMessage = "Vous n'etes pas connecte au serveur!"
                    }else{
                        this.errorMessage = error.response.data.message;

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
.form .link{
    text-align: center;
    margin: 1px 0;
    font-size: 15px;
}
.form .link .a{
    color:#337;
    font-weight:normal;
    text-decoration: none;
}
.form .link .a:hover{
    color:#333;
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