import express, { Application, Request, Response, NextFunction } from 'express';

const app: express.Application = express();

const add = (a: number, b: number): number => {
    return a + b;
}

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('Hello');
    console.log(add(4,3))
})

app.listen(5000, () => {console.log('server running on port 5000')})