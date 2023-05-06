<template>
<!-- <Menu/> -->
<div v-if="$store.state.user">
  <MenuLog></MenuLog>
</div>
<div v-else>
  <Menu></Menu>
</div>
<head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" integrity="sha512-5A8nwdMOWrSz20fDsjczgUidUBR8liPYU+WymTZP1lmY9G6Oc7HlZv156XqnsgNUzTyMefFTcsFH/tnJE/+xBg==" crossorigin="anonymous" referrerpolicy="no-referrer" />

</head>
<section class="container1">
  <div class="content1">
    <h1 class="title_principal">Trouvez le medecin et Prendre un Rendez-vous</h1>
    <p class="txt">Sélectionner un médecin préféré et un créneau horaire pour prendre rendez-vous</p>
   
    <!-- <Modal v-bind:dialog="dialog" v-bind:toggleModale="toggleModale"></Modal> -->
     <button class="btn1"><router-link to="/login" class="bttn">PRENDRE RENDEZ-VOUS</router-link></button>
  </div>
  <div class="content2">
    <img src="../assets/images/1.png" alt="..." class="img_1">
  </div>
</section>
<section class="container2">
  <div class="box">
    <h2 class="title1">Etape facile pour avoir une solution</h2>
    <div class="boxes">
      <div class="box1">
        <i class="fa fa-user-md" aria-hidden="true"></i>
        <h3 class="subtitle">Voir le Medecin</h3>
        <p class="txt1">Avant de prendre Rendez-vous, voir d'abord le medecin selon le service souhaitée.</p>
      </div>
      <div class="box1">
        <i class="fa fa-server" aria-hidden="true"></i>
        <h3 class="subtitle">Voir le service</h3>
        <p class="txt1">Voir les services que vous souhaitez pour plus de facilité dans votre recherche.</p>
      </div>
      <div class="box1">
        <i class="fa fa-calendar-plus-o" aria-hidden="true"></i>
        <h3 class="subtitle">Prendre Rendez-vous</h3>
        <p class="txt1">Prendre alors un Rendez-vous avec un Medecin souhaitée.</p>
      </div>
      <div class="box1">
        <i class="fa fa-lightbulb-o" aria-hidden="true"></i>
          <h3 class="subtitle">Avoir une Solution</h3>
          <p class="txt1">Enfin, nous allons vous aider à trouver des solutions pour votre santé.</p>
      </div>
    </div>
  </div>
  <h2 class="title2">A Propos</h2>
  <div class="contain">
    <div class="call">
    <img src="../assets/images/2.jpg" alt="..." class="img_call">
    <div class="para-box">
    <h1 class="ttle">Nous assurons toujours le meilleur traitement medical pour votre sante</h1>
    <ul class="ulee">
      <li class="li"><i class="fa fa-check-circle-o" aria-hidden="true"></i> Medecin specialiste</li>
      <li class="li"><i class="fa fa-check-circle-o" aria-hidden="true"></i> Inscription rapide et facile</li>
      <li class="li"><i class="fa fa-check-circle-o" aria-hidden="true"></i> Remise pour tout traitement medical</li>
    </ul>
    <button class="btn1"><router-link to="/login" class="bttn">PRENDRE RENDEZ-VOUS</router-link></button>
  </div>
  </div>
  </div>
  
  
