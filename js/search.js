function filterPokemon() {
  const keyword = document.getElementById("search").value.toLowerCase();
  const typeSel = document.getElementById("typeFilter").value;

  let filtered = pokemonData.filter(p => p.name.includes(keyword));

  if (typeSel !== "all") {
    filtered = filtered.filter(p => p.types.includes(typeSel));
  }

  renderFiltered(filtered);
}

function filterByType(type) {
  const keyword = document.getElementById("search").value.toLowerCase();

  let filtered = pokemonData;

  if (type !== "all") {
    filtered = filtered.filter(p => p.types.includes(type));
  }

  if (keyword.length > 0) {
    filtered = filtered.filter(p => p.name.includes(keyword));
  }

  renderFiltered(filtered);
}

function resetFilter() {
  document.getElementById("search").value = "";
  document.getElementById("typeFilter").value = "all";
  currentPage = 1;
  displayPokemon();
}

function renderFiltered(filtered) {
  const list = document.getElementById("pokemonList");
  list.innerHTML = "";

  filtered.forEach(p => {
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