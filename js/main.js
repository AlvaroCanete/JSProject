/* fetch(`https://pokeapi.co/api/v2/pokemon`)
.then((response) => response.json())
.then((data) => {
let boton = document.getElementById("Boton");
boton.addEventListener('click', event => {
alert(data.results[Math.floor(Math.random() * data.results.length)].name)
});

}) */
function buscarArtista () {
    const resultado = document.getElementById ('result');
    const search = document.getElementById ('search').value;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'ae0903db05mshf373443c06c2170p10cac4jsnc0f180788923',
            'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
        }
    };
    
    fetch('https://spotify23.p.rapidapi.com/search/?q=' + search + '&type=playlist&offset=0&limit=10&numberOfTopResults=5', options)
        .then(response => response.json())
        .then((response) => {
            resultado.innerHTML= "";
                for(i=0; i<5; i++){
                    //console.log(response['playlists']['items'][i]['data']['name'])
                    let divResult = document.createElement("div")
                    divResult.className= "col-md-2 mx-3 my-2"
                    let portada = document.createElement('img');
                    portada.src = response['playlists']['items'][i]['data']['images']['items'][0]['sources'][0]['url']
                    portada.alt = response['playlists']['items'][i]['data']['name']
                    let link = document.createElement('a');
                    link.href =response['playlists']['items'][i]['data']['uri']
                    link.target = "blank";
                    portada.className = "img-fluid "
                    divResult.appendChild(link);
                    link.appendChild(portada);
                    resultado.appendChild(divResult);
                }
            
        })
        .catch(err => console.error(err));
}

function clean() {
    const resultado = document.getElementById ('result');
    resultado.innerHTML= "";
    resultado.innerHTML=`<div class="spinner-grow" role="status">
    <span class="visually-hidden">Loading...</span>
    </div>`;
    
}

function searching(){
    clean();
    buscarArtista();
}

const search = document.getElementById("boton");
search.addEventListener("click", searching);

