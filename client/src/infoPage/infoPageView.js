export class InfoPageView {
    titleBox;
    posterBox;
    timeBox;
    synopsisBox;
    constructor() {
        this.titleBox = document.getElementById('title');
        this.posterBox = document.getElementById('poster');
        this.timeBox = document.getElementById('timeSpan');
        this.synopsisBox = document.getElementById('synopsis');
        //const urlParams = new URLSearchParams(window.location.search);
        //const myParam = urlParams.get('myParam');
    }
    getParamData() {
        let urlParamater = new URLSearchParams(window.location.search);
        console.log('the url paramaters are', urlParamater);
        let currentMediaParam = urlParamater.get('mediaId');
        let currentActorParam = urlParamater.get('actorId');
        let currentCharacterParam = urlParamater.get('characterId');
        console.log('the currentMedia param is', currentMediaParam);
        console.log('the currentActorParam is', currentActorParam);
        console.log('the currentCharacterParam is', currentCharacterParam);
        let currentActorId;
        let currentCharacterId;
        let currentMediaId;
        if (currentMediaParam) {
            currentMediaId = parseInt(currentMediaParam);
        }
        else if (currentActorParam) {
            currentActorId = parseInt(currentActorParam);
        }
        else if (currentCharacterParam) {
            currentCharacterId = parseInt(currentCharacterParam);
        }
        return {
            actorId: currentActorId,
            characterId: currentCharacterId,
            mediaId: currentMediaId,
        };
    }
    displaySideBar(image, title, timeSpan, synopsis) {
        this.titleBox.innerText = title;
        this.synopsisBox.innerText = synopsis;
        this.timeBox.innerText = timeSpan;
        this.posterBox.src = image;
    }
}
//# sourceMappingURL=infoPageView.js.map