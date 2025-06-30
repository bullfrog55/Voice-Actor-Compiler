import {InfoPageService} from './infoPageService.js';
import {IActor, ICharacter, IMedia} from '../../../server/src/serverTypes.js';

export class InfoPageView {


    constructor() {
        
        //const urlParams = new URLSearchParams(window.location.search);
        //const myParam = urlParams.get('myParam');
    }
    
    getParamData(): IInfoPageParamData {

        let urlParamater = new URLSearchParams(window.location.search);
        console.log('the url paramaters are', urlParamater);
        let currentMediaParam = urlParamater.get('mediaId');
        let currentActorParam = urlParamater.get('actorId');
        let currentCharacterParam = urlParamater.get('characterId');
        console.log('the currentMedia param is', currentMediaParam);
        console.log('the currentActorParam is', currentActorParam);
        console.log('the currentCharacterParam is', currentCharacterParam);

        let currentActorId: number | undefined;
        let currentCharacterId: number | undefined;
        let currentMediaId: number | undefined;

        if (currentMediaParam) {
            currentMediaId = parseInt(currentMediaParam);
        } else if (currentActorParam) {
            currentActorId = parseInt(currentActorParam);
        } else if (currentCharacterParam) {
            currentCharacterId = parseInt(currentCharacterParam);
        }

        return {
            actorId: currentActorId,
            characterId: currentCharacterId,
            mediaId: currentMediaId,
        };
    }

    displayActor(currActor: IActor) {
        console.log('the current actor is: ', currActor);        
    }
    displayCharacter(currCharacter: ICharacter) {
        console.log('the current character is: ', currCharacter);
    }
    displayMedia(currMedia: IMedia) {
        console.log('the current media is: ', currMedia);
    }
}


export interface IInfoPageParamData {
    actorId: number | undefined;
    characterId: number | undefined;
    mediaId: number | undefined;

}


