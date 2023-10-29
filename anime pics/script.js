const btnEl = document.getElementById("btn");
const animeContainerEl = document.querySelector(".anime-container");
const animeImgEl = document.querySelector(".anime-img");
const amineNameEl = document.querySelector(".anime-name");

btnEl.addEventListener("click", async function () {
  try {
    btnEl.disabled = true;
    btnEl.innerText = "Loading...";
    amineNameEl.innerText = "Updating...";
    animeImgEl.src = "spinner.svg";
    const response = await fetch("https://nekos.best/api/v2/neko");
    const data = await response.json();
    btnEl.disabled = false;
    btnEl.innerText = "Get Anime";
    animeContainerEl.style.display = "block";
    animeImgEl.src = data.results[0].url;
    amineNameEl.innerText = data.result[0].artist_name;
  } catch (error) {
    console.log(error);
    btnEl.disabled = false;
    btnEl.innerText = "Get Anime";
    amineNameEl.innerText = "An error happened, please try again";
  }
});
