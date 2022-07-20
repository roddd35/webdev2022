const input = document.getElementById('input');
const nome = document.getElementById('name');
const id = document.getElementById('id');
const type = document.getElementById('type');
const height = document.getElementById('height');
const weight = document.getElementById('weight');
const ability = document.getElementById('ability');

const pesquisar = async () => {
    if(input.value.length > 0){
        const value = input.value;
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${value}`); 
        console.log(res);
        if(res.ok){
            const json = await res.json();
            nome.innerHTML = `Nome: ${value}`;
            id.innerHTML = `ID: ${json.id}`;
            type.innerHTML = `Tipo: ${json['types'][0]['type']['name']}`;
            height.innerHTML = `Altura: ${json.height}`;
            weight.innerHTML = `Peso: ${json.weight}`;
            ability.innerHTML = `Habilidade: ${json['abilities'][0]['ability']['name']}`
        }
        else{
            alert("Digite o nome de um Pokémon válido!");
        }
    }
}