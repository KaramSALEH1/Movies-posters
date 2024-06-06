// My API : "c528a6c3541777eb32f82f02dd1ede87"

const APILINK = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=c528a6c3541777eb32f82f02dd1ede87&page=1';
const IMG_PATH ='https://image.tmdb.org/t/p/w1280';
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=c528a6c3541777eb32f82f02dd1ede87&query=";

const main = document.querySelector("#section");
const form = document.querySelector("#form");
const search = document.querySelector("#query");

returnMovie(APILINK); 
function returnMovie(url){
    fetch(url).then(res => res.json())
    .then(function(data){
        console.log(data.results);
        data.results.forEach(Element =>{
            const div_card = document.createElement('div');
            div_card.setAttribute('class' , 'card');
            const div_row = document.createElement('div');
            div_row.setAttribute('class','row');
            const div_column = document.createElement('div');
            div_column.setAttribute('class' , 'column');
            const image = document.createElement('img');
            image.setAttribute('class', 'thumbnail');
            const title = document.createElement('h3');
            title.setAttribute('id', 'title');
            const center = document.createElement('center');

            title.innerHTML = `${Element.title}`;
            image.src = IMG_PATH + Element.poster_path;

            center.appendChild(image);
            div_card.appendChild(center);
            div_card.appendChild(title);
            div_column.appendChild(div_card);
            div_row.appendChild(div_column);
            main.appendChild(div_row);
        });
    }); 
}

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    main.innerHTML ='';

    const searchItem = search.value;
    if(searchItem){
        returnMovie(SEARCHAPI + searchItem);
        search.value = "";
    }
})