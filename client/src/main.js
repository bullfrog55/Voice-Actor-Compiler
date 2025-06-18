import { DataAccess } from './DataAccess.js';
import { MainView } from './main-view.js';
let dataAccess = new DataAccess();
let mainView = new MainView();
export async function manageSearchInput(searchInput) {
    mainView.resetSearchResults();
    let getMedia = await dataAccess.getMedia(searchInput);
    let getActor = await dataAccess.getActors(searchInput);
    let getCharacter = await dataAccess.getCharacter(searchInput);
    console.log(getMedia);
    console.log(getActor);
    console.log(getCharacter);
    mainView.showMedia(getMedia);
    mainView.showActors(getActor);
    mainView.showCharacter(getCharacter);
}
//Takehito Koyasu
//# sourceMappingURL=main.js.map