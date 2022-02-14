const BASE_URL = 'https://data.cityofnewyork.us/resource/erm2-nwe9.json'
const brooklyn = '?agency=NYPD&borough=BROOKLYN'
const queens = '?agency=NYPD&borough=QUEENS'
const staten = '?agency=NYPD&borough=STATEN ISLAND'
const bronx = '?agency=NYPD&borough=BRONX'
const manhattan = '?agency=NYPD&borough=MANHATTAN'
const div = document.querySelector('div')
const resolution = document.querySelector('resolution_description')

const buttonBrooklyn = document.querySelector('#brooklyn')
const buttonManhattan = document.querySelector('#manhattan')
const buttonQueens = document.querySelector('#queens')
const buttonBronx = document.querySelector('#bronx')
const buttonStaten = document.querySelector('#staten')


let userInput = document.querySelector('input');

function results(array){
    console.log(array)
    for(let i = 0; i < array.length; i++) {

        let description = array[i].resolution_description;
        div.innerHTML += `<ul><li>${array[i].complaint_type}</li></ul>`;
        div.innerHTML += `<button onlick= 'addedInfo()'id = 'moreInfo'>What did the Police Do?</button>`;
        console.log(description)
    }
}

buttonBrooklyn.addEventListener('click', async () => {
    let baseInput = userInput.value;
    if(baseInput == ''){
        baseInput = 10
    }
    try{
        let response = await axios.get(`${BASE_URL}${brooklyn}&$limit=${baseInput}`);
        let answer = response.data
        console.log(answer)
        results(answer)
    }
    catch (error){
        console.log(error)
    }
})

buttonQueens.addEventListener('click', async () => {
    let baseInput = userInput.value;
    if(baseInput == ''){
        baseInput = 10
    }
    try{
        let response = await axios.get(`${BASE_URL}${queens}&$limit=${baseInput}`);
        let answer = response.data
        console.log(answer)
        results(answer)
    }
    catch (error){
        console.log(error)
    }
})

buttonBronx.addEventListener('click', async () => {
    let baseInput = userInput.value;
    if(baseInput == ''){
        baseInput = 10
    }
    try{
        let response = await axios.get(`${BASE_URL}${bronx}&$limit=${baseInput}`);
        let answer = response.data
        console.log(answer)
        results(answer)
    }
    catch (error){
        console.log(error)
    }
})


buttonManhattan.addEventListener('click', async () => {
    let baseInput = userInput.value;
    if(baseInput == ''){
        baseInput = 10
    }
    try{
        let response = await axios.get(`${BASE_URL}${manhattan}&$limit=${baseInput}`);
        let answer = response.data
        console.log(answer)
        results(answer)
    }
    catch (error){
        console.log(error)
    }
})

buttonStaten.addEventListener('click', async () => {
    let baseInput = userInput.value;
    if(baseInput == ''){
        baseInput = 10
    }
    try{
        let response = await axios.get(`${BASE_URL}${staten}&$limit=${baseInput}`);
        let answer = response.data
        console.log(answer)
        results(answer)
    }
    catch (error){
        console.log(error)
    }
})





// const section = document.querySelector(".ComplaintList")
// const il = document.createElement("ul")
// section.appendChild(ul)

// function showList(array) {
//     for(let i = 0; i< array.length; i++){
//         il.innerHTML += `<li>${array[i].descriptor}<button id = '${i}'class = "police"> WHAT DID THE POLICE DO?</button></li>`
//         ul.innerHTML == `div id = 'info' class = 'hidden'>${array[i].resolution_descriptio}</div>'
//     }  

//     const info = document.querySelector('#info')
//     new_button = document.querySelector.Selector('.police')
//     new_button.forEach(i => {
//     i.addEventListener('click',()=>{
//         info[i.id].classList.toggle('hidden')
//     })
// })
// }
