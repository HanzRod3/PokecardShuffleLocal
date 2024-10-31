const pokemonData = [
  {
    name: "Pikachu",
    type: ["Electric"],
    hp: 35,
    attack: 55,
    defense: 40,
    speed: 90,
    image: "images/pikachu.png", // Replace with the actual image path
    color: "#FFD700",
  },
  {
    name: "Charmander",
    type: ["Fire"],
    hp: 39,
    attack: 52,
    defense: 43,
    speed: 65,
    image: "images/charmander.png", // Replace with the actual image path
    color: "#FF4500",
  },
  {
    name: "Squirtle",
    type: ["Water"],
    hp: 44,
    attack: 48,
    defense: 65,
    speed: 43,
    image: "images/squirtle.png", // Replace with the actual image path
    color: "#00BFFF",
  },
  {
    name: "Bulbasaur",
    type: ["Grass", "Poison"],
    hp: 45,
    attack: 49,
    defense: 49,
    speed: 45,
    image: "images/bulbasaur.png", // Replace with the actual image path
    color: "#7FFF00",
  },
];

let currentPokemonIndex = 0;

function displayPokemon(index) {
  const { name, type, hp, attack, defense, speed, image, color } =
    pokemonData[index];
  document.getElementById("pokemon-name").innerText = name;
  document.getElementById("pokemon-type").innerText = type.join(", ");
  document.getElementById("pokemon-hp").innerText = `HP: ${hp}`;
  document.getElementById("pokemon-attack").innerText = `Attack: ${attack}`;
  document.getElementById("pokemon-defense").innerText = `Defense: ${defense}`;
  document.getElementById("pokemon-speed").innerText = `Speed: ${speed}`;
  document.getElementById("pokemon-image").src = image;
  document.getElementById("card").style.backgroundColor = color;
}
displayPokemon(currentPokemonIndex);
document.getElementById("next-btn").addEventListener("click", () => {
  currentPokemonIndex = (currentPokemonIndex + 1) % pokemonData.length;
  displayPokemon(currentPokemonIndex);
});
