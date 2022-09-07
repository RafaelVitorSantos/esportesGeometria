var cont = 0
async function form_resultado(questao01, questao02, questao03) {   
    if (questao01.value == "certo") {
        document.getElementById('certo1').style.color = "blue"
        cont++
    } else {
        if (document.getElementById('changeBackground').textContent == "🔲") {
            document.getElementById('certo1').style.color = "#111"
        } else {
            document.getElementById('certo1').style.color = "#eee"
        }
    }

    if (questao02.value == "certo") {
        document.getElementById('certo2').style.color = "blue"
        cont++
    } else {
        if (document.getElementById('changeBackground').textContent == "🔲") {
            document.getElementById('certo2').style.color = "#111"
        } else {
            document.getElementById('certo2').style.color = "#eee"
        }
    }

    if (questao03.value == "certo") {
        document.getElementById('certo3').style.color = "blue"
        cont++
    } else {
        if (document.getElementById('changeBackground').textContent == "🔲") {
            document.getElementById('certo3').style.color = "#111"
        } else {
            document.getElementById('certo3').style.color = "#eee"
        }
    }
    
    if(cont == 3){
        document.querySelector('#resultado-form').style.animation = 'mostrar 0.5s'
        document.querySelector('#resultado-form').innerHTML = "🤯Parabens Acertou Todas🥳"
        cont=0
        await delay(0.5)
        document.querySelector('#resultado-form').style.animation = ''
    } else if(cont == 2){
        document.querySelector('#resultado-form').style.animation = 'mostrar 0.5s'
        document.querySelector('#resultado-form').innerHTML = "😉Parabens Acertou 2🥳"
        cont=0
        await delay(0.5)
        document.querySelector('#resultado-form').style.animation = ''
    } else if(cont == 1){
        document.querySelector('#resultado-form').style.animation = 'mostrar 0.5s'
        document.querySelector('#resultado-form').innerHTML = "🤨Parabens Acertou Uma🥳"
        cont=0
        await delay(0.5)
        document.querySelector('#resultado-form').style.animation = ''
    } else {
        document.querySelector('#resultado-form').style.animation = 'mostrar 0.5s'
        document.querySelector('#resultado-form').innerHTML = "😟Não Acertou Nenhuma Tente Novamente😬"
        cont=0
        await delay(0.5)
        document.querySelector('#resultado-form').style.animation = ''
    }
    cont=0
}

function buscar() {
    var select = document.getElementById('esportes-select')
    var resultado = select.options[select.selectedIndex].value

    if (resultado == "fut") {
        alert('futebol')
        window.location.href = "futebol/futebol.html"
    } else if (resultado == "vol") {
        alert('volei')
        window.location.href = "volei/volei.html"
    } else if (resultado == "ten") {
        alert('tenis de mesa')
        window.location.href = "tenis/tenis.html"
    } else {
        alert('skate')
        window.location.href = "skate/skate.html"
    }
}

async function backgroundChange() {
    if (document.getElementById('changeBackground').textContent == "🔲") {
        document.getElementById('changeBackground').textContent = "🔳"
        document.getElementById('changeBackground').style.backgroundColor = "#111"
        document.body.style.animation = 'mostrar 0.5s'
        document.body.style.backgroundImage = "radial-gradient(#222 0.9px, #111 0.9px)"
        document.querySelector('h3').style.color = "#eee"
        document.querySelector('h1').style.color = "#eee"
        document.querySelector('select').style.color = "#eee"
        document.querySelector('select').style.backgroundColor = "#111"
        document.querySelector('#buscar').style.backgroundColor = "#111"
        document.querySelector('nav').style.backgroundColor = "#111"
        document.querySelector('#frm-content').style.color = "#eee"
        document.getElementById('certo1').style.color = "#eee"
        document.getElementById('certo2').style.color = "#eee"
        document.getElementById('certo3').style.color = "#eee"
        await delay(0.5)
        document.body.style.animation = null
    } else {
        document.getElementById('changeBackground').textContent = "🔲"
        document.getElementById('changeBackground').style.backgroundColor = "#fff"
        document.body.style.animation = 'mostrar 0.5s'
        document.body.style.backgroundImage = "radial-gradient(#fff 0.9px, #eee 0.9px)"
        document.querySelector('h3').style.color = "#111"
        document.querySelector('h1').style.color = "#111"
        document.querySelector('select').style.color = "#111"
        document.querySelector('select').style.backgroundColor = "#eee"
        document.querySelector('#buscar').style.backgroundColor = "#eee"
        document.querySelector('nav').style.backgroundColor = "#eee"
        document.querySelector('#frm-content').style.color = "#111"
        document.getElementById('certo1').style.color = "#111"
        document.getElementById('certo2').style.color = "#111"
        document.getElementById('certo3').style.color = "#111"
        await delay(0.5)
        document.body.style.animation = null
    }
}

function delay(n) {
    return new Promise(function (resolve) {
        setTimeout(resolve, n * 1000);
    });
}

function apagar(){
    if (document.getElementById('changeBackground').textContent == "🔲"){
        document.getElementById('certo1').style.color = "#111"
        document.querySelector("#certo2").style.color = "#111"
        document.querySelector("#certo3").style.color = "#111"
        document.querySelector('#resultado-form').innerHTML = ""
    } else{
        document.querySelector("#certo1").style.color = "#eee"
        document.querySelector("#certo2").style.color = "#eee"
        document.querySelector("#certo3").style.color = "#eee"
        document.querySelector('#resultado-form').innerHTML = ""
    }
}