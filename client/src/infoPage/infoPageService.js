export class InfoPageService {
    data;
    infoPageView;
    paramData;
    constructor(view, data) {
        console.log('info page loading');
        this.infoPageView = view;
        this.data = data;
    }
    pageLoad() {
        this.paramData = this.infoPageView.getParamData();
        console.log('Service says: currentId is ', this.paramData);
    }
    getDatabaseInfo() {
        //question mark checks paramData first and then actorId. if paramData is undefined then the whole if returns undefined
        if (this.paramData?.actorId) {
            this.data.getActorById(this.paramData.actorId);
        }
    }
}
//# sourceMappingURL=infoPageService.js.map