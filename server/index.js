/*preparar o servidor*/
const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log("Servidor Iniciado!");
});

/*métodos*/
app.get('/todo', (req, res) => {
    res.send(data);
})

app.get('/todo/:id', (req, res) => {
    const {id} = req.params;
    if(id >= data.length)
        res.status(404);
    else
        res.json(data[id])
})

app.post('/todo', (req, res) => {
    const item = req.body;
    data.push(item);
    res.status(201);
    res.json(item);
})

app.put('/todo', (req, res) => {
    const item = req.body;
    data.put(item);
    res.status(202);
    res.json(item);
})

app.delete('/todo', (req, res) => {
    const item = req.body;
    data.delete(item);
    res.status(202);
    res.json(item);
})

app.delete('/todo/:id', (req, res) => {/*excluir um item com base no ID dele*/
    const item = req.body
    const {id} = req.params;
    if(id >= data.length)
        res.status(400);
    else{
        res.json(data[id]);
        res.status(200);
        id.delete(item);
    }
})

/*dados para teste*/
const data = [
    {
        fazer: 'comprar caneta',
    },
    {
        fazer: 'cortar cabelo',
    },
    {
        fazer: 'cozinhar',
    },
    {
        fazer: 'ir no centro',
    },
]