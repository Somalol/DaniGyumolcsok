async function Login() {
    const emailFelhasz = document.getElementById("loginEmailFelhasznalo").value;
    const jelszo = document.getElementById("loginJelszo").value;

    let kuldendoAdat;

    if(emailFelhasz.includes("@")) {
        kuldendoAdat = {
            "email" : emailFelhasz,
            "jelszo" : jelszo
        };
    }

    else {
        kuldendoAdat = {
            "felhaszNev" : emailFelhasz,
            "jelszo" : jelszo
        };
    }

    const response = await fetch("/api/bejelentkezes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(kuldendoAdat)
    });

    if (response.ok) {
        location.href = "/oldalak/fooldal/fooldal.html";
    } else {
        const eredmeny = await response.json();

        document.getElementsByClassName("alert")[0].hidden = false;
        document.getElementsByClassName("alert")[0].innerHTML = eredmeny["valasz"];
    }
}

async function Register() {
    const teljesNev = document.getElementById("registerTeljesNev").value;
    const felhaszNev = document.getElementById("registerFelhasznaloNev").value;
    const email = document.getElementById("registerEmail").value;
    const telszam = document.getElementById("registerTelszam").value;
    const lakcim = document.getElementById("registerLakcim").value;
    const jelszo = document.getElementById("registerJelszo").value;
    const jelszoUjra = document.getElementById("registerJelszoUjra").value;

    // Jelszó egyezőség ellenőrzése
    if (jelszo !== jelszoUjra) {
        document.getElementsByClassName("alert")[1].hidden = false;
        document.getElementsByClassName("alert")[1].innerHTML = "A jelszavak nem egyeznek!";
        return;
    }

    const kuldendoAdat = {
        teljesNev: teljesNev,
        felhaszNev: felhaszNev,
        email: email,
        telefonszam: telszam,
        lakcim: lakcim,
        jelszo: jelszo
    };

    const response = await fetch("/api/regisztracio", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(kuldendoAdat)
    });

    if (response.ok) {
        location.href = "/oldalak/fooldal/fooldal.html";
    } else {
        const eredmeny = await response.json();
        document.getElementsByClassName("alert")[1].hidden = false;
        document.getElementsByClassName("alert")[1].innerHTML = eredmeny["valasz"];
    }
}


document.getElementById("loginGomba").addEventListener("click", Login);
document.getElementById("registerGomba").addEventListener("click", Register);