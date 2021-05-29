fetch('https://pokeapi.co/api/v2/pokemon?limit=493')
.then(response => response.json())
.then(allpokemon => {

    var pokemons = [];

    allpokemon.results.map((val) =>
    {
       
        fetch(val.url)
        .then(response => response.json())
        .then(pokemonSingle => 
            {
                pokemons.push
                ({
                    nome: val.name,
                    imagem:pokemonSingle.sprites.front_default                    
                });
                if(pokemons.length == 493)
                {
                    var pokemonBoxes = document.querySelector('.pokemon-boxes');
                    pokemonBoxes.innerHTML = "";
                    pokemons.map(function(val)
                    {

                        pokemonBoxes.innerHTML += `
                            <div class="pokemon-box">
                                <img src="`+val.imagem+`"/>
                                <p>`+nomeCapitalizado(val.nome)+`</p>
                            </div>                   
                        `;    

                        /*
                                      [
                        */     
                        
                    });                    
                }
            });

    });

    pokemons.map((val) =>
    {
        console.log(val.nome);
    })
});

function nomeCapitalizado(nome)
{
    return nome.charAt(0).toUpperCase() + nome.slice(1);
}