</section>
<section class="container3">
  <h2 class="title2">Services</h2>
  <div class="grid-box">
    <div class="grid">
      <h2 class="title-service">Cardiologie</h2>
      <p class="txt-service">La cardiologie est la branche de la médecine qui se concentre sur l'étude, le diagnostic et le traitement des maladies du cœur et du système cardiovasculaire, tels que les maladies coronariennes, l'insuffisance cardiaque et les arythmies.</p>
    </div>
    <div class="grid">
      <h2 class="title-service">Pediatrie</h2>
      <p class="txt-service">La pédiatrie est une spécialité médicale qui se concentre sur la santé des nourrissons, des enfants et des adolescents. Elle traite les maladies et les troubles du développement, et promeut la santé et le bien-être des jeunes patients.</p>
    </div>
    <div class="grid">
      <h2 class="title-service">Gyneco-Obstretique</h2>
      <p class="txt-service">La gynécologie-obstétrique est une spécialité médicale qui s'occupe des problèmes liés à la santé reproductive féminine, notamment la grossesse, l'accouchement, les troubles menstruels, les infections gynécologiques et les cancers féminins.</p>
    </div>
    <div class="grid">
      <h2 class="title-service">Medecine Interne</h2>
      <p class="txt-service">La médecine interne est une spécialité médicale qui se concentre sur la prévention, le diagnostic et le traitement des maladies complexes et systémiques chez les adultes.</p>
    </div>
    <div class="grid">
      <h2 class="title-service">Medecine Generale</h2>
      <p class="txt-service">La médecine générale est une spécialité médicale centrée sur les soins primaires de santé, qui prend en charge les patients de tous âges et traite une large gamme de maladies, en utilisant une approche holistique pour promouvoir la santé à long terme.</p>
    </div>
    <div class="grid">
      <h2 class="title-service">Urgence</h2>
      <p class="txt-service">Une urgence médicale est une situation où une personne nécessite des soins médicaux immédiats pour préserver sa vie ou sa santé. Cela peut inclure des accidents, des crises cardiaques, des AVC, etc...</p>
    </div>
    <div class="grid">
      <h2 class="title-service">Laboratoire</h2>
      <p class="txt-service">Un laboratoire médical est un endroit où des professionnels de la santé effectuent des analyses et des tests sur des échantillons biologiques tels que le sang, l'urine, les selles, les tissus et autres fluides corporels pour aider au diagnostic et au traitement.</p>
    </div>
    <div class="grid">
      <h2 class="title-service">Pharmacie</h2>
      <p class="txt-service">La pharmacie est une discipline de la santé qui se concentre sur la préparation, la dispensation et l'utilisation des médicaments pour traiter les maladies et les troubles de santé.</p>
    </div>
  </div>
</section>
<section class="container4">
  <h2 class="title2">Nos Docteurs</h2>
  <div class="grid-container">
    <div class="sub-contain">
      <img src="../assets/images/2.jpg" alt="..." class="img-doc">
      <h2 class="name">Dr Xavier</h2>
      <h3 class="spec">Cardiologue</h3>
      <p class="desc">Tous les jours a partir de 15h</p>
    </div>
    <div class="sub-contain">
      <img src="../assets/images/2.jpg" alt="..." class="img-doc">
      <h2 class="name">Dr Hancock</h2>
      <h3 class="spec">Pediatre</h3>
      <p class="desc">Tous les jours a partir de 15h</p>
        
      </div>
    <div class="sub-contain">
      <img src="../assets/images/2.jpg" alt="..." class="img-doc">
      <h2 class="name">Dr Melissa</h2>
      <h3 class="spec">Gynecologue</h3>
      <p class="desc">Tous les jours a partir de 15h</p>
    </div>
    <div class="sub-contain">
      <img src="../assets/images/2.jpg" alt="..." class="img-doc">
      <h2 class="name">Dr Edward</h2>
      <h3 class="spec">Medecin Generaliste</h3>
      <p class="desc">Tous les jours a partir de 15h</p>
    </div>
    <div class="sub-contain">
      <img src="../assets/images/2.jpg" alt="..." class="img-doc">
      <h2 class="name">Dr Jocelyne</h2>
      <h3 class="spec">Infirmiere</h3>
      <p class="desc">Tous les jours a partir de 15h</p>
    </div>
    <div class="sub-contain">
      <img src="../assets/images/2.jpg" alt="..." class="img-doc">
      <h2 class="name">Dr Jacques</h2>
      <h3 class="spec">Medecin</h3>
      <p class="desc">Tous les jours a partir de 15h</p>
    </div>
  </div>
</section>
<section class="container5">
  <div class="news-box">
    <div class="txt-news">
      <h1 class="title0">Des services de santé ou des conseils pour une vie saine, vous pouvez trouver ici</h1>
      <p class="para">Au cours du siecle, un chef de file dans les soins aux patients et la specialite de la medecine, de la chirurgie, de la rechercher, de l'education medicale et du bien etre.</p>
    </div>
    <div class="btn-box">
      <button class="btn-connect">Rester Connectez</button>
    </div>
  </div>
</section>
<Footer/>
</template>

<script>
// @ is an alias to /src
  import Menu from '@/components/Menu/Menu.vue'
  import MenuLog from '@/components/Menu/MenuLog.vue'
 import Footer from '@/components/footer/footer.vue'

