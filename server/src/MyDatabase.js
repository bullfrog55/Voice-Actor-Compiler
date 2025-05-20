import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
export class MyDatabase {
    _DB_FILENAME = './server/ActorsShowsandCharacters.db';
    _db;
    constructor() {
        //this._db = new sqlite.Database(this._DB_FILENAME);
    }
    async getActorByName(name) {
        //get all the actors
        let actors = await this.getActorData();
        // for the length of the database array from getActorData check if the name is the same as the input
        for (let i = 0; i < actors.length; i++) {
            //if a match is found return the row
            let actor = actors[i];
            if (actor.name.toLowerCase() === name.toLowerCase()) {
                return actor;
            }
        }
    }
    async getActorData() {
        if (this._db) {
            let sqlCommand = 'select * from actors';
            console.log('sql:', sqlCommand);
            let currentActor = await this._db.all(sqlCommand);
            //            await this._db.close();
            return currentActor;
        }
        else {
            throw new Error('database is undefined');
        }
    }
    async innitDB() {
        this._db = await open({
            filename: this._DB_FILENAME,
            driver: sqlite3.Database
        });
    }
    ;
}
//# sourceMappingURL=MyDatabase.js.map