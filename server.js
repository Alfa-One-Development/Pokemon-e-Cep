const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express()
const PORT = 4000

app.use(cors())

app.get("/pokemon/:name", async (req,res) => {
    const pokemonName = req.params.name;

    try {
        const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
        const response = await axios.get(url);
        const pokemon = response.data;

        const pokemonData = {
            name: pokemon.name,
            height: pokemon.height / 10,
            weight: pokemon.weight / 10,
            abilities : pokemon.abilities.map((ability) => ability.ability.name).join(", "),
            types: pokemon.types.map((type) => type.type.name).join(", "),
            image: pokemon.sprites.front_default,
            imageShiny: pokemon.sprites.front_shiny
        }

        res.json(pokemonData);

    } catch (error) {
        res.status(500).json({error: "ERRO AO BUSCAR POKEMON!!!"});
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})


const appcep = express()
const PORTcep = 3000

appcep.use(cors())

appcep.get("/endereco/:cep", async (req,res) => {
    const cep = req.params.cep;

    try {
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
        if (response.data.erro) {
            return res.status(404).json({erro: "CEP NÃO ENCONTRADO!!!"});
        }
        res.json(response.data);
    } catch (error) {
        res.status(500).json({error: "ERRO AO BUSCAR ENDEREÇO!!!"});
    }
});

appcep.listen(PORTcep, () => {
    console.log(`Servidor rodando em http://localhost:${PORTcep}`)
})