export default {
  name: 'HomeView',
  data(){
    return{
      dialog:false,
    }
  },
  components: {
    Menu,
    MenuLog,
   Footer,
  },
  methods:{
    toggleModale:function(){
      this.dialog = !this.dialog
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

.container1{
  display:flex;
  align-items:center;
  justify-content:center;
  flex-wrap:wrap;
  padding:6rem 2rem;
  width:100%;
  margin-right:auto;
  margin-left:auto;
}
.content1{
  max-width:50%;
}
.title_principal{
  font-size:3rem;
}
.txt{
  font-size:1rem;
  color:#7e7c7c;
  margin:0.5rem 0rem;
}
.btn1{
  padding:0.5rem 4.5rem;
  margin:2rem 0rem;
  background:#416991;
  border:none;
  border-radius:10px;
  font-weight:700;
  cursor:pointer;
}
.btn1 .bttn{
  text-decoration:none;
  color:#fff;
}
/* ==============================section 2====================== */
.container2{  
  padding:4rem 1rem;
  width:100%;
}
.title1{
  margin:1rem 4rem;
  padding:1rem 0;
  color:#fff;

}
.box{
  width:80%;
  display:block;
  margin-left:auto;
  margin-right:auto;
  background:#416991;
  border-radius:10px;
}
.boxes{
  display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: stretch;
    overflow: auto;
    flex-direction: row;
}
.boxes .box1{
  width: 200px;
    height: 200px;
    margin: 0px 20px;
    margin-bottom:30px;
    background:#d9d9d9;
    border-radius:10px;
}
.box1 i{
  font-size:80px;
  margin:10px 0px 10px 60px;
  color:#333;
}
.box1 .subtitle{
  font-size:1rem;
  color:#416991;
  text-align:center;
  font-weight:600;
}
.box1 .txt1{
  color:#7e7c7c;
  font-size:.8rem;
  text-align: justify;
  padding:0rem .5rem;
}
/* ==================================call to action================================ */
.title2{
  text-transform: uppercase;
  margin-top:50px;
  margin-left:120px;

}
.contain{
  background:#d9d9d9;
    width:80%;
    display: block;
    margin-left:auto;
    margin-right:auto;
}
.call{
  display:flex;
  justify-content:space-around;
  align-items: center;
  align-content: stretch;
  flex-direction:row;
  overflow: auto;
  margin-top:30px;
  padding:2rem 0;

}
.img_call{
  height:400px;
  width:500px;
}
.ttle{
  max-width:500px;
  font-size:2.3rem;
}
.li{
  list-style-type: none;
  line-height:40px;
  font-size:1.1rem;
  color:#416991;
}
.li i{
  color:#416991;
}

/* =========================================service==================================== */
.container3{
  width:100%;
}
.grid-box{
  display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(3, 1fr);
grid-column-gap: 5px;
grid-row-gap: 15px;
width:80%;
margin-left:auto;
margin-right:auto;
margin-top:50px;
margin-bottom:50px;
}
.grid{
  height:250px;
  width:300px;
  background:#416991;
  border-radius:10px;
  padding:1rem;
}
.title-service{
  font-size:1.2rem;
  color:#fff;
}
.txt-service{
  font-size:0.8rem;
  color:#d9d9d9;
  padding-top:2rem;
  text-align: justify;
}
/* =========================================doctors=============================== */
.container4{
  width:100%;
}
.grid-container{
  display:grid;
  grid-template-columns: repeat(3,1fr);
  grid-template-rows: repeat(2,1fr);
  row-gap: 15px;
  column-gap: 20px;
  width:80%;
  margin:50px auto 50px auto;
}
.sub-contain{
  height:300px;
  width:300px;
  border-radius:10px;
box-shadow: 0px 0px 30px -20px #999999;
}
.img-doc{
  height:200px;
  width:300px;
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  }
.name{
color:#416991;
text-align: center;
font-size:1.2rem;
}
.spec{
  color:#7e7c7c;
  text-align: center;
  text-transform: uppercase;
  font-size:1rem;
}
.desc{
  color:#000;
  font-size:0.8rem;
  text-align: center;
  font-weight:600;
}
/* =====================================newsletter============================== */
.container5{
  width:100%;
}
.news-box{
  display:flex;
  align-items: center;
  justify-content: space-around;
  background:#416991;
  width:80%;
  margin:50px auto 50px auto;
  padding:2rem 1rem;
  border-radius:10px;
}
.txt-news{
width:50%;
}
.title0{
  font-size:2rem;
  color:#fff;
}
.para{
  color:#d9d9d9;
  font-size:0.8rem;
}
.btn-box{
 width:35%;
  
}
.btn-connect{
padding:0.5rem 4.5rem;
  margin:2rem 0rem;
  background:#d9d9d9;
  color:#416991;
  border:1px solid gray;
  border-radius:10px;
  font-weight:700;
  font-size:1.2rem;
  box-shadow: 0px 0px 8px 0px #FFFFFF;
}
</style>