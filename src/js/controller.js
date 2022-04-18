// let render = function(){
//   let html = `
//   <a href="${}"
//   `
// }
let cards = document.querySelector(".cards");
let search = document.querySelector("input");
let btn = document.querySelector("button");
let grid = document.querySelector(".grid");
let title = document.querySelector(".resauld");
let movie = async function (name) {
  let res = await fetch(`https://www.omdbapi.com/?apikey=1fd18c03&s=${name}`);
  let data = await res.json();
  console.log(data.Search[0].Poster);
  for (let i = 0; i < data.Search.length; i++) {
    let html = `<div class="card-section">
        <img
          src="${data.Search[i].Poster}"
          alt="rasmi yuq"
        />
        <h2>${data.Search[i].Title}</h2>
        <p>${data.Search[i].Year}</p>
      </div>`;
    cards.insertAdjacentHTML("afterbegin", html);
  }
};
btn.addEventListener("click", function () {
  let cinima = search.value;
  cards.innerHTML = "";
  movie(cinima);
  title.classList.remove("none");

 });

