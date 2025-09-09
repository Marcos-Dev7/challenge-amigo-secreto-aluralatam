let amigos = [];


function adicionarAmigo(){
    
    let campoNome = document.querySelector('input');
    let nomeAmigos = campoNome.value;

    // verificando se o campo está vazio e emitindo alerta

    if (nomeAmigos === ''){
        alert("Campo vazio! Insira um nome valido!");
    } else {
        amigos.push(nomeAmigos);
        campoNome.value = '';
        exibirListaAmigos();
    }
    console.log(amigos);

};

function exibirListaAmigos(){
    let listaUl = document.getElementById('listaAmigos');

    listaUl.innerHTML = '';

    for (i = 0; i < amigos.length; i++){
        const nome = amigos[i];
    
        listaUl.innerHTML += `<li>${nome}</li>`;
    };
};

function sortearAmigo(){
    if (amigos.length === 0){
        alert("Não há amigos para sortear!");
        return
    } else {
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        let amigoSorteado = amigos[indiceAleatorio];

    document.getElementById('resultado').innerHTML = `O amigo sorteado é: ${amigoSorteado}`
    }
};