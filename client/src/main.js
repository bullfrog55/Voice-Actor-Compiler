import { DataAccess } from './DataAccess.js';
let dataAccess = new DataAccess();
let searchBar = document.getElementById('searchBar');
let searchButton = document.getElementById('searchButton');
let searchInput = searchBar;
let infoBox = document.getElementById('infoBox');
let resetButton = document.getElementById('resetButton');
if (searchInput) {
    searchInput.addEventListener('keyup', async (e) => {
        if (e.key === 'Enter') {
            e.preventDefault(); // good practice
            await manageSearchInput();
        }
    });
}
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
        let getMedia = await dataAccess.getMedia(userInput);
        let getActor = await dataAccess.getActors(userInput);
        console.log(getMedia);
        console.log(getActor);
        let stringifiedMedia; //= JSON.stringify(getMedia);
        let stringifiedActor; //= JSON.stringify(getActor);
        if (getActor.length > 0) {
            stringifiedActor = JSON.stringify(getActor);
        }
        else {
            stringifiedActor = 'no actor by that name found';
        }
        if (getMedia.length > 0) {
            stringifiedMedia = JSON.stringify(getMedia);
        }
        else {
            stringifiedMedia = 'no media by that title found';
        }
        //JSON.stringify(getActor);
        let allData = `${stringifiedActor}, ${stringifiedMedia}`;
        infoBox.innerText = allData;
    }
    else {
        console.log('gotta make the UI dummy');
    }
}
//Takehito Koyasu
//# sourceMappingURL=main.js.map