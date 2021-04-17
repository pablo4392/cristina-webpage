// BUTTONS
const english = document.getElementById("englishButton");
const spanish = document.getElementById("spanishButton");

// MENU
const profile = document.getElementById("menuProfile");
const notices = document.getElementById("menuNotices");
const websites = document.getElementById("menuWebsites");

// MAIN
const main = document.getElementById("welcome");

//PROFILE
const profileTitle = document.getElementById("profileTitle");
const profileDescription = document.getElementById("profileDescription");

//NOTICES
const titleNotices = document.getElementById("titleNotices");

//WEBSITES
const websitesTitle = document.getElementById("websitesTitle");
const nearpod = document.getElementById("nearpodDescription");
const meet = document.getElementById("meetDescription");
const material = document.getElementById("materialDescription");


english.addEventListener("click", () => {
    // MENU
    profile.innerHTML = `<i class="fas fa-user menu-icon"></i>
                         <p class="menu-label" id="menuProfile">Profile</p>`;
    notices.innerHTML = `<i class="far fa-newspaper menu-icon"></i>
                         <p class="menu-label">Notices</p>`;
    websites.innerHTML = `<i class="fas fa-globe menu-icon"></i>
                          <p class="menu-label">Websites</p>`;
   
    // MAIN
    main.innerHTML = `<h1 class="principal-title">Welcome to your English class</h1>`;
    
    //PROFILE
    profileTitle.innerHTML = `<h2 class="profile-title"> Hi! I'm Mrs. Cristy </h2>`
    profileDescription.innerHTML = `<p class="paragraph"> I am english teacher of Secundaria Ignacio Zaragoza from Cuanala, Juan C. Bonilla. </p>
                                    <p class="paragraph"> I would like ivite you to join and learn many wonderful stories, awesome places, interesting things and more. </p>
                                    <p class="paragraph"> You can contact with me in my personal email or if you prefeer, you can send me a text by whatsapp. </p>`;
    
    //NOTICES
    titleNotices.innerHTML = `<h4 class="title-box-notices">Notices</h4>`;

    // WEBSITES
    websitesTitle.innerHTML = `<h2 class="title-box">Websites to support</h2>`
    nearpod.innerHTML = `<p>In this section you will find weekly activities that are equivalent to 40% of your average.</p>`;
    meet.innerHTML = `<p>In this section you will find the links to connect to live meetings.</p>`;
    material.innerHTML = `<p>This section has support material which will help you to solve doubts and improve your learning</p>`;
});

spanish.addEventListener("click", () => {
    // MENU|
    profile.innerHTML = `<i class="fas fa-user menu-icon"></i>
                         <p class="menu-label" id="menuProfile">Perfil</p>`;
    notices.innerHTML = `<i class="far fa-newspaper menu-icon"></i>
                         <p class="menu-label">Avisos</p>`;
    websites.innerHTML = `<i class="fas fa-globe menu-icon"></i>
                          <p class="menu-label">Sitios web</p>`;

    // MAIN
    main.innerHTML = `<h1 class="principal-title">Bienvenido a tu clase de ingles</h1>`;
    
    //PROFILE
    profileTitle.innerHTML = `<h2 class="profile-title"> Hola, soy la Mtra. Cristy </h2>`;
    profileDescription.innerHTML = `<p class="paragraph"> Soy maestra de ingles de la secundaria Ignacio Zaragoza from Cuanala, Juan C. Bonilla. </p>
                                    <p class="paragraph"> Me gustaria invitarte a unirte y aprender muchas historias maravillosas, lugares increibles, cosas interesantes y mas. </p>
                                    <p class="paragraph"> Puedes contactar conmigo en mi correo personal o si lo prefieres puedes enviarme un mensaje por whatsapp. </p>`;
    
    //NOTICES
    titleNotices.innerHTML = `<h4 class="title-box-notices">Avisos</h4>`;

    // WEBSITES
    websitesTitle.innerHTML = `<h2 class="title-box">Sitios web de apoyo</h2>`;
    nearpod.innerHTML = `<p>En esta sección encontrarás actividades semanales que equivaldran al 40% de tu promedio.</p>`;
    meet.innerHTML = `<p>En esta seccion vas a encontrar los links para conectarte a las reuniones en vivo.</p>`;
    material.innerHTML = `<p>Esta seccion cuenta con material de apoyo el cual te servira para resolver dudas y mejorar tu aprendizaje</p>`;
})