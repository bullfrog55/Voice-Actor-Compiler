import {DataAccess} from '../DataAccess.js';
import {MainView} from './main-view.js';

let dataAccess = new DataAccess();
let mainView = new MainView();

export async function manageSearchInput(searchInput: string) {
    mainView.resetSearchResults();
    let getMedia = await dataAccess.getMediaByTitle(searchInput);
    let getActor = await dataAccess.getActorsByName(searchInput);
    let getCharacter = await dataAccess.getCharacterByName(searchInput);
    console.log('media that was got', getMedia);
    console.log('actors that were got', getActor);
    console.log('characters that were got', getCharacter);
    mainView.showMedia(getMedia);
    mainView.showActors(getActor);
    mainView.showCharacter(getCharacter);
}

function toInfoPage() {
    let infoPage = document.getElementById('infoPage');
    if (infoPage) {
        infoPage.style.display = 'block';
    }
}

//Takehito Koyasu