const express = require('express');

const app = express();

app.get('/search', (req, res) => {
    const name = req.query.name;
    const course = req.query.course;

    if (!name && !course) {
        res.send('No search data provided.');
        return;
    }

    res.send(`Name: ${name}<br>Course: ${course}`);
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});