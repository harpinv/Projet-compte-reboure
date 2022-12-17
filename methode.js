let text = document.querySelector('input');
let valider = document.getElementById('valider');
let play = document.getElementById('play');
let stop = document.getElementById('stop');
let reini = document.getElementById('reiniialisation');
let reset = document.getElementById('reset');
let bloc = document.getElementById('bloc3');
let creer = document.getElementById('creer');

creer.addEventListener('click', function () {
    let div = document.createElement('div');
    div.innerHTML = "600";
    div.style.width = "40px";
    div.style.height = "40px";
    div.style.paddingTop = "10px";
    div.style.backgroundColor = "orange";
    div.style.borderRadius = "20px";
    div.style.margin = "20px";
    div.style.display = "inline-block"
    div.className = "compte"
    bloc.append(div);
})

let decompte = 600;

valider.addEventListener('click', function () {
    let compte = document.getElementsByClassName('compte');
    if(text.value > 0) {
        if(compte.length > 0) {
            for (let i = 0; i < compte.length; i++) {
                compte[i].innerHTML = text.value;
                decompte = text.value;
            }
        }
    }
})

play.addEventListener('click', function () {
    let compte = document.getElementsByClassName('compte');
    let interval = setInterval(function () {
        if(decompte > 0) {
            if(compte.length > 0) {
                for (let i = 0; i < compte.length; i++) {
                    compte[i].innerHTML -= "1";

                }
                decompte--;
            }
        } else {
            clearInterval(interval);
        }

    }, 1000);


    stop.addEventListener('click', function () {
        clearInterval(interval);
    })
})

reini.addEventListener('click', function () {
    let compte = document.getElementsByClassName('compte');
    if(compte.length > 0) {
        for (let i = 0; i < compte.length; i++) {
            compte[i].innerHTML = "600";
            decompte = 600;
        }
    }
})

reset.addEventListener('click', function () {
    location.reload()
})