window.onload = function() {

console.log('Pokemon.js');

let url = "https://pokeapi.co/api/v2/pokemon/";

let pkm;

//quando clicar na pagina, chama a funcao getPokemon

document.addEventListener('click', getPokemon);
function getPokemon() {
    let randomPkm =  Math.floor (Math.random(0, 1000) * 1000);
    fetch(url + randomPkm)
        .then(response => response.json())
        .then(function(data){ 
        pkm = data
        console.log(pkm);
        setPokemon();
    }
    );
}

function setPokemon() {
    let pkmName = document.getElementById('pkmName');
    pkmName.innerHTML = pkm.name;

    let pkmImg = document.getElementById('pkmImg');
    pkmImg.src = pkm.sprites.front_default;

    //for each type of the pokemon we create a p element inside the div pkmTypes
    let pkmTypes = document.getElementById('pkmTypes');
    pkmTypes.innerHTML = '';
    pkm.types.forEach(type => {
        let p = document.createElement('p');
        p.innerHTML = type.type.name;
        pkmTypes.appendChild(p);
    });
}
}