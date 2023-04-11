<template>
    <div class="bloc_modale" v-if="dialog">

        <div class="overlay" v-on:click="toggleModale"></div>

        <div class="modale">
            <div class="head">
            <div class="title">Prendre Rendez-vous</div>
            <div class="btn-modale" v-on:click="toggleModale">X</div>
            </div>
            <form>
            <div class="container">
                <div class="content1">
                    <input type="text" placeholder="Numero" readonly>
                    <input type="text" placeholder="Nom...">
                    <input type="text" placeholder="Prenom...">
                    <input type="text" placeholder="Age...">
                    
                </div>
                <div class="content2">
                    <select>
                        <option value="">--Sexe--</option>
                        <option value="homme">Homme</option>
                        <option value="femme">Femme</option>
                    </select>
                    <input type="text" placeholder="Adresse...">
                    <input type="Date" placeholder="Date...">
                    <select>
                        <option value="">--Service--</option>
                        <option value="cardiologie">Cardiologie</option>
                        <option value="pediatrie">Pediatrie</option>
                        <option value="gynecologie">Gynecologie</option>
                        <option value="Minterne">Medecine interne</option>
                        <option value="Mgenerale">Medecine Generale</option>
                        <option value="laboratoire">Laboratoire</option>
                        <option value="pharamacie">Pharmacie</option>
                    </select>
                </div>
                
            </div>
            <button class="btn">Envoyer</button>
            </form>

        </div>
    </div>
</template>
<script>
export default {
    name:'modal_app',
    props:['dialog','toggleModale']
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
    justify-content:center;
    align-items:center;
}
.overlay{
    background:rgba(0,0,0,0.5);
    position:fixed;
    top:0;
    right:0;
    left:0;
    bottom:0;

}
.modale{
    background:#f1f1f1;
    color:#333;
    position:fixed;
    left:15%;
    top:10%;
    z-index:1000;
    width:900px;
    height:500px;
    border-radius:5px;
}
.title{
    position:absolute;
    left:10px;
    top:10px;
    color:#7e7c7c;
    font-size:1.5rem;
}
.btn-modale{
    position:absolute;
    right:10px;
    top:10px;
    padding:5px 10px;
    color:#fff;
    border-radius:5px;
    background:red;
    cursor: pointer;
}
.container{
    display:flex;
    align-items: center;
    justify-content: space-around;
    margin-top:80px;
}
.content1{
    display:flex;
    flex-direction: column;
}
.content1 input{
    width:300px;
    margin:15px;
    height:40px;
    font-size:1rem;
    outline:none;
    border:none;
    border-bottom:2px solid #731acc;
    background:transparent; 
}
.content2{
    display:flex;
    flex-direction:column;
}
.content2 input{
    width:300px;
    margin:15px;
    height:40px;
    font-size:1rem;
    outline:none;
    border:none;
    border-bottom:2px solid #731acc;
    background:transparent; 
}
.content2 select{
    width:300px;
    margin:15px;
    height:40px;
    font-size:1rem;
    outline:none;
    border:none;
    border-bottom:2px solid #731acc;
    background:transparent;
}
::placeholder{
    color:#731acc;
    letter-spacing: 1px;
}
.btn{
    padding:1rem 4rem;
    background:#731acc;
    color:#fff;
    font-weight:normal;
    letter-spacing:1px;
    font-size:1.4rem;
    border-radius:10px;
    border:none;
    display:block;
    margin-left:auto;
    margin-right:auto;
    margin-top:20px;
    cursor: pointer;
}
</style>