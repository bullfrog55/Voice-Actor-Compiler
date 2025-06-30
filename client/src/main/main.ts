import {DataAccess} from '../DataAccess.js';
import {MainView} from './main-view.js';
const apiURL :string = "http://localhost:3001";
let dataAccess = new DataAccess(apiURL);
let mainView = new MainView(apiURL);



export async function manageSearchInput(searchInput: string) {
    mainView.resetSearchResults();
    let getMedia = await dataAccess.getMediaByTitle(searchInput);
    let getActor = await dataAccess.getActorsByName(searchInput);
    let getCharacter = await dataAccess.getCharacterByName(searchInput);
    console.log('media that was got', getMedia);
    console.log('actors that were got', getActor);
    console.log('characters that were got', getCharacter);
    //this line calls showMedia which takes an array of medias and makes the links that when clicked go to the individual pages for each media
    mainView.showMedia(getMedia);
    //this line calls showActor which takes an array of actors and makes the links that when clicked go to the individual pages for each actor
    mainView.showActors(getActor);
    //this line calls showCharacter which takes an array of characters and makes the links that when clicked go to the individual pages for each character
    mainView.showCharacter(getCharacter);
}

function toInfoPage() {
    let infoPage = document.getElementById('infoPage');
    if (infoPage) {
        infoPage.style.display = 'block';
    }
}

//Takehito Koyasu