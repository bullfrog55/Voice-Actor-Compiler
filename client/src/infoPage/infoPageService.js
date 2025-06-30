export class InfoPageService {
    data;
    infoPageView;
    paramData;
    constructor(view, data) {
        console.log('info page loading');
        this.infoPageView = view;
        this.data = data;
    }
    async initContent() {
        if (this.paramData) {
            if (this.paramData.actorId) {
                await this.initActor(this.paramData.actorId);
            }
            else if (this.paramData.characterId) {
                await this.initCharacter(this.paramData.characterId);
            }
            else if (this.paramData.mediaId) {
                await this.initMedia(this.paramData.mediaId);
            }
        }
    }
    async getDatabaseInfo() {
        //question mark checks if paramData is defined first and then actorId. if paramData is undefined then the whole If returns undefined
        let definedData;
        if (this.paramData?.actorId) {
            definedData = await this.data.getActorById(this.paramData.actorId);
        }
        else if (this.paramData?.characterId) {
            definedData = await this.data.getCharacterById(this.paramData.characterId);
        }
        else if (this.paramData?.mediaId) {
            definedData = await this.data.getMediaById(this.paramData.mediaId);
        }
        return definedData;
    }
    async pageLoad() {
        this.paramData = this.infoPageView.getParamData();
        console.log(`Service says currentId is: `, this.paramData);
        await this.initContent();
    }
    async initActor(actorId) {
        let retrievalResults = await this.data.getActorById(actorId);
        if (retrievalResults) {
            this.infoPageView.displayActor(retrievalResults);
        }
    }
    async initCharacter(characterId) {
        let retrievalResults = await this.data.getCharacterById(characterId);
        if (retrievalResults) {
            this.infoPageView.displayCharacter(retrievalResults);
        }
    }
    async initMedia(mediaId) {
        let retrievalResults = await this.data.getMediaById(mediaId);
        if (retrievalResults) {
            this.infoPageView.displayMedia(retrievalResults);
        }
    }
}
//# sourceMappingURL=infoPageService.js.map