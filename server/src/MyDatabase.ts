import sqlite3 from 'sqlite3';
import {Database, open} from 'sqlite';


export class MyDatabase {


    private _DB_FILENAME = './server/ActorsShowsandCharacters.db';
    private _db: Database<sqlite3.Database, sqlite3.Statement> | undefined;

    constructor() {
        //this._db = new sqlite.Database(this._DB_FILENAME);


    }

    public async getActorByName(name: string): Promise<undefined | IActor> {
        //get all the actors
        let actors = await this.getActorData();
        // for the length of the database array from getActorData check if the name is the same as the input
        for (let i = 0; i < actors.length; i++) {
            //if a match is found return the row
            let actor = actors[i];
            if (actor.name.toLowerCase() === name.toLowerCase()) {
                return actor;
            } else {
                return undefined
            }
        }
    }

    async getActorData(): Promise<IActor[]> {
        if (this._db) {


            let sqlCommand = 'select * from actors';
            console.log('sql:', sqlCommand);

            let currentActor: IActor[] = await this._db.all(sqlCommand);

            await this._db.close();
            return currentActor;
        } else {
            return [];
        }

    }

    public async innitDB() {

        this._db = await open<sqlite3.Database, sqlite3.Statement>({
            filename: this._DB_FILENAME,
            driver: sqlite3.Database
        });


    };

}


/*

let sqlCommand = 'select * from actors';
console.log('sql:', sqlCommand);
db.all(sqlCommand, (err, actors) => {
    //res.send(fruit); webserver stuff. Send `fruit` to the client
    if (!err) {
        console.log(actors);
    }
});

db.close();

*/


/*

class [class name] {

    public foo: string;
    private bar: number;
    
    constructor(){
        let do = "stuff";
        
        this.bar = 42;
    }

    public doStuff(){
        let banana = 'best favorite fruit'
    }
    
    private doPrivateThings(){
        this.foo = 'private!!!';
    }    

}

 */

export interface IActor {
    birthday: string;
    id: number;
    name: string;
    notableWork1: string;
    notableWork2: string;
}
