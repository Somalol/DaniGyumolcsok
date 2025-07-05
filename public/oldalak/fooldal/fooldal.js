var termekek = [];
var kategoriak = new Set();

async function osszesTermekLeker() {
    try {
        let leker = await fetch("/api/osszestermek");

        if (leker.ok) {
            termekek = await leker.json();

            for(let termek of termekek){
                kategoriak.add(termek.kategoria);
            }

            termekekBetoltes();
            modalMegjelenit();
            kosarBetolt();
            navbarScrollSpyBeallitas();
        } else {
            console.log(leker.status);
        }
    } catch (error) {
        console.log(error);
    }
}

function navbarScrollSpyBeallitas(){
    let ul = document.getElementById("scrollspy");
    for(let kategoria of kategoriak){
        console.log(kategoria)
        let li = document.createElement("li");
        li.classList = "nav-item";

        let a = document.createElement("a");
        a.classList = "nav-link";
        a.href = "#"+kategoria;
        a.innerHTML = kategoria;

        ul.appendChild(li);
        li.appendChild(a);
    }
}

function termekekBetoltes() {
    divContainer = document.getElementById("termekek");
    divContainer.innerHTML = "";
    
    for(let kategoria of kategoriak){

        let fieldset = document.createElement("fieldset");
        fieldset.id = kategoria
        fieldset.classList = "mx-auto filter-box border p-3 bg-light rounded my-3";

        let legend = document.createElement("legend");
        legend.classList = "text-center my-4 display-6";
        legend.innerHTML = kategoria;

        let divKartyak = document.createElement("div");
        divKartyak.setAttribute("data-bs-spy", "scroll");
        divKartyak.setAttribute("data-bs-target", "#navbar");
        divKartyak.setAttribute("data-bs-root-margin", "0px 0px -40%");
        divKartyak.setAttribute("data-bs-smooth-scroll", "true");
        divKartyak.classList = "scrollspy-example bg-body-tertiary p-3 rounded-2";
        divKartyak.tabIndex = "0";

        let divRow = document.createElement("div");
        divRow.classList = "row";

        divContainer.appendChild(fieldset);
        fieldset.appendChild(legend);
        fieldset.appendChild(divKartyak);
        divKartyak.appendChild(divRow);

        for (let termek of termekek) {
            if(termek.kategoria == kategoria){
                let divCard = document.createElement("div");
                divCard.classList =
                    "card col-12 col-lg-3 col-md-6 col-sm-12 p-2 mx-auto my-3";
                divCard.style = "width: 18rem;";
                divCard.id = termek.termek;

                let div = document.createElement("div");
                div.classList = "mx-auto";
                div.style.height = "230px";
                div.style.width = "250px";

                let img = document.createElement("img");
                img.src = "../.." + termek.kepURL;
                img.classList = "card-img-top";
                img.alt = termek.termek;
                img.style.maxWidth = "250px";
                img.style.maxHeight = "230px";

                let divCardBody = document.createElement("div");
                divCardBody.classList = "card-body text-center";

                let h5 = document.createElement("h5");
                h5.classList = "card-title display-6";
                h5.innerHTML = termek.termek;

                let cardText = document.createElement("p");
                cardText.classList = "card-text";
                cardText.innerHTML = termek.leiras;

                let ul = document.createElement("ul");
                ul.classList =
                    "list-group list-group-horizontal justify-content-center my-3";

                let liAr = document.createElement("li");
                liAr.classList = "list-group-item";
                liAr.innerHTML = termek.ar + " Ft";

                let liMertekegyseg = document.createElement("li");
                liMertekegyseg.classList = "list-group-item";
                liMertekegyseg.innerHTML =
                    termek.kiszereles + " " + termek.mertekegyseg;

                let btnReszletek = document.createElement("input");
                btnReszletek.type = "button";
                btnReszletek.classList = "btn btn-info mb-3";
                btnReszletek.value = "Részletek";
                btnReszletek.id = "btn" + termek.termek;
                btnReszletek.setAttribute("data-bs-toggle", "modal");
                btnReszletek.setAttribute("data-bs-target", "#modal" + termek.id);

                let btnKorsarba = document.createElement("input");
                btnKorsarba.type = "button";
                btnKorsarba.classList = "btn btn-primary w-100";
                btnKorsarba.value = "Kosárba";
                btnKorsarba.id = "btn" + termek.termek;
                btnKorsarba.addEventListener("click", function () {
                    termekKosarba(termek.id);
                    kosarbanLevoTermekSzamlalo();
                });

                divRow.appendChild(divCard);

                divCard.appendChild(div);
                div.appendChild(img);
                divCard.appendChild(divCardBody);

                divCardBody.appendChild(h5);
                divCardBody.appendChild(cardText);
                divCardBody.appendChild(ul);
                ul.appendChild(liAr);
                ul.appendChild(liMertekegyseg);
                divCardBody.appendChild(btnReszletek);
                divCardBody.appendChild(btnKorsarba);
            }
            
        }
    }
    
}

