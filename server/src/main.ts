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
    let stringActor = JSON.stringify(actor);

    console.log(`Oh yeah they're cool. Here is some information: ${actor}`);
    rl.close();
});


//Takehito Koyasu

          //theses are changes       
    


