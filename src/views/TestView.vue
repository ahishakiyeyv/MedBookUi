<template>
<!-- <Menu/> -->
<div v-if="$store.state.user">
  <!-- <MenuLog></MenuLog> -->
</div>
<div v-else>
  <!-- <Menu></Menu> -->
</div>
<section>
    <div class="top_row">
        <div class="search">
            <input type="search" class="search-input" placeholder="Rechercher..." v-model="inputSearch">
        </div>
        <div class="addBtn">
            <button>Ajouter</button>
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
                 </tr>
                </thead>
            <tbody v-if="test.length > 0">
                <tr v-for="tes in test" :key="tes.id">
                    <td>{{tes.id}}</td>
                    <td>{{tes.nom_test}}</td>
                    <td>{{tes.prix_test}} Fbu</td>
                    <td>{{tes.description}}</td>
                    </tr>
               
            </tbody>
            <tbody v-else>
                <tr>
                    <td colspan="4">Aucun Resultat trouvé...</td>
                </tr>
            </tbody>
        </table>
        <div class="pagination">
                <button @click="prevPage" :disabled="currentPages===1" class="precedent">Precedent</button>     
                <button @click="nextPage" :disabled="currentPages===totalPages" class="suivant">Suivant</button>
            </div>
    </div>
</section>
</template>
<script>
import axios from 'axios'
import Menu from '@/components/Menu/Menu.vue'
import MenuLog from '@/components/Menu/MenuLog.vue'
export default {
   name:'TestView',
   data(){
        return{
            test:[],
            inputSearch:'',
            currentPages:1,
            totalPages:1,
            pageSize:5
        }
   },
   components:{
    Menu,
    MenuLog
   },
   methods:{
    getTest(){
        axios
            .get(`http://127.0.0.1:8000/api/test?page=${this.currentPages}&size=${this.pageSize}`)
            .then((res)=>{
                // this.$store.state.test=res.data
                this.test=res.data.data
                this.totalPages=res.data
            })
            .catch((error)=>{
                console.log(error)
            })
    },
     prevPage(){
            if(this.currentPages > 1){
                this.currentPages--;
                this.getTest();
            }
        },
        nextPage(){
            this.currentPages++;
            this.getTest()
        }
   },
   mounted(){
    this.getTest()
   },
   computed:{
    test(){
        return this.test.filter(tes=>{
            return(tes.nom_test.toLowerCase().indexOf(this.inputSearch.toLowerCase()) > -1 ||
            tes.prix_test.toLowerCase().indexOf(this.inputSearch.toLowerCase()) > -1
            )
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
     box-sizing: border-box;
     font-family: 'Poppins', sans-serif;
}
section{
    margin-top:50px;
}
.top_row{
    display:flex;
    align-items:center;
    justify-content:space-between;
    margin-left:auto;
    margin-right:auto;
    width:1020px;
}
.search .search-input{
    height:2.5rem;
    width:15rem;
    border:2px solid #416991;
    border-radius:5px;
    outline:none;
    color:#416991;
    font-size:1rem;
    padding:10px;
}
.addBtn button{
    width:10rem;
    height:2.5rem;
    font-size:1rem;
    font-weight:bold;
    color:#fff;
    letter-spacing: 1px;
    border-radius:5px;
    border:none;
    background:#713acc;
    padding:.5rem 0;
    display:none;
    cursor:pointer;
}
::placeholder{
    color:#416991;
    letter-spacing: 1px;
}
.table{
    position:relative;
    top:30px;
    left:160px;
    width:1020px;
}

table{
    width:1020px;
}
table,th,td{
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
.pagination{
    display:flex;
    justify-content: space-between;
    margin-top:10px;
    margin-bottom:50px;
}
.precedent{
    padding:0.2rem 1rem;
    font-size:1rem;
    color:#fff;
    background:#416991;
    border:none;
    border-radius:5px;
    cursor:pointer;
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
    cursor:pointer;
}



/* For screens smaller than 1024px */
@media (max-width: 768px) {
  .top_row {
    flex-direction: row; /* Stack items vertically on smaller screens */
    align-items: center; /* Center align items */
    width: 100%; /* Make the top row occupy full width */
    padding: 0 10px; /* Adjust padding for smaller screens */
  }
  .search .search-input {
    width: 100%; /* Make the search input occupy full width */
  }
  .addBtn button {
    display: block; /* Show the add button */
    margin-top: 10px; 
    width: 100%; /* Make the add button occupy full width */
    /* padding:1rem; */
  }
  .table {
    width: 100%; /* Make the table container occupy full width */
    left: 0; /* Reset left position */
  }
  table,
  th,
  td {
    width: 100%; /* Make the table occupy full width */
  }
}

</style>