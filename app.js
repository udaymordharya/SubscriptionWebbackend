import express  from 'express';
import { PORT } from './config/env.js';
import authRouter from './routes/auth.routes.js';
// import userRouter from './routes/user.router.js';
import subscriptionRouter from './routes/subscription.routers.js';

const app = express();

app.use('/api/v1/auth', authRouter);
// app.use('/api/v1/user', userRouter);
app.use('/api/v1/subscription', subscriptionRouter);
app.get ('/', (req,res)=> {
    res.send ('Welcome to the Subscription Tracker API');
});

app.listen(PORT, () => {
    console.log(`Server is running on port  http://localhost:${PORT}`);
});

export default app;
