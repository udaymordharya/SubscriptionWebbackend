import {Router } from 'express';

const subscriptionRouter = Router();

subscriptionRouter.get('/', (req,res)=> res.send({title: 'Get all Subscription'}));

subscriptionRouter.get('/:id', (req,res)=> res.send({title: 'Get Subscription Details'}));

subscriptionRouter.post('/', (req,res)=> res.send({title: 'Create Subscription'}));

subscriptionRouter.put('/:id', (req,res)=> res.send({title: 'Update Subscription'}));

subscriptionRouter.delete('/', (req,res)=> res.send({title: 'delete Subscription'}));

subscriptionRouter.get('/user/:id', (req,res)=> res.send({title: 'All User Subscription'}));

subscriptionRouter.put('/:id/cancel', (req,res)=> res.send({title: 'delete Subscription'}));

subscriptionRouter.get('/upcoming-renewals', (req,res)=> res.send({title: 'delete Subscription'}));

export default subscriptionRouter;