<template>
    <div class="bloc-modale" v-if="actualiser">
        <div class="overlay" v-on:click="toggleModale"></div>
        <div class="modale">
            <div class="head">
                <div class="title"><h3>Actualiser status</h3></div>
                <div class="btn-close" v-on:click="toggleModale">X</div>
            </div>
            <div class="form">
                <form>
                    <label>Status:</label>
                    <select name="" v-model="form.status">
                                <option value="" selected>--Status--</option>
                                <option value="1">Accepte</option>
                                <option value="0">Refuser</option>
                                <option value="2">En Attente</option>
                            </select>
                    <label>Message:</label>
                 <textarea class="text" id="" cols="0" rows="0" placeholder="Message..." v-model="form.remarque" />
              <button class="btn-send" @click="saveAppointment()">Envoyer</button>
                </form>
            </div>
            
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name:'status',
    props:['actualiser','toggleModale'],
    data(){
        return{
            form:{
                status:'',
                remarque:''
            }
        }
    },
    methods:{
        saveAppointment() {
        const ID = this.$route.params.id;
        axios.put(`http://127.0.0.1:8000/api/update_message/${ID}`, this.form)
            .then(response => {
            this.appointment = response.data;
            window.location.reload()
            })
            .catch(error => {
            console.log(error);
            });
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
    top:20%;
    padding:20px;
    border-radius:5px;
    width:350px;
}
.head .title h3{
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
form{
    display:flex;
    flex-direction:column;
    margin-top:10%;
}
form label{
    font-size:1rem;
    color:#416991;
    font-weight:bold;
    margin-top:10px;
}
form select{
    height:30px;
    color:#416991;
    font-size:1rem;
    outline:none;
    border:1px solid #416991;
    border-radius:5px;
}
form .text{
    height:50px;
    outline:none;
    border:1px solid #416991;
    border-radius:5px;
    font-size:1rem;
    padding:5px 10px;
    color:#416991;
    font-family: 'poppins';
}
.btn-send{
    margin-top:10px;
    height:30px;
    background:#416991;
    color:#fff;
    border:none;
    border-radius:5px;
    font-size:1rem;
    cursor: pointer;
}
</style>