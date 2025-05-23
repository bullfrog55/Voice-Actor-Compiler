import sqlite3 from 'sqlite3';
import {Database, open} from 'sqlite';
import {IActor, IMedia} from './types.js';


export class MyDatabase {


    private _DB_FILENAME = './server/ActorsShowsandCharacters.db';
    private _db: Database<sqlite3.Database, sqlite3.Statement> | undefined;

    constructor() {
        //this._db = new sqlite.Database(this._DB_FILENAME);


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

    async getActorData(): Promise<IActor[]> {
        if (this._db) {

            let sqlCommand = 'select * from actor';
            console.log('sql:', sqlCommand);

            let currentActor: IActor[] = await this._db.all(sqlCommand);

//            await this._db.close();
            return currentActor;
        } else {
            throw new Error('database is undefined');
        }

    }

    async getMediaAll(): Promise<IMedia[]> {
        if (this._db) {

            let sqlCommand = 'select * from media';
            console.log('sql:', sqlCommand);

            let currentMedia: IMedia[] = await this._db.all(sqlCommand);

//            await this._db.close();
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






