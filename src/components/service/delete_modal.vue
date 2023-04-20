<template>
    <div class="bloc-modale" v-if="modal">
        <div class="overlay" @click="fermer"></div>
        <div class="modale">
            <div class="head">
                <div class="title">
                <h3>Confirmer la suppression</h3>
            </div>
            <div class="btn-close" @click="fermer">X</div>
            </div>
            <div class="body">
                <p>Voulez-Vous Vraiment Supprimer Ce Service  <span>"{{$store.state.service.nom_service}}"  ?</span> </p>
                <div class="btn">
                    <button @click="deleteService" class="confirm">Oui, Supprimer</button>
                    <button @click="fermer" class="delete">Non</button>
                </div>
            </div>
            
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name:'delete_modal',
    props:['modal'],
    data(){
        return{

        }
    },
    methods:{
        getService(){
            this.$emit('getService')
        },
        fermer(){
            this.$emit(`fermer`)
        },
        deleteService(){
            axios
            .post('http://127.0.0.1:8000/api/delete_service/'+this.$store.state.service.id,this.form)
            .then((response)=>{
                this.fermer();
                this.getService()
                window.location.reload()
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
    align-items:center;
    justify-content:center;
}
.overlay{
    backdrop-filter: blur(2px);
    position:fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
}
.modale{
    background:#f1f1f1;
    border:1px solid red;
    color:#333;
    position:fixed;
    top:20%;
    padding:20px;
    border-radius:5px;
    width:400px;
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
    cursor:pointer;
}
.body{
    margin-top:40px;
    padding:0;
}
.body p span{
    color:#000;
    font-weight:bold;
    font-size:1.2rem;
}
.btn button{
    margin:20px 10px 0 0;
}
.confirm{
    padding:0.2rem 1rem;
    background:green;
    border:none;
    border-radius:5px;
    color:#fff;
    font-weight:bold;
    cursor:pointer;
}
.delete{
    padding:0.2rem 1rem;
    background:red;
    border:none;
    border-radius:5px;
    color:#fff;
    font-weight:bold;
    cursor:pointer;
}

</style>