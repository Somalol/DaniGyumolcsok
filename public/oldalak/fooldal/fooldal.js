let termekek = [
  {
    id: 0,
    nev: "Alma",
    ar: 300,
    kep: "images/alma.jpg",
    leiras: "Az alma az egyik legnépszerűbb gyümölcs hazánkban. Frissítő, lédús, vitaminokban gazdag, és remekül fogyasztható önmagában vagy süteményekben."
  },
  {
    id: 1,
    nev: "Banán",
    ar: 400,
    kep: "images/banan.jpg",
    leiras: "A banán édes, puha húsú gyümölcs, amely kiváló energiaforrás. Gyorsan eltelít, ideális tízóraira vagy uzsonnára."
  },
  {
    id: 2,
    nev: "Narancs",
    ar: 350,
    kep: "images/narancs.jpg",
    leiras: "A narancs C-vitaminban gazdag citrusféle, amely frissítő ízével tökéletes választás reggelire vagy gyümölcslé készítéséhez."
  },
  {
    id: 3,
    nev: "Paradicsom",
    ar: 250,
    kep: "images/paradicsom.jpg",
    leiras: "A paradicsom sokoldalúan felhasználható zöldség, amely saláták, szendvicsek és főételek elengedhetetlen alapanyaga."
  },
  {
    id: 4,
    nev: "Uborka",
    ar: 200,
    kep: "images/uborka.jpg",
    leiras: "Az uborka frissítő, ropogós zöldség, amely kiválóan alkalmas salátákba vagy önmagában fogyasztva is."
  },
  {
    id: 5,
    nev: "Káposzta",
    ar: 150,
    kep: "images/kaposzta.jpg",
    leiras: "A káposzta egész évben elérhető, vitaminokban és rostokban gazdag zöldség, amely savanyítva vagy főzve is finom."
  },
  {
    id: 6,
    nev: "Sárgarépa",
    ar: 180,
    kep: "images/sargarepa.jpg",
    leiras: "A sárgarépa édeskés ízű, ropogós zöldség, amely remekül fogyasztható nyersen, főzve vagy levesekben."
  },
  {
    id: 7,
    nev: "Körte",
    ar: 320,
    kep: "images/korle.jpg",
    leiras: "A körte lédús, édes gyümölcs, amely kiválóan alkalmas desszertekhez vagy önmagában fogyasztva is."
  },
  {
    id: 8,
    nev: "Szőlő",
    ar: 450,
    kep: "images/szolo.jpg",
    leiras: "A szőlő apró, lédús gyümölcs, amelyet frissen, aszalva vagy bor formájában is élvezhetünk."
  },
  {
    id: 9,
    nev: "Eper",
    ar: 500,
    kep: "images/eper.jpg",
    leiras: "Az eper illatos, zamatos gyümölcs, amely tökéletes süteményekhez, turmixokhoz vagy önmagában fogyasztva."
  },
  {
    id: 10,
    nev: "Cseresznye",
    ar: 600,
    kep: "images/cseresznye.jpg",
    leiras: "A cseresznye édes, lédús gyümölcs, amely a nyár egyik legkedveltebb finomsága."
  },
  {
    id: 11,
    nev: "Kivi",
    ar: 400,
    kep: "images/kivi.jpg",
    leiras: "A kivi egzotikus gyümölcs, amely magas C-vitamin tartalmával és friss ízével egészséges választás."
  },
  {
    id: 12,
    nev: "Paprika",
    ar: 220,
    kep: "images/paprika.jpg",
    leiras: "A paprika színes, ropogós zöldség, amely salátákban, főételekben vagy nyersen is kitűnő."
  },
  {
    id: 13,
    nev: "Hagyma",
    ar: 130,
    kep: "images/hagyma.jpg",
    leiras: "A hagyma alapvető konyhai hozzávaló, amely ízesíti az ételeket, és számos egészségügyi előnnyel bír."
  },
  {
    id: 14,
    nev: "Fokhagyma",
    ar: 170,
    kep: "images/fokhagyma.jpg",
    leiras: "A fokhagyma intenzív ízű fűszernövény, amely nemcsak finom, hanem egészséges is."
  },
  {
    id: 15,
    nev: "Cukkini",
    ar: 210,
    kep: "images/cukkini.jpg",
    leiras: "A cukkini könnyen emészthető, sokoldalú zöldség, amely grillezve, párolva vagy rakott ételekben is kiváló."
  },
  {
    id: 16,
    nev: "Ananász",
    ar: 550,
    kep: "images/ananasz.jpg",
    leiras: "Az ananász trópusi gyümölcs, amely édes és savanykás ízével frissítő csemege."
  },
  {
    id: 17,
    nev: "Málna",
    ar: 480,
    kep: "images/malna.jpg",
    leiras: "A málna apró, lédús bogyós gyümölcs, amely kitűnő süteményekhez, lekvárokhoz vagy önmagában is."
  },
  {
    id: 18,
    nev: "Káposzta",
    ar: 150,
    kep: "images/kaposzta.jpg",
    leiras: "A káposzta egész évben elérhető, vitaminokban és rostokban gazdag zöldség, amely savanyítva vagy főzve is finom."
  },
  {
    id: 19,
    nev: "Citrom",
    ar: 300,
    kep: "images/citrom.jpg",
    leiras: "A citrom savanykás, frissítő citrusféle, amely italok, teák és ételek ízesítésére is kiváló."
  }
]






