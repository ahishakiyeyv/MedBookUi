<template>
    <Dashboard></Dashboard>
    <div class="main">
        <div class="label-top">
            <h3>Liste des Utilisateurs</h3>
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
                        <th>Matricule</th>
                        <th>Nom</th>
                        <th>Email</th>
                        <th>Telephone</th>
                        <th>Specialite</th>
                        
                    </tr>
                </thead>
                <tbody v-if="infirmiers.length > 0">
                    <tr v-for="inf in infirmiers" :key="inf.id">
                        <td>{{inf.id}}</td>
                        <td>{{inf.matricule}}</td>
                        <td>{{inf.nom_inf}}</td>
                        <td>{{inf.email}}</td>
                        <td>{{inf.telephone}}</td>
                        <td>{{inf.specialite}}</td>
                        
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
import axios from 'axios'
import Dashboard from '@/components/Dashboard.vue'
export default {
    name:'Utilisateur',
    data(){
        return{
            infirmiers:[]
        }
    },
    components:{
        Dashboard
    },
    methods:{
        getUtilisateur(){
            axios
            .get('http://127.0.0.1:8000/api/infirmier')
            .then(res=>{
                this.$store.state.infirmiers=res.data
                this.infirmiers=res.data
            })
            .catch(error=>{
                console.log(error.response.data.message)
            })
        }
    },
    mounted(){
        this.getUtilisateur()
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
</style>