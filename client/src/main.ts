import {DataAccess} from './DataAccess.js';

let dataAccess = new DataAccess();

let searchBar = document.getElementById('searchBar');
let searchButt = document.getElementById('searchButt');
let searchInput = searchBar as HTMLInputElement;
let infoBox = document.getElementById('infoBox');

if (searchButt) {
    searchButt.addEventListener('click', async (e) => {
        await manageSearchInput();
    });

}

export async function manageSearchInput() {

    let userInput;
    if (searchBar) {
        userInput = searchInput.value;
        let getActor = await dataAccess.getActor(userInput);
        console.log(getActor);
    } else {
        console.log('gotta make the search bar dummy');
    }

}
//Takehito Koyasu