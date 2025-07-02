import {IInfoPageParamData, InfoPageView} from './infoPageView.js';
import {DataAccess} from '../DataAccess.js';
import {IActor, ICharacter, IMedia} from '../../../server/src/serverTypes.js';

export class InfoPageService {

    private data: DataAccess;
    private infoPageView: InfoPageView;
    private paramData: IInfoPageParamData | undefined;
    private readonly imagePath: string = './images/';
    

    constructor(view: InfoPageView, data: DataAccess) {
        console.log('info page loading');
        this.infoPageView = view;
        this.data = data;
        
    }

    async initContent() {
        if (this.paramData) {

            if (this.paramData.actorId) {
                await this.initActor(this.paramData.actorId);               

            } else if (this.paramData.characterId) {
                await this.initCharacter(this.paramData.characterId);
            } else if (this.paramData.mediaId) {
                await this.initMedia(this.paramData.mediaId);
            }
        }
    }

    public async getDatabaseInfo() {
        //question mark checks if paramData is defined first and then actorId. if paramData is undefined then the whole If returns undefined
        let definedData: IActor | ICharacter | IMedia | undefined;
        if (this.paramData?.actorId) {
            definedData = await this.data.getActorById(this.paramData.actorId);
        } else if (this.paramData?.characterId) {
            definedData = await this.data.getCharacterById(this.paramData.characterId);
        } else if (this.paramData?.mediaId) {
            definedData = await this.data.getMediaById(this.paramData.mediaId);
        }
        return definedData;
    }

    public async pageLoad() {
        this.paramData = this.infoPageView.getParamData();
        console.log(`Service says currentId is: `, this.paramData);
        await this.initContent();
    }

    private async initActor(actorId: number) {
        let retrievalResults = await this.data.getActorById(actorId);
        if (retrievalResults) {
            this.infoPageView.displaySideBar(this.imagePath + retrievalResults.picture, retrievalResults.name, 'text is', 'this guy good at voice acting');
        }
    }

    private async initCharacter(characterId: number) {
        let retrievalResults = await this.data.getCharacterById(characterId);
        if (retrievalResults) {
            this.infoPageView.displaySideBar(this.imagePath + retrievalResults.picture, retrievalResults.name, 'text is', 'this guy (or girl) is super awesome and they are the best character no matter what anyone says');
        }
    }

    private async initMedia(mediaId: number) {
        let retrievalResults = await this.data.getMediaById(mediaId);
        if (retrievalResults) {
            this.infoPageView.displaySideBar(this.imagePath + retrievalResults.picture, retrievalResults.titleMain, 'text is', 'this media is super good and you should totally go watch it because of how good it is');
        }
    }
}