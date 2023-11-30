async function getAnimes() {
  try {
      const response = await axios.get('https://api.jikan.moe/v4/anime');
      const animes = response.data.data;

      animes.forEach(anime => {
        let p = document.createElement("p");
        let nome = document.createTextNode("*   " + anime.title);
        p.appendChild(nome);
        dados.appendChild(p);
      });
      
  } catch (error) {
      console.error(error);
  }
}

getAnimes();