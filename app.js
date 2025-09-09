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
    }
    console.log(amigos);

};