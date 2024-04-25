const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

app.post('/', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    if (email && password) {
        if (email === 'thamina@gmail.com' && password === 'thamina') {
            res.redirect('/frontpage.html');
        } else {
            res.redirect('/login.html');
        }
    } else {
        res.redirect('/login.html');
    }
});

app.get("/", (req, res) => {
    res.send("The server is running on port 3000");
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
