import readline from 'node:readline';
import {MyDatabase} from './MyDatabase.js';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let database = new MyDatabase();

await database.innitDB();

rl.question('what actor do you want to know about? ', async (name: string) => {

    let actor = await database.getActorByName(name);
    let stringActor;

    if(actor){
        stringActor = JSON.stringify(actor);
    } else {
        stringActor = "no actor found (did you spell it right?)"
    }
    
    console.log(`${stringActor}`);
    rl.close();
});


//Takehito Koyasu