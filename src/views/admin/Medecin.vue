<template>
<Dashboard/>
    <div class="main">
        <div class="label-top">
            <h3>Liste des Medecins</h3>
        </div>
        <div class="top_row">
            <div class="search">
                <input type="text" placeholder="Rechercher..." v-model="inputSearch">
            </div>
            <Modal v-bind:dialog="dialog" @close="close" @getMedecin="getMedecin" :edit_medecin="modifier" v-if="dialog"></Modal>
            <ModaleDelete v-bind:modale="modale" @getMedecin='getMedecin' @close="close"></ModaleDelete>
            <div class="btn">
                <button @click="OpenModal">Ajouter</button>
            </div>
        </div>
        <div class="table">
            <table>
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Prenom</th>
                        <th>Email</th>
                        <th>Telephone</th>
                        <th>Sexe</th>
                        <th>Specialite</th>
                        <th>Disponibilite</th>
                        <th colspan="2">Action</th>
                    </tr>
                </thead>
                <tbody v-if="medecin.length > 0">
                    <tr v-for="med in medecin" :key="med.id">
                        <td>{{med.nom_med}}</td>
                        <td>{{med.prenom_med}}</td>
                        <td>{{med.email}}</td>
                        <td>{{med.telephone}}</td>
                        <td>{{med.sexe}}</td>
                        <td>{{med.specialite}}</td>
                        <td>{{med.disponibilite}}</td>
                        <td> <a @click="edit_medecin(med)" class="modify"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></a></td>
                        <td><a @click="ConfirmDelete(med)" class="delete"><i class="fa fa-trash-o" aria-hidden="true"></i></a></td>
                    </tr>
                </tbody>
                <tbody v-else>
                    <tr>
                        <td colspan="8">Chargement...</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
import Modal from '@/components/Medecin/modal_med.vue'
import ModaleDelete from '@/components/Medecin/delete_med.vue'
import axios from 'axios'
import Dashboard from '@/components/Dashboard.vue'
export default {
    name:'Medecin',
    data(){
        return{
            medecin:[],
            medecins:'',
            dialog:false,
            modale:false
        }
    },
    components:{
        Dashboard,
        Modal,
        ModaleDelete
    },
    methods:{
        edit_medecin(id){
            this.dialog=true
            this.modifier=true
            this.$store.state.medecins=id
        },
        getMedecin(){
            axios
            .get('http://127.0.0.1:8000/api/medecin')
            .then(res=>{
                this.$store.state.medecin=res.data
                this.medecin=res.data
            })
            .catch(error=>{
                console.log(error.response.data.message)
            })
        },
        OpenModal(){
            this.dialog=true
            this.modifier=false
        },
        close(){
            this.dialog=false
            this.modale=false
        },
        ConfirmDelete(item){
            this.modale=true
            this.$store.state.medecin=item
        }
    },
    mounted(){
        this.getMedecin()
    }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400&family=Roboto:wght@100;300&display=swap');
*{
    padding:0;
    margin:0;
    box-sizing:border-box;
    font-family: 'Poppins',sans-serif;
}
.main {
    position: absolute;
    top: 60px;
    width: calc(100% - 260px);
    min-height: calc(100vh - 60px);
    left: 260px;
    background: #f5f5f5;
}
.label-top{
    margin-top:1.5rem;
    margin-left:2rem;
    border-radius:5px;
    background:#416991;
    width:1020px;
    padding:1rem 1rem;
}
.label-top h3{
    color:#fff;
    font-weight:normal;
}
.top_row{
    display:flex;
    align-items:center;
    justify-content:space-between;
    width:1020px;
    margin:1.2rem 0 1.2rem 2rem;
}
.search input{
    height:35px;
    width:230px;
    border:1px solid #416991;
    border-radius:3px;
    padding:0 1rem;
    font-size:1rem;
    outline:none;
    color:#416991;
}
.btn button{
    padding:0.5rem 1.5rem;
    font-size:1rem;
    background:#416991;
    color:#fff;
    border:none;
    border-radius:5px;
    cursor:pointer;
}
.table{
    width:1020px;
    margin-left:2rem;
}
table{
    width:1020px;
}
table,td{
    border:none;
    border-bottom:2px solid #7e7c7c;
    border-collapse: collapse;
}
table thead{
    background:#343a40;
    height:50px;
}
table thead th{
    padding:1rem 1rem;
    color:#fff;
    font-weight:normal;
    font-size:1rem;
}
table tbody td{
    padding:0.5rem 1rem;
    height:35px;
    color:#7e7c7c;
    text-align:center;
}
.modify{
    color:green;
    cursor: pointer;
}
.delete{
    color:red;
    cursor: pointer;
}
</style>
