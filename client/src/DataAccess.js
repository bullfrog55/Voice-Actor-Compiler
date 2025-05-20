export class DataAccess {
    async getActor(name) {
        //http://localhost:3000/findInfo?actorName=Takehito%20Koyasu
        let response = await fetch(`http://localhost:3000/findInfo?actorName=${name}`);
        if (response.ok) {
            let jsonData = await response.json();
            return jsonData;
        }
        else {
            let responseText = await response.text();
            throw new Error(`response didn\'t make it. Status ${response.status}, ${responseText}`);
        }
    }
}
//# sourceMappingURL=DataAccess.js.map