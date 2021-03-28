const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(8081, () => {
    console.log('Listening at port 8081');
});