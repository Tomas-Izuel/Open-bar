import express from 'express';
import fs from 'fs';

const app = express();

app.get('/', (req, res) => {
    res.send('hola')
})

app.get('/products', (req, res) => {
})

app.get('/products/:idProduct', (req, res) => {
    const {idProduct} = req.params
    const product = JSON.parse(fs.readFileSync())

    res.json({mesage:'Producto', product})
})

app.listen(8080,() => {
    console.log('')
    console.info('      * Server runing on: http://localhost:8080')
    console.warn('      * Listen on port 8080')
})