function modalMegjelenit() {
    foDiv = document.getElementById("termekek");

    for (let termek of termekek) {
        let divModalFade = document.createElement("div");
        divModalFade.classList = "modal fade";
        divModalFade.id = "modal" + termek.id;
        divModalFade.tabIndex = "-1";
        divModalFade.role = "dialog";
        divModalFade.setAttribute("aria-lebelledby", "myModalLabel");
        divModalFade.ariaHidden = "true";

        let divModalDialog = document.createElement("div");
        divModalDialog.classList = "modal-dialog";
        divModalDialog.role = "document";

        let divModalContent = document.createElement("div");
        divModalContent.classList = "modal-content text-center";

        let divModalHeader = document.createElement("div");
        divModalHeader.classList = "modal-header";

        let h5ModalTitle = document.createElement("h5");
        h5ModalTitle.classList = "modal-title mx-auto";
        h5ModalTitle.id = "myModalLabel";
        h5ModalTitle.innerHTML = termek.termek;

        let btnClose = document.createElement("button");
        btnClose.type = "button";
        btnClose.classList = "close";
        btnClose.setAttribute("data-bs-dismiss", "modal");
        btnClose.setAttribute("aria-label", "Bezárás");

        let img = document.createElement("img");
        img.src = "../.." + termek.kepURL;
        img.classList = "card-img-top mx-auto mt-3 rounded";
        img.alt = termek.termek;
        img.style.maxWidth = "300px";
        img.style.maxHeight = "300px";

        let divModalBody = document.createElement("div");
        divModalBody.classList = "modal-body";
        divModalBody.innerHTML = termek.leiras;

        let ul = document.createElement("ul");
        ul.classList =
            "list-group list-group-horizontal justify-content-center my-3";

        let liAr = document.createElement("li");
        liAr.classList = "list-group-item";
        liAr.innerHTML = termek.ar + " Ft";

        let liMertekegyseg = document.createElement("li");
        liMertekegyseg.classList = "list-group-item";
        liMertekegyseg.innerHTML =
            termek.kiszereles + " " + termek.mertekegyseg;

        let divModalFooter = document.createElement("div");
        divModalFooter.classList = "modal-footer";

        let div = document.createElement("div");
        div.classList = "mx-auto";

        let btnKorsarba = document.createElement("input");
        btnKorsarba.type = "button";
        btnKorsarba.classList = "btn btn-primary me-2";
        btnKorsarba.value = "Kosárba";
        btnKorsarba.id = "btn" + termek.termek;
        btnKorsarba.addEventListener("click", function () {
            termekKosarba(termek.id);
            kosarbanLevoTermekSzamlalo();
        });

        let btnBezar = document.createElement("button");
        btnBezar.classList = "btn btn-secondary ms-2";
        btnBezar.setAttribute("data-bs-dismiss", "modal");
        btnBezar.innerHTML = "Bezár";

        foDiv.appendChild(divModalFade);
        divModalFade.appendChild(divModalDialog);
        divModalDialog.appendChild(divModalContent);

        divModalContent.appendChild(divModalHeader);
        divModalHeader.appendChild(h5ModalTitle);

        divModalContent.appendChild(img);
        divModalContent.appendChild(divModalBody);

        divModalContent.appendChild(ul);
        ul.appendChild(liAr);
        ul.appendChild(liMertekegyseg);

        divModalContent.appendChild(divModalFooter);
        divModalFooter.appendChild(div);
        div.appendChild(btnKorsarba);
        div.appendChild(btnBezar);
    }
}

