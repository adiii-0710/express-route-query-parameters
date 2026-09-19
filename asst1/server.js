const express = require('express');

const app = express();

app.get('/student/:id', (req, res) => {
    const id = req.params.id;

    res.send(`Student ID: ${id}`);
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});