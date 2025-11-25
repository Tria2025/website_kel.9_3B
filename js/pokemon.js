let pokemonData = [];
let perPage = 24;
let currentPage = 1;

async function loadPokemon() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=200");
  const data = await res.json();

  pokemonData = [];

  for (const poke of data.results) {
    const detail = await fetch(poke.url).then(r => r.json());
    pokemonData.push({
      name: poke.name,
      sprite: detail.sprites.front_default,
      types: detail.types.map(t => t.type.name)
    });
  }

  displayPokemon();
  document.getElementById("loading").style.display = "none";
}

function displayPokemon() {
  const list = document.getElementById("pokemonList");
  list.innerHTML = "";

  const start = (currentPage - 1) * perPage;
  const end = start + perPage;
  const pagePokemon = pokemonData.slice(start, end);

  pagePokemon.forEach(p => {
    const types = p.types
      .map(t => `<span class='badge'>${t}</span>`)
      .join(" ");

    list.innerHTML += `
      <div class="card" onclick="location.href='detail.html?name=${p.name}'">
        <img src="${p.sprite}">
        <h3>${p.name.toUpperCase()}</h3>
        <div>${types}</div>
      </div>
    `;
  });
}

function nextPage() {
  if ((currentPage * perPage) < pokemonData.length) {
    currentPage++;
    displayPokemon();
  }
}

function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    displayPokemon();
  }
}

loadPokemon();