import {IInfoPageParamData, InfoPageView} from './infoPageView.js';
import {DataAccess} from '../DataAccess.js';

export class InfoPageService {

    private data: DataAccess;
    private infoPageView: InfoPageView;
    private paramData: IInfoPageParamData | undefined;

    constructor(view: InfoPageView, data: DataAccess) {
        console.log('info page loading');
        this.infoPageView = view;
        this.data = data;

    }

    public pageLoad() {

        this.paramData = this.infoPageView.getParamData();
        console.log('Service says: currentId is ', this.paramData);
    }

    private getDatabaseInfo() {
        //question mark checks paramData first and then actorId. if paramData is undefined then the whole if returns undefined
        if (this.paramData?.actorId) {
            this.data.getActorById(this.paramData.actorId);
        }
    }
}
