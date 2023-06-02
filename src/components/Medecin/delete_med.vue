<template>
    <div class="bloc-modale" v-if="modale">
        <div class="overlay" @click="close"></div>
        <div class="modale">
            <div class="head">
                <div class="title">Confirmer la suppression</div>
                <div class="btn-close" @click="close">X</div>
            </div>
            <div class="body">
                <p>Voulez-Vous vraiment supprimer le medecin <span>"{{ $store.state.medecin.nom_med }} {{ $store.state.medecin.prenom_med }}" ?</span></p>
                <div class="btn">
                    <button @click="deleteMedecin" class="confirm">Oui, Supprimer</button>
                    <button @click="close" class="delete">Non</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name:'delete_med',
    props:['modale'],
    data(){
        return{

        }
    },
    methods:{
        getMedecin(){
            this.$emit('getMedecin')
        },
        close(){
            this.$emit('close')
        },
        deleteMedecin(){
            axios
            .post('http://127.0.0.1:8000/api/delete_medecin/'+this.$store.state.medecin.id,this.form)
            .then(res=>{
                this.getMedecin()
                this.close()
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
    background:rgba(0,0,0,0.3);
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
    margin-bottom:20px;
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