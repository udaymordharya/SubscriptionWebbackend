import {Router} from 'express';

const userRouter = Router();

userRouter.get('/', (req ,res) => {res.send ({ title: 'get all users' });});

userRouter.get('/:id', (req, res) => {res.send({ title: 'get user details' });});

userRouter.post('/', (req, res) => {res.send({ title: 'create new Settings' });});

userRouter.put('/:id', (req, res) => {res.send({ title: 'Update User' });});

userRouter.delete('/:id', (req, res) => {res.send({ title: 'Delete User' });});

export default userRouter;
