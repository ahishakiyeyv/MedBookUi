<template>
<Dashboard/>
    <div class="main">
        <div class="label-top">
            <h3>Liste des Patients</h3>
        </div>
        <div class="top_row">
            <div class="search">
                <input type="text" placeholder="Rechercher..." v-model="inputSearch">
            </div>
            <div class="btn">
                <button>Ajouter</button>
            </div>
        </div>
        <div class="table">
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nom</th>
                        <th>Prenom</th>
                        <th>Email</th>
                        <th>Telephone</th>
                        <th>Adresse</th>
                        
                    </tr>
                </thead>
                <tbody v-if="users.length > 0">
                    <tr v-for="use in users" :key="use.id">
                        <td>{{use.id}}</td>
                        <td>{{use.nom_patient}}</td>
                         <td>{{use.prenom_patient}}</td>
                        <td>{{use.email}}</td>
                        <td>{{use.telephone}}</td>
                        <td>{{use.adresse}}</td>
                    </tr>
                </tbody>
                <tbody v-else>
                    <tr>
                        <td colspan="6">Chargement...</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
import Dashboard from '@/components/Dashboard.vue'
import axios from 'axios'
export default {
    name:'Patient',
    data(){
        return{
            users:[],
            inputSearch:''
        }
    },
    components:{
        Dashboard
    },
    methods:{
        getPatient(){
            axios
            .get('http://127.0.0.1:8000/api/user')
            .then(res=>{
                this.$store.users=res.data
                this.users=res.data
            })
            .catch((error)=>{
                console.log(error.response.data.message)
            })
        }
    },
    mounted(){
        this.getPatient()
    },
    // computed:{
    //     users(){
    //         return this.$store.state.users.filter(use=>{
    //             return(use.nom_patient.toLowerCase().indexOf(this.inputSearch.toLowerCase()) > -1 ||
    //             use.prenom_patient.toLowerCase().indexOf(this.inputSearch.toLowerCase()) > -1
    //             )
    //         })
    //     }
    // }
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
    background:#731acc;
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
    border:1px solid #731acc;
    border-radius:3px;
    padding:0 1rem;
    font-size:1rem;
    outline:none;
    color:#731acc;
}
.btn button{
    padding:0.5rem 1.5rem;
    font-size:1rem;
    background:#731acc;
    color:#fff;
    border:none;
    border-radius:5px;
    cursor:pointer;
    display:none;
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
    background:#896cb8;
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
</style>