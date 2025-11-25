const typeColors = {
  fire: "#F08030",
  water: "#6890F0",
  grass: "#78C850",
  electric: "#F8D030",
  bug: "#A8B820",
  normal: "#A8A878",
  poison: "#A040A0",
  fairy: "#F0B6BC",
  psychic: "#F85888",
  rock: "#B8A038",
  ground: "#E0C068",
  ice: "#98D8D8",
  dragon: "#7038F8",
  dark: "#705848",
  steel: "#B8B8D0",
  ghost: "#705898",
  fighting: "#C03028",
  flying: "#A890F0"
};

async function loadDetail() {
  const name = new URLSearchParams(location.search).get("name");
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const p = await res.json();

  const typeName = p.types[0].type.name;
  const bgColor = typeColors[typeName] || "#70A6FF";

  // Background menyesuaikan tipe
  document.body.style.background = bgColor;

  // Abilities badge
  const abilities = p.abilities
    .map(a => `<span class="badge">${a.ability.name}</span>`)
    .join("");

  // Stats bar
  const maxStat = 255;
  const stats = p.stats
    .map(s => {
      const percent = (s.base_stat / maxStat) * 100;
      return `
        <div class="stat-row">
          <span>${s.stat.name.toUpperCase()} (${s.base_stat})</span>
          <div class="stat-bar">
            <div class="stat-progress" style="width:${percent}%"></div>
          </div>
        </div>
      `;
    })
    .join("");

  document.getElementById("detail").innerHTML = `
    <div class="detail-card">
      <h1>${p.name.toUpperCase()}</h1>

      <img src="${p.sprites.other["official-artwork"].front_default}" 
           class="detail-image">

      <p><b>Type:</b> ${typeName.toUpperCase()}</p>
      <p><b>Height:</b> ${p.height}</p>
      <p><b>Weight:</b> ${p.weight}</p>

      <h3 style="margin-top:20px;">Abilities</h3>
      ${abilities}

      <h3 style="margin-top:30px;">Stats</h3>
      ${stats}

      <center style="margin-top:25px;">
        <a href="pokemon.html">
          <button class="back-btn">⬅ Back to Pokédex</button>
        </a>
      </center>
    </div>
  `;
}

loadDetail();