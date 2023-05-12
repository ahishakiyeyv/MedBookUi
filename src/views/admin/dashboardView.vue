<template>
<Dashboard/>
    <div class="main">
       <div class="cards">
                <div class="card">
                    <div class="card-content">
                        <div class="number">{{this.$store.state.patient_count}}</div>
                        <div class="card-name">Patient</div>
                    </div>
                    <div class="icon-box">
                        <i class="fa fa-graduation-cap" aria-hidden="true"></i>
                    </div>
                </div>
                <div class="card">
                    <div class="card-content">
                        <div class="number">{{this.$store.state.rendezvous_count}}</div>
                        <div class="card-name">Rendez Vous (Aujourd'hui)</div>
                    </div>
                    <div class="icon-box">
                        <i class="fa fa-television" aria-hidden="true"></i>
                    </div>
                </div>
                <div class="card">
                    <div class="card-content">
                        <div class="number">68</div>
                        <div class="card-name">Employees</div>
                    </div>
                    <div class="icon-box">
                        <i class="fa fa-users" aria-hidden="true"></i>
                    </div>
                </div>
                <div class="card">
                    <div class="card-content">
                        <div class="number">$4500</div>
                        <div class="card-name">Earnings</div>
                    </div>
                    <div class="icon-box">
                        <i class="fa fa-usd" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
 
    </div>
</template>
<script>
import Dashboard from '@/components/Dashboard.vue'
import axios from 'axios'
export default {
    name:'dashboardView',
    data(){
        return{
            allData:[]
        }
    },
    components:{
        Dashboard
    },
    methods:{
        PatientCount(){
            axios
            .get('http://127.0.0.1:8000/api/countUser')
            .then(res=>{
                this.$store.state.patient_count=res.data
                this.allData=res.data
            })
        },
        RendezvousCount(){
            axios
            .get('http://127.0.0.1:8000/api/allcount')
            .then(res=>{
                this.$store.state.rendezvous_count=res.data
                this.allData=res.data
            })
        }
    },
    mounted(){
        this.PatientCount();
        this.RendezvousCount();
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
}

.cards {
    width: 100%;
    padding: 35px 20px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
}

.cards .card {
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 7px 25px rgba(0, 0, 0, 0.08);
}

.number {
    font-size: 35px;
    font-weight: 500;
    color: #416991;
}

.card-name {
    color: #7e7c7c;
    font-weight: 600;
}

.icon-box i {
    font-size: 45px;
    color: #416991;
}

</style>