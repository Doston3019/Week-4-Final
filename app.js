//API 1: https://omdbapi.com/?s=searchValue&apikey=1de8a72c

function handleSearch(event) {
    //const searchValue = event.target.value
    const input = document.getElementsByClassName("search-input")[0];
    const searchValue = input.value;
    if(event.type === 'change'){
        console.log("Change event triggered with value:", searchValue);
    }
    else if(event.type === 'click') {
        console.log("Click event triggered with value:", searchValue);
    }
    fetchData(searchValue);
}

const moviesWrapper = document.querySelector(".movies__wrapper");
async function fetchData(searchValue) {
   try {
    const res = await fetch(`https://omdbapi.com/?s=${searchValue}&apikey=1de8a72c`)
    const data = await res.json();
    console.log (data.Search);
    if (!data.Search) {
        moviesWrapper.innerHTML = "<p>No results found</p>";
        return;
    }
    moviesWrapper.innerHTML = data.Search.map((movie) => {
        return `<div class="movie__container">
                <h1 class="movie-title">${movie.Title}</h1>
                <p class="movie-year">Year: <span>${movie.Year}</span></p>
                <p class="movie-imdbid">IMDB ID: <span>${movie.imdbID}</span></p>
                <img class="movie__img" src="${movie.Poster}" alt="">
            </div>`
    }).join ("");
    
}   catch (err) {
    console.log(err)
}
}

document.querySelector(".search-button").addEventListener("click",handleSearch);