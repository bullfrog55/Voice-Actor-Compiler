import express, {Request, Response} from 'express';
import {IActor, MyDatabase} from './MyDatabase.js';


const app = express();
const port = 3000;
let database = new MyDatabase();
app.use(express.static('client/src'));
await database.innitDB();


app.get('/', (req: Request, res: Response) => {
    res.send('Hello World! Today is my birthday!');
});

app.get('/temp', (req: Request, res: Response) => {
    res.send('Hello World! This is the alternate text!');
});

app.get('/findInfo', async (req: Request, res: Response) => {
    let actorName = req.query.actorName as string | undefined;
    if (actorName) {
        let results = await database.getActorByName(actorName);
        res.json(results);
    } else {
        console.log('for /findInfo actorName parameter is missing.');
        res.status(500);
        res.send('for /findInfo actorName parameter is missing.');
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
        notableWork1: 'something',
        notableWork2: 'something else'
    };

    let secondPerson: IActor = {
        birthday: '456',
        name: 'hank',
        id: 73,
        notableWork1: 'nothing',
        notableWork2: 'nothing else'
    };

    if (param && ageParam) {
        firstPerson.name = param;
        secondPerson.birthday = ageParam;
    }

    let dummy: IActor[] = [firstPerson, secondPerson];


    res.json(dummy);
});

app.listen(port, (error?) => {
    if (error) {
        console.log(error);
    } else {
        console.log(`Example app listening on port ${port}`);
    }
});






//Takehito Koyasu