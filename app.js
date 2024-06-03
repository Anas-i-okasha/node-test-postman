const express = require('express');
const app = express();
app.use(express.json());
const port = 3000;




app.listen(port, () => {
    // will log to the command line when the server starts
    console.log(`Example app listening at http://localhost:${port}`);
  });