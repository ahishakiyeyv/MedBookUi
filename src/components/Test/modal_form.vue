<template>
    <div class="bloc-modale" v-if="dialog">
        <!-- <div class="overlay" v-on:click="toggleModale"></div> -->
        <div class="overlay" @click="close"></div>
        <div class="modale">
            <div class="head">
                <div class="title"><h3>{{title}}</h3></div>
                 <!-- <div class="btn-close" v-on:click="toggleModale">X</div> -->
                 <div class="btn-close" @click="close">X</div>
            </div>
            <div class="form">
                <form>
                    <label>Nom Test:</label>
                    <input type="text" v-model="form.nom_test" placeholder="Nom..." required>
                    <label>Prix Test:</label>
                    <input type="text" v-model="form.prix_test" placeholder="Prix..." required>
                    <label>Description:</label>
                    <textarea  cols="10" rows="10" v-model="form.description" placeholder="Description..." required></textarea>
                    <button @click="saveTest">{{btn}}</button>
                </form>
            </div>
            
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name:'modal_form',
    props:['dialog','edit_test'],
    data(){
        return{
            title:'Ajouter un Test',
            btn:'Enregistrer',
            form:{
                nom_test:'',
                prix_test:'',
                description:''
            },
            tests:{}
        }
    },
    methods:{
        getTest(){
            this.$emit('getTest')
        },
        close(){
            this.$emit('close')
        },
        saveTest(){
            if(this.edit_test){
                axios 
                .put('http://127.0.0.1:8000/api/update_test/'+this.$store.state.tests.id,this.form)
                .then(res=>{
                    this.getTest()
                    this.close()
                    window.location.reload()
                })
            }else{
            axios
            .post('http://127.0.0.1:8000/api/create_test',this.form)
            .then((res)=>{
                console.log(res.data)
                this.form={
                    nom_test:'',
                    prix_test:'',
                    description:''
                }
                window.location.reload()
            })
        }
    }
    },
    mounted(){
        this.getTest()
        if(this.edit_test){
            this.form.nom_test=this.$store.state.tests.nom_test
            this.form.prix_test=this.$store.state.tests.prix_test
            this.form.description=this.$store.state.tests.description
            this.btn='Modifier'
            this.title='Modifier Test'
        }
    }
}
</script>
<style scoped>
.bloc-modale{
    position:fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    display:flex;
    align-items:center;
    justify-content:center;
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
    top:15%;
    width:400px;
    border-radius:5px;
}
.head .title h3{
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
    cursor: pointer;
}
form {
    display:flex;
    flex-direction:column;
    margin-top:15%;
}
form label{
    padding:0.3rem 1.1rem;
    font-size:1.1rem;
    color:#416991;
    font-weight:bold;
    margin-top:15px;
}
form input{
    width:350px;
    height:35px;
    margin-left:20px;
    padding:1rem 0.5rem;
    font-size:1rem;
    border:1px solid #416991;
    outline:none;
    border-radius:5px;
    color:#416991;
}
form textarea{
margin:0 30px 30px 18px;
height:60px;
padding:0.2rem 0.5rem;
font-size:1rem;
border:1px solid #416991;
outline:none;
font-family:'poppins','sans serif';
color:#731acc;
border-radius:5px;
}
form button{
    width:350px;
    display:block;
    margin:0 auto 30px auto;
    height:35px;
    font-size:1rem;
    color:#fff;
    font-weight:bold;
    background:#416991;
    border-radius:5px;
    border:none;
    cursor:pointer;
}
</style>