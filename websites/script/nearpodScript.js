const firstGrade = document.getElementById("nearpodFirstGrade");
const secondGrade = document.getElementById("nearpodSecondGrade");
const thirdGrade = document.getElementById("nearpodThirdGrade");

//FIRST GRADE
firstGrade.addEventListener('click', () => {
    firstGrade.innerHTML = `
        <div class="selector">
            <div>
                <h3 class="link-title">Choice your group</h3>
            </div>
            <div class="row">
                <a href="./Nearpod/primero/primeroA.html" class="col-4 link-group"> A </a>
                <a href="./Nearpod/primero/primeroB.html" class="col-4 link-group"> B </a>
                <a href="./Nearpod/primero/primeroC.html" class="col-4 link-group"> C </a>                            
            </div>
        </div>`

    secondGrade.innerHTML = `
        <div class="overlay">
            <h2 class="title">
                Second grade <br> Segundo año
            </h2>
        </div>`

    thirdGrade.innerHTML = `
        <div class="overlay">
            <h2 class="title">
                Third grade <br> Tercer año
            </h2>
        </div>`
});

//SECOND GRADE
secondGrade.addEventListener('click', () => {
    secondGrade.innerHTML = `
        <div class="selector">
            <div>
                <h3 class="link-title">Choice your group</h3>
            </div>
            <div class="row">
                <a href="./Nearpod/segundo/segundoA.html" class="col-4 link-group"> A </a>
                <a href="./Nearpod/segundo/segundoB.html" class="col-4 link-group"> B </a>
                <a href="./Nearpod/segundo/segundoC.html" class="col-4 link-group"> C </a>                            
            </div>
        </div>`

    firstGrade.innerHTML = `
        <div class="overlay">
            <h2 class="title">
                First grade <br> Primer año
            </h2>
        </div>`

    thirdGrade.innerHTML = `
        <div class="overlay">
            <h2 class="title">
                Third grade <br> Tercer año
            </h2>
        </div>`
});

//THIRD GRADE
thirdGrade.addEventListener('click', () => {
    thirdGrade.innerHTML = `
        <div class="selector">
            <div>
                <h3 class="link-title">Choice your group</h3>
            </div>
            <div class="row">
                <a href="./Nearpod/tercero/terceroA.html" class="col-4 link-group"> A </a>
                <a href="./Nearpod/tercero/terceroB.html" class="col-4 link-group"> B </a>
                <a href="./Nearpod/tercero/terceroC.html" class="col-4 link-group"> C </a>                            
            </div>
        </div>`
    
    firstGrade.innerHTML = `
        <div class="overlay">
            <h2 class="title">
                First grade <br> Primer año
            </h2>
        </div>`

    secondGrade.innerHTML = `
        <div class="overlay">
            <h2 class="title">
                Second grade <br> Segundo año
            </h2>
        </div>`
});