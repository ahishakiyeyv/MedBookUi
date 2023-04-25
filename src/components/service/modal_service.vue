<template>
    <div class="bloc-modale" v-if="dialog">
        <!-- <div class="overlay" v-on:click="toggleModale"></div> -->
        <div class="overlay" @click="close"></div>
        <div class="modale">
            <div class="head">
                <div class="title"><h3>{{ title }}</h3></div>
                <!-- <div class="btn-close" v-on:click="toggleModale">X</div> -->
                <div class="btn-close" @click="close">X</div>
            </div>
            <div class="form">
                <form>
                    <label>Nom du Service:</label>
                    <input type="text" v-model="form.nom_service"  placeholder="Nom Service..." required>
                    <button @click="saveService()">{{ btn }}</button>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
   name:'modal_service',
   props:['dialog','edit_service'],
   data(){
    return{
         title:'Ajouter un Service',
         btn:'Enregistrer',
        form:{
            nom_service:''
        },
        service:{}
    }
   },
   methods:{
    // getServices(){
    //     const serviceID = this.$route.params.id
    //     axios
    //     .get(`http://127.0.0.1:8000/api/services/${serviceID}`)
    //     .then(response=>{
    //         this.service=response.data
    //     })
    //     .catch(error=>{
    //         console.log(JSON.stringify(error))
    //     })
    // },
    getService(){
        this.$emit('getServices',this.form.nom_service)
    },
    close(){
        this.$emit('close')
    },
    saveService(){
        if(this.edit_service){
            axios
            .put('http://127.0.0.1:8000/api/update_service/'+this.$store.state.services.id,this.form)

            .then((res)=>{
                console.log('Input:',this.form.nom_service)
                this.getService()
                this.close()
                window.location.reload()
            })
        }else{
        axios
        .post('http://127.0.0.1:8000/api/create_service',this.form)
        .then(res=>{
            this.close()
            console.log(res.data)
            this.form={
                nom_service:''
            }
            window.location.reload()
        })
    }
    }
   },
   mounted(){
    this.getService()
    if(this.edit_service){
        this.form.nom_service=this.$store.state.services.nom_service
        this.btn='Modifier'
        this.title='Modifier Service'
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
    margin-top:15%;
}
form label{
    font-size:1rem;
    color:#731acc;
    font-weight:bold;
}
form input{
    height:35px;
    width:300px;
    margin-bottom:10px;
    border:1px solid #731acc;
    color:#731acc;
    border-radius:5px;
    outline:none;
    padding:1rem 0.5rem;
    font-size:1rem;
}
form button{
    height:35px;
    width:300px;
    border-radius:5px;
    border:none;
    background:#731acc;
    color:#fff;
    font-size:1rem;
    cursor:pointer;
}
</style>