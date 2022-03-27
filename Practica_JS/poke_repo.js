let windowWidth = window.innerWidth,
  windowHeight = window.innerHeight,
  section = document.querySelector("section"),
  pokeDisplay = document.querySelector(".pokeDisplay");

section.style.height = `${windowHeight}px`;

let pokedex = document.querySelector("#pokedex");
pokeDisplay.style.width = pokedex.width + "px";
pokeDisplay.style.height = pokedex.height + "px";

const fetchPokemon = () => {
  const pokeNameInput = document.getElementById("pokeName");
  let pokeName = pokeNameInput.value;
  pokeName = pokeName.toLowerCase();
  const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
  fetch(url)
    .then((res) => {
      if (res.status != "200") {
        console.log(res);
        pokeImage("./pokemon-sad.gif");
      } else {
        return res.json();
      }
    })
    .then((data) => {
      if (data) {
        console.log(data);
        let pokeImg = data.sprites.front_default,
        namePoke = data.name,
        id = data.id,
        type = data.types,
        abts = data.abilities,
        stats = data.stats;
        pokeInfo(type, abts, stats);
        pokeImage(pokeImg);
        console.log(pokeImg);
        pokeName(namePoke);
        console.log(namePoke);
      }
    });
};

const pokeImage = (url) => {
  const pokePhoto = document.getElementById("pokeImg");
  pokePhoto.src = url;
};

const pokeInfo = (type, qbts, stats) => {

  let pokeType = document.querySelector(".pokeType");
  pokeAbts = document.querySelector(".pokeAbts"),
  hp = document.querySelector("#hp"),
  atk = document.querySelector("#atk"),
  def = document.querySelector("#def"),
  spatk = document.querySelector("#spatk"),
  spdef = document.querySelector("#spdef"),
  speed = document.querySelector("#speed");
  console.log(type);
  pokeType.innerText = '';
type.forEach(data => {
  pokeType.innerText += data.type.name + " | ";
});

}
