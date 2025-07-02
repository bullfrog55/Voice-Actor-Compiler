export interface IActor {
    birthday: string;
    id: number;
    name: string;
    picture: string;
    synopsis: string;
}


export interface IMedia {
    id: number;
    titleMain: string;
    titleAlt:string;
    picture: string;
    timeSpan: string;
    synopsis: string;
    
}

export interface ICharacter {
    id: number;
    name: string;
    media_name: string;
    picture: string;
    synopsis: string;
}