function kosarBetolt() {
    foDiv = document.getElementById("termekek");

    let divModalFade = document.createElement("div");
    divModalFade.classList = "modal fade";
    divModalFade.id = "kosarModal";
    divModalFade.tabIndex = "-1";
    divModalFade.role = "dialog";
    divModalFade.setAttribute("aria-lebelledby", "myModalLabel");
    divModalFade.ariaHidden = "true";

    let divModalDialog = document.createElement("div");
    divModalDialog.classList = "modal-dialog modal-lg";
    divModalDialog.role = "document";

    let divModalContent = document.createElement("div");
    divModalContent.classList = "modal-content text-center";
    divModalContent.id = "kosarBetoltModalContent";

    foDiv.appendChild(divModalFade);
    divModalFade.appendChild(divModalDialog);
    divModalDialog.appendChild(divModalContent);
}

function termekKosarba(termekId) {
    let kosar = JSON.parse(localStorage.getItem("kosar")) || [];
    let adottTermekAKosarbanVanE = kosar.findIndex((x) => x.id === termekId);

    if (adottTermekAKosarbanVanE != -1) {
        kosar[adottTermekAKosarbanVanE].mennyiseg += 1;
    } else {
        kosar.push({ id: termekId, mennyiseg: 1 });
    }

    localStorage.setItem("kosar", JSON.stringify(kosar));
}

