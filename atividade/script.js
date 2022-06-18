let modo = 0;
let conteudo = document.getElementById("body");
let barra = document.getElementById("barra");
let subtitle = document.getElementById("subtitle");
let subtitle2 = document.getElementById("subtitle2");
let card = document.getElementById("card");
let card2 = document.getElementById("card2");
let txtside = document.getElementById("txtside");
let topicos = document.getElementById("topicos");
let aprendi = document.getElementById("aprendi");
let sobre = document.getElementById("sobre");
let calc = document.getElementById("calc");
let vet = document.getElementById("vet");
let pal = document.getElementById("pal");
let alg = document.getElementById("alg");
let int = document.getElementById("int");

function darkMode(){
    if (modo == 0){ /*se tá no modo claro*/
        conteudo.style.background = '#2B2C2E';
        barra.style.background = '#18191A';
        barra.style.color = '#fff';
        subtitle.style.color = '#f0f0f0';
        subtitle2.style.color = '#f0f0f0';
        card.style.background = '#18191A';
        card2.style.background = '#18191A';
        txtside.style.color = '#fff';
        sobre.style.color = '#8b0000';
        aprendi.style.color = '#8b0000';
        calc.style.background = '#2B2C2E';
        calc.style.color = '#fff';
        vet.style.background = '#2B2C2E';
        vet.style.color = '#fff';
        pal.style.background = '#2B2C2E';
        pal.style.color = '#fff';
        alg.style.background = '#2B2C2E';
        alg.style.color = '#fff';
        int.style.background = "#2B2C2E";
        int.style.color = '#fff';

        modo = 1;
    }
    else {
        conteudo.style.background = '#fff';
        barra.style.background = '#f2f2f2';
        barra.style.color = '#000';
        subtitle.style.color = '#000';
        subtitle2.style.color = '#000';
        card.style.background = '#fff';
        card2.style.background = '#fff';
        txtside.style.color = '#000';
        sobre.style.color = '#4CAF50';
        aprendi.style.color = '#4CAF50';
        calc.style.background = '#f5f5f5';
        calc.style.color = '#000';
        vet.style.background = '#f5f5f5';
        vet.style.color = '#000';
        pal.style.background = '#f5f5f5';
        pal.style.color = '#000';
        alg.style.background = '#f5f5f5';
        alg.style.color = '#000';
        int.style.background = "#f5f5f5";
        int.style.color = '#000';

        modo = 0;
    }
}
