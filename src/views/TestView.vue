<template>
<Menu/>
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
            <tbody>
                <tr>
                    <td>1</td>
                    <td>UltraSound</td>
                    <td>12000</td>
                    <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere sed eius, debitis, sint fuga dolor,</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>UltraSound</td>
                    <td>12000090</td>
                    <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere sed eius, debitis, sint fuga dolor,</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>UltraSound</td>
                    <td>12000</td>
                    <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere sed eius, debitis, sint fuga dolor,</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>UltraSound</td>
                    <td>12000</td>
                    <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere sed eius, debitis, sint fuga dolor,</td>
                </tr>
            </tbody>
        </table>
    </div>
</section>
</template>
<script>
import Menu from '@/components/Menu/Menu.vue'
export default {
   name:'TestView',
   components:{
    Menu
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
    left:220px;
    width:900px;
}

table{
    width:900px;
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
}


</style>