function termekekBetoltes(){
    divContainer = document.getElementById("termekek");  

    let divRow = document.createElement("div");
    divRow.classList = "row";
    
    divContainer.innerHTML = "";

    divContainer.appendChild(divRow);


    for(let termek of termekek){

      let divCard = document.createElement("div");
        divCard.classList = "card col-12 col-lg-3 col-md-6 col-sm-12 p-2 mx-auto my-3"; 
        divCard.style = "width: 18rem;";
        divCard.id = termek.nev;

        let div = document.createElement("div");
        div.classList = "mx-auto"
        div.style.height = "230px";
        div.style.width = "250px"

        let img = document.createElement("img");
        img.src = "../termekfeltolto/adatbazisInterakciok/"+termek.kepek;
        img.classList = "card-img-top";
        img.alt = termek.nev;
        img.style.maxWidth = "250px";
        img.style.maxHeight = "230px";

        let divCardBody = document.createElement("div");
        divCardBody.classList = "card-body text-center";

        let h5 = document.createElement("h5");
        h5.classList = "card-title";
        h5.innerHTML = termek.nev;

        let cardText = document.createElement("p");
        cardText.classList = "card-text";
        cardText.innerHTML = termek.leiras;

        let br = document.createElement("br");

        
        let btnReszletek = document.createElement("input");
        btnReszletek.type = "button";
        btnReszletek.classList = "btn btn-info mb-3";
        btnReszletek.value = "Részletek";
        btnReszletek.id = "btn"+termek.nev;
        btnReszletek.setAttribute("data-bs-toggle", "modal");
        btnReszletek.setAttribute("data-bs-target", "#modal"+termek.id);


        let btnKorsarba = document.createElement("input");
        btnKorsarba.type = "button";
        btnKorsarba.classList = "btn btn-primary w-100";
        btnKorsarba.value = "Kosárba";
        btnKorsarba.id = "btn"+termek.nev;

        divRow.appendChild(divCard);

        divCard.appendChild(div);
        div.appendChild(img);
        divCard.appendChild(divCardBody);

        divCardBody.appendChild(h5);
        divCardBody.appendChild(cardText)
        divCardBody.appendChild(br);
        divCardBody.appendChild(btnReszletek);
        divCardBody.appendChild(btnKorsarba);


    }

}


async function modalMegjelenit(){
  foDiv = document.getElementById("termekek");  

  for(let termek of termekek){
    let divModalFade = document.createElement("div");
    divModalFade.classList = "modal fade";
    divModalFade.id = "modal"+termek.id;
    divModalFade.tabIndex = "-1";
    divModalFade.role = "dialog";
    divModalFade.setAttribute("aria-lebelledby", "myModalLabel");
    divModalFade.ariaHidden = "true";

    let divModalDialog = document.createElement("div");
    divModalDialog.classList = "modal-dialog";
    divModalDialog.role = "document";

    let divModalContent = document.createElement("div");
    divModalContent.classList = "modal-content";
    
    let divModalHeader = document.createElement("div");
    divModalHeader.classList = "modal-header";

    let h5ModalTitle = document.createElement("h5");
    h5ModalTitle.classList = "modal-title";
    h5ModalTitle.id = "myModalLabel";
    h5ModalTitle.innerHTML = termek.nev;

    let btnClose = document.createElement("button");
    btnClose.type = "button";
    btnClose.classList = "close";
    btnClose.setAttribute("data-bs-dismiss", "modal");
    btnClose.setAttribute("aria-label", "Bezárás");

    let spanClose = document.createElement("span");
    spanClose.setAttribute("aria-hidden", "true");
    spanClose.innerHTML = "&times;";

    let divModalBody = document.createElement("div");
    divModalBody.classList = "modal-body";
    divModalBody.innerHTML = termek.leiras;

    let divModalFooter = document.createElement("div");
    divModalFooter.classList = "modal-footer";

    let btnBezar = document.createElement("button");
    btnBezar.classList = "btn btn-secondary";
    btnBezar.setAttribute("data-bs-dismiss", "modal");
    btnBezar.innerHTML = "Bezár";

    foDiv.appendChild(divModalFade);
    divModalFade.appendChild(divModalDialog);
    divModalDialog.appendChild(divModalContent);

    divModalContent.appendChild(divModalHeader);
    divModalHeader.appendChild(h5ModalTitle);
    divModalHeader.appendChild(btnClose);

    divModalContent.appendChild(divModalBody);

    divModalContent.appendChild(divModalFooter);
    divModalFooter.appendChild(btnBezar);
  }
  
}



window.addEventListener("load", function(){
  termekekBetoltes();
  modalMegjelenit();
});
