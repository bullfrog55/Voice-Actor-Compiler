import {IActor, IMedia} from '../../server/src/types.js';

export class DataAccess {

    public async getActors(name: string): Promise<IActor[]> {
        let returnActors: IActor[] = [];

        //http://localhost:3000/findInfo?actorName=Takehito%20Koyasu
        let response = await fetch(`http://localhost:3000/findActor?actorName=${name}`);
        if (response.ok) {
            //console.log(`response from server is: ${await response.text()}`);
            let responseText = await response.text();
            if (responseText && responseText.length > 0) {
                let jsonData = JSON.parse(responseText);
                returnActors = jsonData;
            } else {
                console.log('getActor found no matching data');
            }
        } else {
            let responseText = await response.text();
            throw new Error(`response didn\'t make it. Status ${response.status}, ${responseText}`);
        }
        return returnActors;
    }

    public async getMedia(title: string): Promise<IMedia[]> {
        let returnMedia: IMedia[] = [];
        let response = await fetch(`http://localhost:3000/findMedia?mediaTitle=${title}`);
        if (response.ok) {
            //console.log(`response from server is: ${await response.text()}`);
            let responseText = await response.text();
            if (responseText && responseText.length > 0) {
                let jsonData = JSON.parse(responseText);
                returnMedia = jsonData;
            } else {
                console.log('getMedia found no matching data');
            }
        } else {
            let responseText = await response.text();
            throw new Error(`response didn\'t make it. Status ${response.status}, ${responseText}`);
        }
        return returnMedia;
    }
}