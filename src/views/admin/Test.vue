<template>
<Dashboard/>
    <div class="main">
        <div class="label-top">
            <h3>Liste des Tests</h3>
        </div>
        <div class="top_row">
            <div class="search">
                <input type="search" placeholder="Rechercher...">
            </div>
            <Modal v-bind:dialog="dialog" v-bind:toggleModale="toggleModale"></Modal>
            <ModaleDelete v-bind:modale="modale" @getTest='getTest' @close="close"></ModaleDelete>
            <div class="btn">
                <button v-on:click="toggleModale">Ajouter</button>
            </div>
        </div>
        <div class="table">
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nom Test</th>
                        <th>Prix</th>
                        <th>Description</th>
                        <th colspan="2">Action</th>
                    </tr>
                </thead>
                <tbody v-if="test.length > 0">
                    <tr v-for="te in test" :key="te.id">
                        <td>{{te.id}}</td>
                        <td>{{te.nom_test}}</td>
                        <td>{{te.prix_test}}</td>
                        <td>{{te.description}}</td>
                        <td><a href="#" class="modify"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></a></td>
                        <td><a @click='confirmDelete(te)' class="delete"><i class="fa fa-trash-o" aria-hidden="true"></i></a></td>
                    </tr>
                </tbody>
                <tbody v-else>
                    <tr>
                        <td colspan="6">Aucun Resultat trouvé!</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
import Dashboard from '@/components/Dashboard.vue'
import Modal from '@/components/Test/modal_form.vue'
import ModaleDelete from '@/components/Test/delete_test.vue'
import axios from 'axios'
export default {
    name:'Test',
    data(){
        return{
            dialog:false,
            modale:false,
            test:[]
        }
    },
    components:{
        Dashboard,
        Modal,
        ModaleDelete
    },
    methods:{
        confirmDelete(item){
            this.modale=true
            this.$store.state.test=item
        },
        toggleModale:function(){
            this.dialog=!this.dialog
        },
        getTest(){
            axios
            .get('http://127.0.0.1:8000/api/test')
            .then((res)=>{
                this.$store.state.test=res.data
                this.test=res.data
            })
            .catch((error)=>{
                console.log(error.response.data.message)
            })

        },
        close(){
            this.modale=false
        }
    },
    mounted(){
        this.getTest()
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
    z-index:1000;
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
table td .modify i{
    color:#63d471;
    cursor:pointer;
}
table td .delete i{
    color:red;
    cursor: pointer;
}
</style>