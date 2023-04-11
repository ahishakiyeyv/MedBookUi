<template>
    <div class="bloc-modale" v-if="details">
        <div class="overlay" v-on:click="toggleModaleDetails"></div>

        <div class="modale">
            <div class="head">
                <div class="title">Details Rendez-Vous</div>
            <div class="btn-close" v-on:click="toggleModaleDetails">X</div>
            </div>
            <div class="body-container">
                <div class="body1">
                    <h2>Numero: <span>PSJ-01-12</span></h2>
                    <h2>Nom: <span>Nahimana</span></h2>
                    <h2>Prenom: <span>Doe</span></h2>
                    <h2>Age: <span>1994</span></h2>
                </div>
                <div class="body2">
                    <h2>Adresse: <span>Gihosha, Bujumbura Mairie</span></h2>
                    <h2>Date: <span>12/04/2023</span></h2>
                    <h2>Service: <span>Cardiologie</span></h2>
                    <h2>Status: <span>Accepte</span></h2>
                </div>
            </div>
            <h2 class="h2">Remarque</h2>
            <p class="para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis commodi ab eaque accusantium ut dolores dolorum suscipit. </p>
        </div>
    </div>
</template>
<script>
export default {
    name:'app_details',
    props:['details','toggleModaleDetails']
}
</script>
<style scoped>
*{
    margin:0;
    padding:0;
    box-sizing: border-box;
}
.bloc-modale{
    position:fixed;
    right:0;
    top:0;
    left:0;
    bottom:0;
    display:flex;
    align-items:center;
    justify-content:center;
}
.overlay{
    background:rgba(0,0,0,0.5);
    position:fixed;
    right:0;
    top:0;
    left:0;
    bottom:0;
}
.modale{
    background:#f1f1f1;
    color:#333;
    position:fixed;
    width:900px;
    height:530px;
    z-index: 1000;
    top:14%;
    border-radius:5px;
}
.title{
    position:absolute;
    left:10px;
    top:10px;
    color:#7e7c7c;
    font-size:1.2rem;
}
.btn-close{
    position:absolute;
    right:10px;
    top:10px;
    padding:5px 10px;
    color:#fff;
    border-radius:5px;
    background:red;
    cursor: pointer;
}
.body-container{
    display:flex;
    align-items: center;
    justify-content: space-around;
    margin-top:40px;
}
.body1 h2{
    margin-top:40px;
    font-size:1.5rem;
    color:#333;
}
h2 span{
    font-weight:400;
    letter-spacing: 1px;
    color:#333;
    margin-left:30px;
    font-size:1.3rem;
}
.body2 h2{
     margin-top:40px;
    font-size:1.5rem;
    color:#333;
}
.h2{
    margin-left:40px;
    margin-top:40px;
    color:#731acc;
}
.para{
    border:1px solid red;
    margin:5px 40px;
    padding:10px;
    color:#7e7c7c;
}
</style>