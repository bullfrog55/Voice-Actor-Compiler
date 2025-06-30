import { manageSearchInput } from './main.js';
export class MainView {
    actorTemp;
    apiURL;
    characterTemp;
    infoBoxA;
    mediaTemp;
    resetButton;
    searchInput;
    constructor(apiURL) {
        this.apiURL = apiURL;
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
        //if actorTemp and infoBoxA exist
        if (this.actorTemp && this.infoBoxA) {
            //loop over the input actor array
            for (let i = 0; i < actors.length; i++) {
                //create a const called clone that contains the HTML element actorTemp and all of its children
                const clone = document.importNode(this.actorTemp.content, true);
                //setting the first element of clone (a div) to variable rootDiv and asserting the type as either HTMLDivElement or null
                let rootDiv = clone.firstElementChild;
                //if rootDiv (the first child of clone) exists (not undefined) then...
                if (rootDiv) {
                    //putting the first descendant of rootDiv (which is an <a> tag) to variable itemEl and asserting that it is a HTMLAnchorElement or null. very similar to line 66
                    let itemEl = rootDiv.querySelector('.name');
                    //if itemEl (<a> tag) exists then...
                    if (itemEl) {
                        //set the text content of itemEl (<a> tag)
                        itemEl.textContent = actors[i].name;
                        //set the href of itemEl (<a> tag). this is the link that is clicked on in the page and where different id's are assigned due to looping over each actor
                        itemEl.href = `${this.apiURL}/infoPage/infoPage.html?actorId=` + actors[i].id;
                        //if itemEl does not exist then...
                    }
                    else {
                        //display an error
                        console.error('Title element not found in the template');
                    }
                }
                //put all the info from clone into infoBoxA
                this.infoBoxA.append(clone);
                //console log for the end of a completed function
                console.log('Template content added to the body');
            }
            //if infoBoxA and/or actorTemp don't exist then...
        }
        else {
            //console log to indicate that they are undefined
            console.log('template not found');
        }
    }
    //see comments in showActors for how showCharacter works
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
                            itemEl.href = `${this.apiURL}/infoPage/infoPage.html?characterId=` + character[i].id;
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
    //see comments in showActors for how showMedia works
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
                            itemEl.href = `${this.apiURL}/infoPage/infoPage.html?mediaId=` + media[i].id;
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
}
//# sourceMappingURL=main-view.js.map