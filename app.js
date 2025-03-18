const amigos = []; // Array para armazenar os nomes

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    if (!nome) {
        alert("Por favor, insira um nome válido.");
        return;
    }
    
    amigos.push(nome);
    input.value = "";
    atualizarLista();
}

// Função para atualizar a lista de amigos
function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    
    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Função para sortear um amigo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("A lista está vazia. Adicione amigos antes de sortear.");
        return;
    }
    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];
    
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    
    const li = document.createElement("li");
    li.textContent = `Amigo secreto sorteado: ${amigoSorteado}`;
    resultado.appendChild(li);
}
