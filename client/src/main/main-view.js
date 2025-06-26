import { manageSearchInput } from './main.js';
export class MainView {
    actorTemp;
    infoBoxA;
    mediaTemp;
    characterTemp;
    resetButton;
    searchInput;
    constructor() {
        this.infoBoxA = document.getElementById('infoBoxA');
        this.actorTemp = document.getElementById('actorTemp');
        this.mediaTemp = document.getElementById('mediaTemp');
        this.characterTemp = document.getElementById('characterTemp');
        this.searchInput = document.getElementById('searchBar');
        this.resetButton = document.getElementById('resetButton');
        //let mediaTemp = document.querySelector('#mediaTemp') as HTMLTemplateElement | null;
        if (this.resetButton) {
            this.resetButton.addEventListener('click', async (e) => {
                this.resetSearch();
            });
        }
        if (this.searchInput) {
            this.searchInput.addEventListener('keyup', async (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault(); // good practice
                    if (this.searchInput) {
                        await manageSearchInput(this.searchInput.value);
                    }
                }
            });
        }
    }
    resetSearch() {
        this.resetSearchResults();
        if (this.searchInput) {
            this.searchInput.value = '';
        }
    }
    resetSearchResults() {
        if (this.infoBoxA) {
            this.infoBoxA.innerText = '';
        }
    }
    showActors(actors) {
        if (this.actorTemp && this.infoBoxA) {
            for (let i = 0; i < actors.length; i++) {
                const clone = document.importNode(this.actorTemp.content, true);
                let rootDiv = clone.firstElementChild;
                if (rootDiv) {
                    let itemEl = rootDiv.querySelector('.name');
                    if (itemEl) {
                        itemEl.textContent = actors[i].name;
                        itemEl.href = 'http://localhost:3000/infoPage/infoPage.html?actorId=' + actors[i].id;
                    }
                    else {
                        console.error('Title element not found in the template');
                    }
                }
                this.infoBoxA.append(clone);
                console.log('Template content added to the body');
            }
        }
        else {
            console.log('template not found');
        }
    }
    showMedia(media) {
        if (media.length > 0) {
            if (this.mediaTemp && this.infoBoxA) {
                for (let i = 0; i < media.length; i++) {
                    const clone = document.importNode(this.mediaTemp.content, true);
                    let rootDiv = clone.firstElementChild;
                    if (rootDiv) {
                        let itemEl = rootDiv.querySelector('.title');
                        if (itemEl) {
                            itemEl.textContent = media[i].titleMain;
                            itemEl.href = 'http://localhost:3000/infoPage/infoPage.html?mediaId=' + media[i].id;
                        }
                        else {
                            console.error('Title element not found in the template');
                        }
                    }
                    this.infoBoxA.append(clone);
                    console.log('Template content added to the body');
                }
            }
            else {
                console.log('template not found');
            }
        }
    }
    showCharacter(character) {
        if (character.length > 0) {
            if (this.characterTemp && this.infoBoxA) {
                for (let i = 0; i < character.length; i++) {
                    const clone = document.importNode(this.characterTemp.content, true);
                    let rootDiv = clone.firstElementChild;
                    if (rootDiv) {
                        let itemEl = rootDiv.querySelector('.name');
                        if (itemEl) {
                            itemEl.textContent = character[i].name;
                            itemEl.href = 'http://localhost:3000/infoPage/infoPage.html?characterId=' + character[i].id;
                        }
                        else {
                            console.error('Name element not found in the template');
                        }
                    }
                    this.infoBoxA.append(clone);
                    console.log('Template content added to the body');
                }
            }
            else {
                console.log('character template not found');
            }
        }
    }
}
//# sourceMappingURL=main-view.js.map