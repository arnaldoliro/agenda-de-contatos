const form = document.getElementById("form-contact");
const numero = [];
const nome = [];
let linhas = '';

function adicionaLinha() {
    const inputNome = document.getElementById('nome');
    const inputNumero = document.getElementById('numero');
    let numeroConverter = inputNumero.value;
    let verificaNumero = numeroConverter.split("");

    if (numero.includes(inputNumero.value)) {
        alert(`O numero: ${inputNumero.value} já existe`);
    }
    else {
        if (verificaNumero.length < 8){
            alert("O número precisa conter no mínimo 8 dígitos");
        }
        else{
            nome.push(inputNome.value);
            numero.push(inputNumero.value);
    
            let linha = '<tr>';
            linha += `<td>${inputNome.value}</td>`;
            linha += `<td>${inputNumero.value}</td>`;
            linha += '</tr>';
    
            linhas += linha;
        }
    }
    console.log(verificaNumero)
}

function atualizaAgenda(){
    const agenda = document.querySelector('tbody');
    agenda.innerHTML = linhas;
}

form.addEventListener('submit', function(e){
    e.preventDefault();
    adicionaLinha();
    atualizaAgenda();
});