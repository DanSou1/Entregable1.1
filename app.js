import express from 'express';

import { cartsRouter } from './src/routers/carts.router.js';
import { productRouter } from './src/routers/products.router.js';
const app = express();
const port = 8080;
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/api/carts', cartsRouter);
app.use('/api/products', productRouter);
app.listen(port,()=>{console.log('Servidor escuchando en el puerto' + port)});