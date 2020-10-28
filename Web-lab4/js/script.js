let films=[{
        "reward_year": 2009,
        "film_duration": 130,
        "filmname": "Titanic",
        "num_of_responces": 800,
        "reward": "Best music" 
    },
    {
        "reward_year": 2011,
        "film_duration": 120,
        "filmname": "Electronic",
        "num_of_responces": 123,
        "reward": "Best female role" 
    },
    {
        "reward_year": 2015,
        "film_duration": 150,
        "filmname": "Transformers",
        "num_of_responces": 333,
        "reward": "Best male role" 
    },
    {
        "reward_year": 2005,
        "film_duration": 180,
        "filmname": "Reefer",
        "num_of_responces": 200,
        "reward": "Best directed film" 
    },
    {
        "reward_year": 2018,
        "film_duration": 210,
        "filmname": "Goal",
        "num_of_responces": 400,
        "reward": "Best special effects" 
    },
    {
        "reward_year": 2010,
        "film_duration": 240,
        "filmname": "New Caledonia",
        "num_of_responces": 320,
        "reward": "Best cast" 
    },
]

const myfilms = document.getElementById("myfilms")
function displayfilms(films){
    let innerItem = "";
    films.forEach(item => {
        innerItem+=`<div class="films-pair">
        <div class="films-pair__image"></div>
        <h1 class="films-pair__title">This film</h1>
        <p class="films-pair__paragraph" id="film_paragraph">A film ${item.filmname}, 
        its duration: ${item.film_duration} minutes. 
        Film's number of responces on IMDB is ${item.num_of_responces}.
        Film was given an Oscar reward in ${item.reward_year} 
        in nomination: ${item.reward}.
        </p>
        <div class="edit-remove__buttons">
            <button class="edit" onclick="goToEditPage()">Edit</button>
            <button class="remove">Remove</button>
        </div>
    </div>`;});
    myfilms.innerHTML=innerItem;
}

displayfilms(films);

// function findfilms(){
//     let foundItem = document.getElementById("typedfilms").value;
//     let foundList=[];
//     films.forEach(item => {
//         if(item.filmname.includes(foundItem) ||
//          item.film_duration == foundItem || item.num_of_responces == foundItem ){
//             foundList.push(item)
//         }
//     });
// let foundItem = document.getElementById("typedfilms").value;
// let item_from_list = document.getElementsByClassName("films-pair__paragraph").value;
// let foundList=[];
// for (i = 0; i < films.length; i++) {
//     if(item_from_list.includes(foundItem) ){
//         foundList.push(item)
//     }
// };
    const searchButton = document.getElementById("SearchButton");
    searchButton.addEventListener("click", (event) =>{
        event.preventDefault();
    
        let foundItem = document.getElementById("typedfilms").value;
        let foundList=[];
        films.forEach(item => {
        if(item.filmname.includes(foundItem) ||
        item.film_duration == foundItem || item.num_of_responces == foundItem ){
            foundList.push(item)
            }
        });
    displayfilms(foundList);
    let filmsResponces=0;
    foundList.forEach(item =>{
        filmsResponces+=item.num_of_responces;
    });
    document.getElementById("resultResponces").innerHTML=filmsResponces;
    });

function cleanfilms(){
    document.getElementById("typedfilms").value="";
    displayfilms(films);
}

function sortfilms(){
    films.sort(function(obj1, obj2) {
        if(obj1.film_duration > obj2.film_duration){
            return 1;
        }
        return -1;
    });
    displayfilms(films);
}

function countFilmsResponces(){
    let filmsResponces=0;
    films.forEach(item =>{
        filmsResponces+=item.num_of_responces;
    });
    document.getElementById("resultResponces").innerHTML=filmsResponces;
}

function goToEditPage() {
    window.location = "/edit-film.html";
}