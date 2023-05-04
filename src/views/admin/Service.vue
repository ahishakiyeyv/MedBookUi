<template>
<Dashboard/>
    <div class="main">
        <div class="label-top">
            <h3>Liste des Services</h3>
        </div>
        <div class="top_row">
            <div class="search">
                <input type="text" placeholder="Rechercher..." v-model="inputSearch">
            </div>
            <!-- <Modal v-bind:dialog="dialog" v-bind:toggleModale="toggleModale" @close="close" @getService="getService" :edit_service="modifier"></Modal> -->
            <Modal v-bind:dialog="dialog"  @close="close" @getServices="getService" :edit_service="modifier" v-if="dialog"></Modal>
            <DeleteModal v-bind:modal="modal" @fermer="fermer" @getServices="getService"></DeleteModal>
            <div class="btn">
                <button @click="newModal">Ajouter</button>
            </div>
        </div>
        <div class="table">
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nom Service</th>
                        <th>Create at</th>
                        <th colspan="2">Action</th>
                    </tr>
                </thead>
                <tbody v-if="service.length > 0">
                    <tr v-for="ser in service" :key="ser.id">
                        <td>{{ser.id}}</td>
                        <td>{{ser.nom_service}}</td>
                        <td>{{ser.created_at}}</td>
                         <td><a @click="edit_service(ser)" class="modify" ><i class="fa fa-pencil-square-o" aria-hidden="true"></i></a></td>
                        <td><a @click="confirmDelete(ser)" class="delete"><i class="fa fa-trash-o" aria-hidden="true"></i></a></td>
                    </tr>  
                        
                </tbody>
                

                <tbody v-else>
                    <tr>
                        <td colspan="4">Chargement...</td>
                    </tr>
                </tbody>
            </table>
            <div class="pagination">
                <button @click="prevPage" :disabled="currentPages===1" class="precedent">Precedent</button>     
                <button @click="nextPage" :disabled="currentPages===totalPages" class="suivant">Suivant</button>
            </div>
            
        </div>
    </div>
</template>
<script>
import Dashboard from '@/components/Dashboard.vue'
import Modal from '@/components/service/modal_service.vue'
import DeleteModal from '@/components/service/delete_modal.vue'
import axios from 'axios'
export default {
    name:'Service',
    data(){
        
        return{
            dialog:false,
            modifier:false,
            modal:false,
            service:[],
            services:'',
            inputSearch:'',
            currentPages:1,
            totalPages:1,
            pageSize:5
        }
    },
   
    
    components:{
        Dashboard,
        Modal,
        DeleteModal
    },
    methods:{
        edit_service(id){
            this.dialog=true
            this.modifier=true
            this.$store.state.services=id
        },
        newModal(){
            this.dialog=true
            this.modifier=false
        },
        confirmDelete(item){
            this.modal=true
            this.$store.state.service=item
        },
        toggleModale:function(){
            this.dialog=!this.dialog
        },
        getService(){
            axios
            .get(`http://127.0.0.1:8000/api/service?page=${this.currentPages}&size=${this.pageSize}`)
            .then((res)=>{
                if(res.status===200){
                    // this.$store.state.service=res.data
                this.service=res.data.data
                this.totalPages=res.data
                }else{
                    console.error(`Request failed with status ${res.status}`);
                }
                
            })
            .catch((error)=>{
                console.log(error)
            })
        },
        prevPage(){
            if(this.currentPages > 1){
                this.currentPages--;
                this.getService();
            }
        },
        nextPage(){
            // if(this.currentPages < this.totalPages){
                // console.log(this.currentPages)
                this.currentPages++;
                this.getService();
            // }
        },
        close(){
            this.dialog=false
        },
        fermer(){
            this.modal=false
        },
       
    },
    mounted(){
        this.getService()
    },
    computed:{
        service(){
            return this.service.filter(ser=>{
                return(ser.nom_service.toLowerCase().indexOf(this.inputSearch.toLowerCase()) > -1)
            })
        }
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
table td .modify i{
    color:#63d471;
    cursor:pointer;
}
table td .delete i{
    color:red;
    cursor:pointer;
}
.pagination{
    display:flex;
    justify-content: space-between;
    margin-top:10px;
}
.precedent{
    padding:0.2rem 1rem;
    font-size:1rem;
    color:#fff;
    background:#416991;
    border:none;
    border-radius:5px;
}
.precedent:disabled{
    color:#7e7c7c;
    background:#5d6e80;
}
.suivant{
    padding:0.2rem 1rem;
    font-size:1rem;
    color:#fff;
    background:#416991;
    border:none;
    border-radius:5px;
}
</style>