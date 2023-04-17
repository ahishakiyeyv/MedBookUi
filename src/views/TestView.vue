<template>
<!-- <Menu/> -->
<div v-if="$store.state.user">
  <MenuLog></MenuLog>
</div>
<div v-else>
  <Menu></Menu>
</div>
<section>
    <div class="top_row">
        <div class="search">
            <input type="search" class="search-input" placeholder="Search...">
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
                    <td>{{tes.prix_test}}</td>
                    <td>{{tes.description}}</td>
                    </tr>
               
            </tbody>
            <tbody v-else>
                <tr>
                    <td colspan="4">Aucun Resultat trouvé...</td>
                </tr>
            </tbody>
        </table>
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
            test:[]
        }
   },
   components:{
    Menu,
    MenuLog
   },
   methods:{
    getTest(){
        axios
        .get('http://127.0.0.1:8000/api/test')
        .then((res)=>{
            this.$store.state.test = res.data
            this.test=res.data
        })
        .catch((error)=>{
            console.log(error.response.data.message)
        })
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
    width:900px;
}
.search .search-input{
    height:2.5rem;
    width:15rem;
    border:2px solid #713acc;
    border-radius:5px;
    outline:none;
    color:#713acc;
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
    color:#713acc;
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
    border:2px solid #7e7c7c;
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