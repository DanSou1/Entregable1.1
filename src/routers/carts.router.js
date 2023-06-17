import { Router } from "express";
const fs = ('fs');
const cartsRouter = Router();
cartsRouter.get('/',(req, res)=>{
    res.send('hola mundo');
});
export {cartsRouter};