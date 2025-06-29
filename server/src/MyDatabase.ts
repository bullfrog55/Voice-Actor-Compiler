import sqlite3 from 'sqlite3';
import {Database, open} from 'sqlite';
import {IActor, ICharacter, IMedia} from './serverTypes.js';


export class MyDatabase {


    private _DB_FILENAME = './server/ActorsShowsandCharacters.db';
    private _db: Database<sqlite3.Database, sqlite3.Statement> | undefined;

    constructor() {
        //this._db = new sqlite.Database(this._DB_FILENAME);


    }

    async getActorById(actorId: number): Promise<IActor | undefined> {
        if (this._db) {

            let sqlCommand = `select *
                              from actor
                              where id = ${actorId}`;
            console.log('sql:', sqlCommand);

            let currentActor: IActor | undefined = await this._db.get(sqlCommand);

            return currentActor;
        } else {
            throw new Error('database is undefined');
        }
    }

    public async getActorByName(name: string): Promise<IActor[]> {
        if (this._db) {

            let sqlCommand = `select *
                              from actor
                              where name like '%${name}%'`;
            console.log('sql:', sqlCommand);

            let currentActor: IActor[] = await this._db.all(sqlCommand);

            return currentActor;
        } else {
            throw new Error('database is undefined');
        }
    }

    public async getCharacterById(id: number): Promise<ICharacter | undefined> {
        if (this._db) {
            let sqlCommand = `select *
                              from character
                              where id = ${id}`;
            console.log('sql:', sqlCommand);
            let currentCharacter: ICharacter | undefined = await this._db.get(sqlCommand);

            return currentCharacter;
        } else {
            throw new Error('database is undefined');
        }
    }

    public async getCharacterByName(name: string): Promise<ICharacter[]> {
        if (this._db) {
            let sqlCommand = `select *
                              from character
                              where name like '%${name}%'`;
            console.log('sql:', sqlCommand);
            let currentCharacter: ICharacter[] = await this._db.all(sqlCommand);
            return currentCharacter;
        } else {
            throw new Error('database is undefined');
        }
    }

    public async getMediaById(id: number): Promise<IMedia | undefined> {
        if (this._db) {

            let sqlCommand = `select *
                              from media
                              where id like ${id}`;
            console.log('sql:', sqlCommand);

            let currentMedia: IMedia | undefined = await this._db.get(sqlCommand);

            return currentMedia;
        } else {
            throw new Error('database is undefined');
        }
    }

    public async getMediaByTitle(title: string): Promise<IMedia[]> {
        if (this._db) {

            let sqlCommand = `select *
                              from media
                              where titleMain like '%${title}%'`;
            console.log('sql:', sqlCommand);

            let currentMedia: IMedia[] = await this._db.all(sqlCommand);

            return currentMedia;
        } else {
            throw new Error('database is undefined');
        }
    }

    public async innitDB() {

        this._db = await open<sqlite3.Database, sqlite3.Statement>({
            filename: this._DB_FILENAME,
            driver: sqlite3.Database
        });
    };
}






