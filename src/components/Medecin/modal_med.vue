<template>
    <div class="bloc-modale" v-if="dialog">
        <div class="overlay" @click="close"></div>
        <div class="modale">
            <div class="title">
                <h3>Ajouter Medecin</h3>
            </div>
            <div class="btn-close" @click="close">X</div>
            <div class="form">
                <label>Nom</label>
                <input type="text" placeholder="Nom...">
                <label>Prenom</label>
                <input type="text" placeholder="Prenom...">
                <label>Email</label>
                <input type="text" placeholder="Email...">
                <label>Telephone</label>
                <input type="text" placeholder="Telephone...">
                <label>Sexe</label>
                <select>
                    <option value="">--Sexe--</option>
                    <option value="homme">Homme</option>
                    <option value="femme">Femme</option>
                </select>
                <label>Specialite</label>
                <select>
                    <option value="">--Specialite--</option>
                    <option value="Cardiologue">Cardiologie</option>
                    <option value="pediatre">Pediatrie</option>
                    <option value="gynecologue">Gynecologie</option>
                </select>
                <label>Disponibilite</label>
                <input type="text" placeholder="Disponibilite...">
                <button>Enregistrer</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
   name:'modal_med',
   props:['dialog'],
   data(){
    return{

    }
   },
   methods:{
    close(){
        this.$emit('close')
    }
   }
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
    align-items:center;
    justify-content:center;
    z-index:1000;
}
.overlay{
    background:rgba(0,0,0,0.5);
    backdrop-filter: blur(2px);
    position:fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
}
.modale{
    background:#f1f1f1;
    color:#333;
    position:fixed;
    top:10%;
    padding:20px;
    border-radius:5px;
    width:350px;
}
.title h3{
    color:#7e7c7c;
    position:absolute;
    left:20px;
    top:10px;
    font-weight:normal;
}
.btn-close{
    position:absolute;
    top:10px;
    right:10px;
    padding:0.2rem 1rem;
    background:red;
    border-radius:5px;
    color:#fff;
    cursor:pointer;
}
.form{
    margin-top:30px;
    display:flex;
    flex-direction:column;
}
.form label{
    color:#416991;
}
.form input{
    height:2rem;
    font-size:1rem;
    padding:0.2rem 0.3rem;
    outline:none;
}
.form select{
    height:2rem;
    font-size:1rem;
    padding:0.2rem 0.3rem;
}
.form button{
    margin-top:10px;
    padding:0.5rem 1rem;
    background:#416991;
    border:none;
    border-radius:5px;
    color:#f1f1f1;
    font-size:1rem;
    cursor: pointer;
}
</style>