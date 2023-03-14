import express from 'express';
const app = express();
const PORT = 8080

const fs=require('fs')

const nuevoArray= fs.readFileSync('./Usuarios.json','utf-8')
console.log(nuevoArray);

const arrayExpress=JSON.parse(nuevoArray);
console.log(arrayExpress);

app.get('/', (req, res) => {
    res.send(arrayExpress)
})

app.get('/:userId', (req, res) => {
    // hacemos una busqueda
    const usuario = arrayExpress.find(u => u.id === req.params.userId);
    if (usuario) {
        res.send(usuario)
    }
    res.send({ messasge: "Usuario no encontrado!!" })
})

let num=4;
app.get('/:cantidad/numero', (req, res) => {
    // hacemos una busqueda
    const cantidad = req.params.numero;
    for(let i=1; i==req.params.numero;i++){
        res.send(usuario)

    }
    if (req.params.numero<9) {
        const cantidad = req.params.numero;
    for(let i=1; i==req.params.numero;i++){
        res.send(usuario)
    }
    res.send({ messasge: " no hay tantos datos" })
}})


app.listen(PORT, () => {
    console.log(`Server run on port: ${PORT}`);
})