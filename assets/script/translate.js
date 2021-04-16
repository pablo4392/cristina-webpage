const english = document.getElementById("englishButton");
const spanish = document.getElementById("spanishButton");
const boxDescription = document.getElementById("profileDescription");
const nearpod = document.getElementById("nearpodDescription");
const meet = document.getElementById("meetDescription");
const material = document.getElementById("materialDescription");

english.addEventListener("click", () => {
    // alert("english")
    boxDescription.innerHTML = `<p class="paragraph"> I am english teacher of Secundaria Ignacio Zaragoza from Cuanala, Juan C. Bonilla. </p>
                                <p class="paragraph"> I would like ivite you to join and learn many wonderful stories, awesome places, interesting things and more. </p>
                                <p class="paragraph"> You can contact with me in my personal email or if you prefeer, you can send me a text by whatsapp. </p>`;
    
    nearpod.innerHTML = `<p>In this section you will find weekly activities that are equivalent to 40% of your average.</p>`;
    meet.innerHTML = `<p>In this section you will find the links to connect to live meetings.</p>`;
    material.innerHTML = `<p>This section has support material which will help you to solve doubts and improve your learning</p>`;
});

spanish.addEventListener("click", () => {
    // alert("español")
    boxDescription.innerHTML = `<p class="paragraph"> Soy maestra de ingles de la secundaria Ignacio Zaragoza from Cuanala, Juan C. Bonilla. </p>
                                <p class="paragraph"> Me gustaria invitarte a unirte y aprender muchas historias maravillosas, lugares increibles, cosas interesantes y mas. </p>
                                <p class="paragraph"> Puedes contactar conmigo en mi correo personal o si lo prefieres puedes enviarme un mensaje por whatsapp. </p>`
    nearpod.innerHTML = `<p>En esta sección encontrarás actividades semanales que equivaldran al 40% de tu promedio.</p>`;
    meet.innerHTML = `<p>En esta seccion vas a encontrar los links para conectarte a las reuniones en vivo.</p>`;
    material.innerHTML = `<p>Esta seccion cuenta con material de apoyo el cual te servira para resolver dudas y mejorar tu aprendizaje</p>`;
})