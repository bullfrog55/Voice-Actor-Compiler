export class InfoPageView {
    constructor() {
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
    displayActor(currActor) {
        console.log('the current actor is: ', currActor);
    }
    displayCharacter(currCharacter) {
        console.log('the current character is: ', currCharacter);
    }
    displayMedia(currMedia) {
        console.log('the current media is: ', currMedia);
    }
}
//# sourceMappingURL=infoPageView.js.map