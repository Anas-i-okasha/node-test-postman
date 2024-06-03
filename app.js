const express = require('express');
const app = express();
app.use(express.json());
const port = 3000;


app.get('/', (req, res) => {
    console.log('Anas', req)
    res.send('Hello team')
});



app.listen(port, () => {
    // will log to the command line when the server starts
    console.log(`Example app listening at http://localhost:${port}`);
  });