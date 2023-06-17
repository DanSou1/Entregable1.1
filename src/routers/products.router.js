import { Router, json } from "express";
import fs from 'fs';
const productRouter = Router();
let archivo = fs.readFileSync('Productos.json', 'utf-8');
productRouter.get('/', async (req, res)=>{
    try {
        await res.send((JSON.parse(archivo)));
        res.status(200);
    } 
    catch (error) {
        res.status(400).send('Error al cargar los datos. ' + error)
    }
});
productRouter.get('/:pid', async (req,res)=>{
    try {
        let ideUsuario = req.params.pid;
        let productosJs = JSON.parse(archivo);
        let productoSend = productosJs.find(producto => producto.id === ideUsuario);
        if (productoSend) {
            res.send(productoSend);
        }
        else{
            res.send('El producto no existe.')
        }
    } catch (error) {
        console.log('error' + error);
        res.status(500).send('Error en el servidor ' + error);
    }
});
//agregar un nuevo producto
productRouter.post('/',(req, res)=>{
    console.log('hola', req.body);
})
export {productRouter};