# ⚡ Poké Power Pokédex Website App Rest Client

Kelompok: **9 Poké Power**
Mata Kuliah: Pengujian Perangkat Lunak
API Sumber Data: [PokeAPI](https://pokeapi.co/)
Tema: **Pokémon Modern REST Client Web Application**
Mode: **Multi Page Application (MPA)**

---

## 🎯 Tujuan Project

* Mengimplementasikan komunikasi data menggunakan **REST API**
* Menerapkan **Fetch API** untuk mengambil data real-time
* Membuat antarmuka web **interaktif, modern, dan responsif**
* Mengembangkan fitur pencarian, filter, serta detail item dinamis

---

## 🧩 Fitur Utama

| Fitur                                   | Status |
| --------------------------------------- | :----: |
| Fetch Pokémon List dari API             |    ✔   |
| Detail Pokémon (stats, sprite, ability) |    ✔   |
| Search Pokémon real-time                |    ✔   |
| Filter by Pokémon Type (Dropdown)       |    ✔   |
| Reset Filter Button                     |    ✔   |
| Pagination                              |    ✔   |
| Responsive UI (Desktop & Mobile)        |    ✔   |
| Dark Mode Toggle 🌙                     |    ✔   |
| Animasi hover pada card                 |    ✔   |
| Navigasi Multi Halaman                  |    ✔   |

---

## 🛠️ Teknologi yang Digunakan

* **HTML5**
* **CSS3**
* **JavaScript (Vanilla JS)**
* **Fetch API**
* Responsif Design
* RESTful API Integration

---

## ⚡ Struktur Halaman

| Halaman        | File                                        | Fitur                             |
| -------------- | ------------------------------------------- | --------------------------------- |
| Home           | `index.html`                                | Slider Pokémon, Generasi, Hero UI |
| Pokédex        | `pokemon.html` + `pokemon.js` + `search.js` | Search + Type Filter + Pagination |
| Detail Pokémon | `detail.html` + `detail.js`                 | Stats, Abilities, Image, Types    |
| About          | `about.html`                                | Profil Kelompok + Maskot Pokémon  |
| Global Theme   | `theme.js`                                  | Dark Mode Controller              |

---

## 👥 Pembagian Tugas Kelompok

| Nama                  | NIM        | Role                  | Halaman                            |
| --------------------- | ---------- | --------------------- | ---------------------------------- |
| **Tria Silviana**     | 2313030025 | UI Lead               | Home Page + Dark Mode (`theme.js`) |
| **Ananda Eva D.M**    | 2313030100 | Feature Developer     | Pokédex + Search + Filter          |
| **Vema Aulia**        | 2313030097 | Detail Page Developer | Detail Pokémon                     |
| **Diana Rahmawati**   | 2313030079 | Content & About Page  | About Page                         |

---

## 🔗 Cara Menjalankan Project

1. Download atau clone repo ini
2. Buka file:

   ```
   index.html
   ```
3. Pastikan komputer terhubung ke internet ☁
   karena data diambil langsung dari **PokeAPI**

---

## 🌐 Sumber Data API

* Endpoint Pokémon List
  `https://pokeapi.co/api/v2/pokemon`
* Endpoint Pokémon Detail
  `https://pokeapi.co/api/v2/pokemon/{name}`

---

## 🎨 Tampilan UI

> Menggunakan animasi, card style, badge type, dan desain playful khas Pokémon.

Screenshots akan ditambahkan setelah deployment ✨

---

## 💡 Rencana Pengembangan (Optional Future Work)

* Sort Pokémon by Stats A-Z / Height / Weight
* Generation / Region Filter
* Favorite Pokémon (LocalStorage)
* PWA Offline Mode Support

---

## ✨ Acknowledgements

Data Pokémon disediakan oleh **PokeAPI**

* Website: [https://pokeapi.co/](https://pokeapi.co/)
* Logo & Asset resmi Pokémon

Terima kasih 😊🔥⚡
*Disusun oleh Kelompok 9 Poké Power*
