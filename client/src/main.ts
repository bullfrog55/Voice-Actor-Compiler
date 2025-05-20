import {DataAccess} from './DataAccess.js';

let dataAccess = new DataAccess();

let searchBar = document.getElementById('searchBar');
let searchButton = document.getElementById('searchButton');
let searchInput = searchBar as HTMLInputElement;
let infoBox = document.getElementById('infoBox');
let resetButton = document.getElementById('resetButton');

if (searchButton) {
    searchButton.addEventListener('click', async (e) => {
        await manageSearchInput();
    });

}

if (resetButton) {

    resetButton.addEventListener('click', async (e) => {
        resetSearch();
    });
}

function resetSearch() {

    if (infoBox) {
        infoBox.innerText = '';
    }

    if (searchInput) {
        searchInput.value = '';
    }

}

export async function manageSearchInput() {


    let userInput;
    if (searchBar && infoBox) {
        userInput = searchInput.value;
        let getActor = await dataAccess.getActor(userInput);
        console.log(getActor);
        infoBox.innerText = JSON.stringify(getActor);
    } else {
        console.log('gotta make the search bar dummy');
    }


}

//Takehito Koyasu