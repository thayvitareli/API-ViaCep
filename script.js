
/*const addressInput = document.querySelector("#rua");
const cityInput = document.querySelector("#cidade");
const neighborhoodInput = document.querySelector("#bairro");
const regionInput = document.querySelector("#uf"); */


const cep = document.querySelector('#cep');

function search() {

    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }
    let source = cep.value;

    if (source == "") {
        alert("Digite um CEP")
        return;
    }

    fetch(`https://viacep.com.br/ws/${source}/json/`, options)
        .then(response => {
            response.json()

            .then(data => {

                document.getElementById('logradouro').value = data.logradouro;
                document.getElementById('bairro').value = data.bairro;
                document.getElementById('cidade').value = data.localidade;
                document.getElementById('uf').value = data.uf;

            })
        })
        .catch(e => alert("Erro, verifique o CEP ou tente novamente mais tarde"))

}

function clean() {
    document.getElementById('cep').value = "";
    document.getElementById('logradouro').value = "";
    document.getElementById('bairro').value = "";
    document.getElementById('cidade').value = "";
    document.getElementById('uf').value = "";
}