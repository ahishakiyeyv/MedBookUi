<template>
    <footer>
        <div class="box1">
            <img src="@/assets/images/logo.png" alt="..." class="icon-logo">
            <p class="txt-para">Polyclinique Saint Joseph vous souhaitent le Bienvenu  </p>
        </div>
        <div class="box2">
            <h2 class="footer-title">Information</h2>
            <ul>
                <li class="lii">Se connecter</li>
                <li class="lii">Joindre la communauté</li>
                <li class="lii">Reference</li>
                <li class="lii">NewsLetter</li>
            </ul>
        </div>
        <div class="box3">
            <h2 class="footer-title">Contactez-nous</h2>
            <ul>
                <li class="lii"> +257 76 986 734</li>
                <li class="lii">info@psj.org</li>
                <li class="lii">Bujumbura Mairie, Kigobe Sud</li>
                <li class="lii">Avenue des Etats-Unis</li>
            </ul>
        </div>
    </footer>
</template>
<script>

</script>
<style scoped>
footer{
    background:#343a40;
    display:flex;
    align-items:center;
    justify-content:center;
    padding:1rem 2rem;
}
.footer-title{
    text-transform: uppercase;
    color:#fff;
    font-size:1.8rem;
    font-weight:500;
}
.txt-para{
    width:300px;
    text-align: justify;
    color:#7e7c7c;
}
.box1,.box2,.box3{
    margin:0rem 3.3rem;
}
ul .lii{
    list-style-type: none;
    color:#7e7c7c;
}
.icon-logo{
    height:100px;
    width:100px;
    display:block;
    margin-left:auto;
    margin-right:auto;
}


/* For screens smaller than 768px (typical mobile devices) */
@media (max-width: 768px) {
  footer {
    flex-direction: column; /* Stack items vertically on smaller screens */
    padding: 1rem; /* Adjust padding for smaller screens */
    text-align: center; /* Center align text */
  }
  .box1, .box2, .box3 {
    margin: 1rem 0; /* Adjust margin for better spacing */
  }
  .txt-para {
    width: auto; /* Remove fixed width */
    margin: 0 auto; /* Center align text */
  }
  .icon-logo {
    height: 80px; /* Decrease logo height for smaller screens */
    width: 80px; /* Decrease logo width for smaller screens */
  }
  .footer-title {
    font-size: 1.5rem; /* Decrease font size for better readability */
    margin-top: 1rem; /* Add space between titles and content */
  }
}

</style>
