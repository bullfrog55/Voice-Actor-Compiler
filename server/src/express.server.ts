import express, {Request, Response} from 'express';
import {MyDatabase} from './MyDatabase.js';
import {IActor} from './serverTypes.js';
import {port} from "./constants.js"


const app = express();

let database = new MyDatabase();
app.use(express.static('client/src'));
await database.innitDB();


app.get('/bd', (req: Request, res: Response) => {
    res.send('Hello World! Today is my birthday!');
});

app.get('/temp', (req: Request, res: Response) => {
    res.send('Hello World! This is the alternate text!');
});

app.get('/findActorByName', async (req: Request, res: Response) => {
    let actorName = req.query.actorName as string | undefined;
    if (actorName) {
        let results = await database.getActorByName(actorName);
        res.json(results);
    } else {
        console.log('for /findActorByName actorName parameter is missing.');
        res.status(500);
        res.send('for /findActorByName actorName parameter is missing.');
    }
});

app.get('/getActorById', async (req: Request, res: Response) => {
    let actorId = req.query.actorId as number | undefined;
    if (actorId) {
        let results = await database.getActorById(actorId);
        res.json(results);
    } else {
        console.log('for /getActorById actorId parameter is missing.');
        res.status(500);
        res.send('for /getActorById actorId parameter is missing.');
    }
});



app.get('/findMedia', async (req: Request, res: Response) => {
    let mediaTitle = req.query.mediaTitle as string | undefined;
    if (mediaTitle) {
        let results = await database.getMediaByTitle(mediaTitle);
        res.json(results);
    } else {
        console.log('for /findInfo mediaTitle parameter is missing.');
        res.status(500);
        res.send('for /findInfo mediaTitle parameter is missing.');
    }
});

app.get('/getMediaById', async (req: Request, res: Response) => {
    let mediaId = req.query.mediaId as number | undefined;
    if (mediaId) {
        let results = await database.getMediaById(mediaId);
        res.json(results);
    } else {
        console.log('for /getMediaById mediaId parameter is missing.');
        res.status(500);
        res.send('for /getMediaById mediaId parameter is missing.');
    }
});

app.get('/findCharacter', async (req: Request, res: Response) => {
    let characterName = req.query.characterName as string | undefined;
    if (characterName) {
        let results = await database.getCharacterByName(characterName);
        res.json(results);
    } else {
        console.log('for /findCharacter characterName parameter is missing.');
        res.status(500);
        res.send('for /findCharacter characterName parameter is missing.');
    }
});


app.get('/getCharacterById', async (req: Request, res: Response) => {
    let characterId = req.query.characterId as number | undefined;
    if (characterId) {
        let results = await database.getCharacterById(characterId);
        res.json(results);
    } else {
        console.log('for /getCharacterById characterId parameter is missing.');
        res.status(500);
        res.send('for /getCharacterById characterId parameter is missing.');
    }
});

app.get('/func', (req: Request, res: Response) => {
    let param = req.query.name as string;
    console.log(req.query);
    let ageParam = req.query.age as string;

    let firstPerson: IActor = {
        birthday: '123',
        name: 'joe',
        id: 72,
    };

    let secondPerson: IActor = {
        birthday: '456',
        name: 'hank',
        id: 73,
    };

    if (param && ageParam) {
        firstPerson.name = param;
        secondPerson.birthday = ageParam;
    }

    let dummy: IActor[] = [firstPerson, secondPerson];


    res.json(dummy);
});
const hostname = '192.168.86.*';
app.listen(port, (error?) => {
    if (error) {
        console.log(error);
    } else {
        console.log(`Example app listening on port ${port}`);
    }
});


//Takehito Koyasu