async function fetchTop10(){
    const pokemonListElement = document.getElementById("pokemonList")

    const numero1 = prompt("Digite o numero em que deseja começar a lista:")
    const numero = prompt("Digite a quantidade de pokemons que deseja ver:")

    
    for (let i = numero1; i <= numero; i++) {
        try{


            const response = await fetch(`http://localhost:4000/pokemon/${i}`)
            if (!response.ok) throw new Error("Erro ao buscar dados do pokemon")
            const data = await response.json()

            const pokemonCard = document.createElement("div")
            pokemonCard.className = "pokemon-card"

            const pokemonImage = document.createElement("img")
            pokemonImage.src = data.image
            pokemonImage.alt = `Imagem de ${data.name}`
            pokemonImage.className = "pokemon-image"


            const pokemonName = document.createElement("h3")
            pokemonName.textContent = data.name

            const pokemonTypes = document.createElement('p')
            pokemonTypes.textContent = `Tipos: ${data.types}`

            pokemonCard.appendChild(pokemonImage)
            pokemonCard.appendChild(pokemonName)
            pokemonCard.appendChild(pokemonTypes)

            pokemonListElement.appendChild(pokemonCard)
        } catch (error) {
            console.error("Erro ao Buscar dados do Pokémon:", error)
        }
        }
    }
    
    fetchTop10()