import {IActor, IMedia, ICharacter} from '../../server/src/types.js';
import {manageSearchInput} from './main.js';

export class MainView {
    private actorTemp: HTMLTemplateElement | null;
    private infoBoxA: HTMLElement | null;
    private mediaTemp: HTMLTemplateElement | null;
    private characterTemp: HTMLTemplateElement | null;
    private resetButton: HTMLButtonElement | null;
    private searchInput: HTMLInputElement | null;
   

    constructor() {

        this.infoBoxA = document.getElementById('infoBoxA');
        this.actorTemp = document.getElementById('actorTemp') as HTMLTemplateElement | null;
        this.mediaTemp = document.getElementById('mediaTemp') as HTMLTemplateElement | null;
        this.characterTemp = document.getElementById('characterTemp') as HTMLTemplateElement | null;
        this.searchInput = document.getElementById('searchBar') as HTMLInputElement;
        this.resetButton = document.getElementById('resetButton') as HTMLButtonElement | null;

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

    showActors(actors: IActor[]) {
        if (this.actorTemp && this.infoBoxA) {
            for (let i = 0; i < actors.length; i++) {
                const clone = document.importNode(this.actorTemp.content, true);
                let rootDiv = clone.firstElementChild as HTMLDivElement | null;
                if (rootDiv) {
                    let itemEl = rootDiv.querySelector('.name') as HTMLSpanElement | null;
                    if (itemEl) {
                        itemEl.textContent = actors[i].name;
                    } else {
                        console.error('Title element not found in the template');
                    }

                }
                this.infoBoxA.append(clone);
                console.log('Template content added to the body');
            }

        } else {
            console.log('template not found');
        }
    }

    showMedia(media: IMedia[]) {
        if (media.length > 0) {
            if (this.mediaTemp && this.infoBoxA) {
                for (let i = 0; i < media.length; i++) {
                    const clone = document.importNode(this.mediaTemp.content, true);
                    let rootDiv = clone.firstElementChild as HTMLDivElement | null;
                    if (rootDiv) {
                        let itemEl = rootDiv.querySelector('.title') as HTMLSpanElement | null;
                        if (itemEl) {
                            itemEl.textContent = media[i].titleMain;
                        } else {
                            console.error('Title element not found in the template');
                        }

                    }
                    this.infoBoxA.append(clone);
                    console.log('Template content added to the body');
                }

            } else {
                console.log('template not found');
            }
        }
    }
    
    showCharacter(character: ICharacter[]){
        if (character.length > 0) {
            if (this.characterTemp && this.infoBoxA) {
                for (let i = 0; i < character.length; i++) {
                    const clone = document.importNode(this.characterTemp.content, true);
                    let rootDiv = clone.firstElementChild as HTMLDivElement | null;
                    if (rootDiv) {
                        let itemEl = rootDiv.querySelector('.name') as HTMLSpanElement | null;
                        if (itemEl) {
                            itemEl.textContent = character[i].name;
                        }else{
                            console.error('Name element not found in the template');
                        }
                    }
                    this.infoBoxA.append(clone);
                    console.log('Template content added to the body');
                }
            }else{
                console.log('character template not found');
            }
        }
    }
}