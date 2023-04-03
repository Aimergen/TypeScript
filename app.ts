
import express ,{Express, Request, Response}from 'express';
import usersRouter from './routes/usersRouter';

const app:Express = express();

app.get('/', (req: Request, res: Response)=>{
    res.json('Hello world');
});

app.use('/api/users', usersRouter);

app.get('/hello', (req: Request, res: Response)=>{
    res.json('Hello world! again');
});

export default app;