async function fetchPokemon() {
    const pokemonName = document.getElementById("pokemonName").value.trim();
    if (!pokemonName) {
      document.getElementById("errorMessage").textContent = " PLEASE ENTER A POKEMON NAME OR ID";
      document.getElementById("errorMessage").style.display = "block";
    }

    document.getElementById("errorMessage").style.display = "none";
    document.getElementById("loadingMessage").style.display = "block";

    try {

      const response = await fetch(
        `http://localhost:4000/pokemon/${pokemonName.toLowerCase()}`
      );

      if (!response.ok) throw new Error("POKEMON NOT FOUND");
     
      const data = await response.json();
      console.log(data);

      document.getElementById("pokemonInfo").style.display = "block";
      document.getElementById("pokemonTitle").textContent = data.name;
      document.getElementById("pokemonImage").src = data.image;
      document.getElementById("pokemonImage").alt = `Image of ${data.name}`;
      document.getElementById("pokemonImageShiny").src = data.imageShiny;
      document.getElementById("pokemonImageShiny").alt = `Image of ${data.name}`;
      document.getElementById("pokemonHeight").textContent = data.height;
      document.getElementById("pokemonWeight").textContent = data.weight;
      document.getElementById("pokemonAbilities").textContent = data.abilities;
      document.getElementById("pokemonTypes").textContent = data.types;

    } catch (error) {

      document.getElementById("errorMessage").textContent = error.message;
      document.getElementById("errorMessage").style.display = "block";
      document.getElementById("pokemonInfo").style.display = "none";
   
    } finally {

      document.getElementById("loadingMessage").style.display = "none";

    }
  }