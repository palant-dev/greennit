const express = require('express');
const app = express()
const port = 8080

app.get('/', (req, resp) => {
    resp.send("Server correctly deployed");
})

app.get('/r/:subreddit', (req, resp) => {
    const {subreddit} = req.params
    resp.send(`Welcome to the ${subreddit} subreddit`);
})

app.get('*', (req,res) => {
    res.status(404).send('404 Not Found');
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})