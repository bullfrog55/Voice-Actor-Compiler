export class InfoPageView {
    private titleBox: HTMLDivElement;
    private posterBox: HTMLImageElement;
    private timeBox: HTMLDivElement;
    private synopsisBox: HTMLDivElement;


    constructor() {
        this.titleBox = document.getElementById('title') as HTMLDivElement;
        this.posterBox = document.getElementById('poster') as HTMLImageElement;
        this.timeBox = document.getElementById('timeSpan') as HTMLDivElement;
        this.synopsisBox = document.getElementById('synopsis') as HTMLDivElement;
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
    
    displaySideBar(image:string, title: string, timeSpan:string, synopsis:string){
        this.titleBox.innerText = title;
        this.synopsisBox.innerText = synopsis;
        this.timeBox.innerText = timeSpan;
        this.posterBox.src = image;
    }
}

export interface IInfoPageParamData {
    actorId: number | undefined;
    characterId: number | undefined;
    mediaId: number | undefined;

}