function kosarMegjelen() {
    let divModalContent = document.getElementById("kosarBetoltModalContent");
    divModalContent.innerHTML = "";

    let kosar = JSON.parse(localStorage.getItem("kosar")) || [];

    let divModalBody = document.createElement("div");
    divModalBody.classList = "modal-body";

    let divModalHeader = document.createElement("div");
    divModalHeader.classList = "modal-header";

    let h5ModalTitle = document.createElement("h5");
    h5ModalTitle.classList = "modal-title mx-auto";
    h5ModalTitle.id = "myModalLabel";
    h5ModalTitle.innerHTML = "Kosár";

    let btnClose = document.createElement("button");
    btnClose.type = "button";
    btnClose.classList = "close";
    btnClose.setAttribute("data-bs-dismiss", "modal");
    btnClose.setAttribute("aria-label", "Bezárás");

    let divModalFooter = document.createElement("div");
    divModalFooter.classList = "modal-footer";

    let div = document.createElement("div");
    div.classList = "mx-auto";

    let btnVasarlas = document.createElement("input");
    btnVasarlas.type = "button";
    btnVasarlas.classList = "btn btn-primary me-2";
    btnVasarlas.value = "Vásárlás";

    let btnBezar = document.createElement("button");
    btnBezar.classList = "btn btn-secondary ms-2";
    btnBezar.setAttribute("data-bs-dismiss", "modal");
    btnBezar.innerHTML = "Bezár";

    divModalContent.appendChild(divModalHeader);
    divModalHeader.appendChild(h5ModalTitle);

    let ul = document.createElement("ul");
    ul.classList = "list-group mx-3 my-3";
    
    let vegosszeg = 0;

    let divVegosszeg = document.createElement("div");

    if (kosar == "") {
        let alert = document.createElement("div");
        alert.classList = "alert alert-warning text-center mt-3";
        alert.role = "alert";
        alert.innerHTML = "Nincs termék a kosárban!";

        divModalContent.appendChild(divModalBody);
        divModalBody.appendChild(alert);
    } else {
        let termekSzamlalo = 0;
        for (let index of kosar) {
            let li = document.createElement("li");
            li.classList = "list-group-item";

            let adottTermek = termekek.find((x) => x.id == index.id);
            let labelAdatok = document.createElement("span");
            labelAdatok.innerHTML =
                "<b>"+
                index.mennyiseg +
                "</b> x " +
                adottTermek.termek +
                " - " +
                adottTermek.ar +
                " Ft / " +
                adottTermek.kiszereles +
                " " +
                adottTermek.rovidites;

            labelAdatok.classList = "fs-5";

            let labelEgyFajtaTermekOsszar = document.createElement("label");
            labelEgyFajtaTermekOsszar.innerHTML = 
                "<b>" +
                index.mennyiseg * adottTermek.ar +
                " Ft</b>";
            labelEgyFajtaTermekOsszar.classList = "fs-5 ms-3";

            vegosszeg += index.mennyiseg * adottTermek.ar;

            let btnTermekMennyisegNovel = document.createElement("button");
            btnTermekMennyisegNovel.type = "button";
            btnTermekMennyisegNovel.classList = "btn btn-primary btn-sm";
            btnTermekMennyisegNovel.innerHTML = "+";

            //Hozzáad a mennyiséghez 1-et
            btnTermekMennyisegNovel.addEventListener("click", function(){
                let termekIndex = kosar.findIndex(x => x.id === index.id);

                kosar[termekIndex].mennyiseg += 1;
                localStorage.setItem("kosar", JSON.stringify(kosar));
                kosarMegjelen();
            })

            let btnTermekMennyisegCsokkent = document.createElement("button");
            btnTermekMennyisegCsokkent.type = "button";
            btnTermekMennyisegCsokkent.innerHTML = "-";

            if(index.mennyiseg <= 1){
                console.log("kisebb 1")
                btnTermekMennyisegCsokkent.classList = "btn btn-primary btn-sm";
                btnTermekMennyisegCsokkent.disabled = true;
            }
            else{
                console.log("nagyobb 1")
                btnTermekMennyisegCsokkent.classList = "btn btn-primary btn-sm";
                btnTermekMennyisegCsokkent.disabled = false;
            }
            

            //Kivon a mennyiségből 1-et
            btnTermekMennyisegCsokkent.addEventListener("click", function(){
                let termekIndex = kosar.findIndex(x => x.id === index.id);

                kosar[termekIndex].mennyiseg -= 1;
                localStorage.setItem("kosar", JSON.stringify(kosar));
                kosarMegjelen();
            })

            let labelMennyiseg = document.createElement("label");
            labelMennyiseg.innerHTML = index.mennyiseg;
            labelMennyiseg.classList = "mx-2 fs-5";

            let btnTermekTorles = document.createElement("button");
            btnTermekTorles.type = "button";
            btnTermekTorles.value = "Törlés";
            btnTermekTorles.classList = "btn btn-danger";
            btnTermekTorles.innerHTML = "Törlés";
            btnTermekTorles.style.float = "right";

            //Termék törlése a kosárból
            btnTermekTorles.addEventListener("click", function(){
                kosar = kosar.filter(termek => termek.id !== index.id);
                localStorage.setItem("kosar", JSON.stringify(kosar));
                kosarMegjelen();
                kosarbanLevoTermekSzamlalo();
            })

            let br = document.createElement("br");

            termekSzamlalo += index.mennyiseg;

            ul.appendChild(li);
            li.appendChild(labelAdatok);
            li.appendChild(btnTermekTorles);
            li.appendChild(br);
            li.appendChild(btnTermekMennyisegCsokkent);
            li.appendChild(labelMennyiseg);
            li.appendChild(btnTermekMennyisegNovel);
            li.appendChild(labelEgyFajtaTermekOsszar);
        }
        document.getElementById("kosarbanLevoTermekSzamlalo").innerHTML = termekSzamlalo >= 1 ? termekSzamlalo : "";

        div.appendChild(divVegosszeg);
        div.appendChild(btnVasarlas);
    }

    
    divVegosszeg.classList = "fs-3 mb-2";
    divVegosszeg.innerHTML = vegosszeg != 0 ? "Végösszeg: "+vegosszeg+ " Ft" : "";

    divModalContent.appendChild(ul);
    divModalContent.appendChild(divModalFooter);

    divModalFooter.appendChild(div);
    
    div.appendChild(btnBezar);
}

function kosarbanLevoTermekSzamlalo(){
    let kosar = JSON.parse(localStorage.getItem("kosar")) || [];

    let szamlalo = 0;

    for(let termek of kosar){
        szamlalo+=termek.mennyiseg;
    }

    document.getElementById("kosarbanLevoTermekSzamlalo").innerHTML = szamlalo >= 1 ? szamlalo : "";
    
}

window.addEventListener("load", function () {
    osszesTermekLeker();
    kosarbanLevoTermekSzamlalo();
});


document
    .getElementById("btnKosarMegtekint")
    .addEventListener("click", kosarMegjelen);