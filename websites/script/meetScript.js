const firstGrade = document.getElementById("meetFirstGrade");
const secondGrade = document.getElementById("meetSecondGrade");
const thirdGrade = document.getElementById("meetThirdGrade");

//FIRST GRADE
linksFirstGrade = () => {
    firstGrade.innerHTML = `<div class="selector">
                                <div>
                                    <h3 class="link-title">Choice your group</h3>
                                </div>
                                <div class="row">
                                    <a href="https://meet.google.com/iat-mktu-jkj" class="col-4 link-group"> A </a>                              
                                    <a href="https://meet.google.com/nkn-oggg-gug" class="col-4 link-group"> B </a>                                                    
                                    <a href="https://meet.google.com/wse-xgrw-nby" class="col-4 link-group"> C </a>                            
                                </div>
                            </div>`
}

firstGradeStyle = () => {
    firstGrade.innerHTML = `<div class="overlay">
                                <h2 class="title"> First grade </h2>
                                <h2 class="title"> Primer año </h2>
                            </div>`
}

//SECOND GRADE
linksSecondGrade = () => {
    secondGrade.innerHTML = `<div class="selector">
                                <div>
                                    <h3 class="link-title">Choice your group</h3>
                                </div>
                                <div class="row">
                                    <a href="https://meet.google.com/szm-ycfn-bey" class="col-4 link-group"> A </a>                              
                                    <a href="https://meet.google.com/sef-iivz-uwh" class="col-4 link-group"> B </a>                                                    
                                    <a href="https://meet.google.com/zuy-gyjs-nhp" class="col-4 link-group"> C </a>                            
                                </div>
                            </div>`
}

secondGradeStyle = () => {
    secondGrade.innerHTML = `<div class="overlay">
                                <h2 class="title"> Second grade </h2>
                                <h2 class="title"> Segundo año </h2>                    
                            </div>`
}

//THIRD GRADE
linksThirdGrade = () => {
    thirdGrade.innerHTML = `<div class="selector">
                                <div>
                                    <h3 class="link-title">Choice your group</h3>
                                </div>
                                <div class="row">
                                    <a href="https://meet.google.com/hpj-cqkp-fsv" class="col-4 link-group"> A </a>                              
                                    <a href="https://meet.google.com/qgb-mpdw-rvk" class="col-4 link-group"> B </a>                                                    
                                    <a href="https://meet.google.com/isg-izvw-ukr" class="col-4 link-group"> C </a>                            
                                </div>
                            </div>`
};

thirdGradeStyle = () => {
    thirdGrade.innerHTML = `<div class="overlay">
                                <h2 class="title"> Third grade </h2>
                                <h2 class="title"> Tercer año </h2>
                            </div>`
};