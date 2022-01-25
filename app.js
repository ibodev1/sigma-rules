const express = require('express');
const app = express();
const data = require('./data');
const ejs = require('ejs');
const port = process.env.PORT || 5000;

app.use(express.json());
app.engine('.ejs', ejs.__express);
app.use(express.static( "public" ));
app.set('views', __dirname + '/views');

app.get("/api", (req, res) => {
    const randomValue = data[parseInt(Math.random() * data.length)];
    res.status(200).json(randomValue);
});

app.get("/", (req, res) => {
    const randomValue = data[parseInt(Math.random() * data.length)];
    res.render('./index.ejs', {
        data: randomValue
    });
});

app.listen(3000, () => {
    console.log('listening on 3000');
});
