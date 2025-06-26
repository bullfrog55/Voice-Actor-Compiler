import {IActor, ICharacter, IMedia} from '../../server/src/serverTypes.js';

export class DataAccess {

    public async getActorById(actorId: number): Promise<IActor | undefined> {
        let returnActor: IActor | undefined;

        //http://localhost:3000/findInfo?actorName=Takehito%20Koyasu
        let response = await fetch(`http://localhost:3000/getActorById?actorId=${actorId}}`);
        if (response.ok) {
            //console.log(`response from server is: ${await response.text()}`);
            let responseText = await response.text();
            if (responseText && responseText.length > 0) {
                let jsonData = JSON.parse(responseText);
                returnActor = jsonData;
            }
        } else {
            let responseText = await response.text();
            throw new Error(`response didn\'t make it. Status ${response.status}, ${responseText}`);
        }
        return returnActor;
    }

    public async getActorsByName(name: string): Promise<IActor[]> {
        let returnActors: IActor[] = [];

        //http://localhost:3000/findInfo?actorName=Takehito%20Koyasu
        let response = await fetch(`http://localhost:3000/findActorByName?actorName=${name}`);
        if (response.ok) {
            //console.log(`response from server is: ${await response.text()}`);
            let responseText = await response.text();
            if (responseText && responseText.length > 0) {
                let jsonData = JSON.parse(responseText);
                returnActors = jsonData;
            }
        } else {
            let responseText = await response.text();
            throw new Error(`response didn\'t make it. Status ${response.status}, ${responseText}`);
        }
        return returnActors;
    }

    //method to get character by id
    public async getCharacterById(characterId: number): Promise<ICharacter | undefined> {
        let returnCharacter: ICharacter | undefined;
        let response = await fetch(`http://localhost:3000/getCharacterById?characterId=${characterId}`);

        if (response.ok) {

            let responseText = await response.text();
            if (responseText && responseText.length > 0) {

                let jsonData = JSON.parse(responseText);
                returnCharacter = jsonData;
            }
        } else {
            let responseText = await response.text();
            throw new Error(`response didn\'t make it. Status ${response.status}, ${responseText}`);

        }
        return returnCharacter;
    }

    public async getCharacterByName(name: string): Promise<ICharacter[]> {
        let returnCharacter: ICharacter[] = [];
        let response = await fetch(`http://localhost:3000/findCharacter?characterName=${name}`);
        if (response.ok) {
            let responseText = await response.text();
            if (responseText && responseText.length > 0) {
                let jsonData = JSON.parse(responseText);
                returnCharacter = jsonData;
            }
        } else {
            let responseText = await response.text();
            throw new Error(`response didn\'t make it. Status ${response.status}, ${responseText}`);
        }
        return returnCharacter;
    }

    /**
     * get media by id
     * @param mediaId
     */
    public async getMediaById(mediaId: number): Promise<IMedia | undefined> {
        let returnMedia: IMedia | undefined;
        let response = await fetch(`http://localhost:3000/getMediaById?mediaId=${mediaId}`);

        if (response.ok) {

            let responseText = await response.text();
            if (responseText && responseText.length > 0) {
                let jsonData = JSON.parse(responseText);
                returnMedia = jsonData;
            }
        } else {
            let responseText = await response.text();
            throw new Error(`response didn\'t make it. Status ${response.status}, ${responseText}`);
        }
        return returnMedia;
    }

    public async getMediaByTitle(title: string): Promise<IMedia[]> {
        let returnMedia: IMedia[] = [];
        let response = await fetch(`http://localhost:3000/findMedia?mediaTitle=${title}`);
        if (response.ok) {
            //console.log(`response from server is: ${await response.text()}`);
            let responseText = await response.text();
            if (responseText && responseText.length > 0) {
                let jsonData = JSON.parse(responseText);
                returnMedia = jsonData;
            }
        } else {
            let responseText = await response.text();
            throw new Error(`response didn\'t make it. Status ${response.status}, ${responseText}`);
        }
        return returnMedia;
    }


}