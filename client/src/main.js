import { DataAccess } from './DataAccess.js';
let dataAccess = new DataAccess();
let searchBar = document.getElementById('searchBar');
let searchButt = document.getElementById('searchButt');
let searchInput = searchBar;
if (searchButt) {
    searchButt.addEventListener('click', async (e) => {
        await manageSearchInput();
    });
}
export async function manageSearchInput() {
    let userInput;
    if (searchBar) {
        userInput = searchInput.value;
        console.log(await dataAccess.getActorAPI(userInput));
    }
    else {
        console.log('gotta make the search bar dummy');
    }
}
//Takehito Koyasu
//# sourceMappingURL=main.js.map