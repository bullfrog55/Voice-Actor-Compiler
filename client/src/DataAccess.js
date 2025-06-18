export class DataAccess {
    async getActors(name) {
        let returnActors = [];
        //http://localhost:3000/findInfo?actorName=Takehito%20Koyasu
        let response = await fetch(`http://localhost:3000/findActor?actorName=${name}`);
        if (response.ok) {
            //console.log(`response from server is: ${await response.text()}`);
            let responseText = await response.text();
            if (responseText && responseText.length > 0) {
                let jsonData = JSON.parse(responseText);
                returnActors = jsonData;
            }
        }
        else {
            let responseText = await response.text();
            throw new Error(`response didn\'t make it. Status ${response.status}, ${responseText}`);
        }
        return returnActors;
    }
    async getMedia(title) {
        let returnMedia = [];
        let response = await fetch(`http://localhost:3000/findMedia?mediaTitle=${title}`);
        if (response.ok) {
            //console.log(`response from server is: ${await response.text()}`);
            let responseText = await response.text();
            if (responseText && responseText.length > 0) {
                let jsonData = JSON.parse(responseText);
                returnMedia = jsonData;
            }
        }
        else {
            let responseText = await response.text();
            throw new Error(`response didn\'t make it. Status ${response.status}, ${responseText}`);
        }
        return returnMedia;
    }
    async getCharacter(name) {
        let returnCharacter = [];
        let response = await fetch(`http://localhost:3000/findCharacter?name=${name}`);
        if (response.ok) {
            let responseText = await response.text();
            if (responseText && responseText.length > 0) {
                let jsonData = JSON.parse(responseText);
                returnCharacter = jsonData;
            }
        }
        else {
            let responseText = await response.text();
            throw new Error(`response didn\'t make it. Status ${response.status}, ${responseText}`);
        }
        return returnCharacter;
    }
}
//# sourceMappingURL=DataAccess.js.map