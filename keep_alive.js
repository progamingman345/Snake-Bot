const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => res.send('Your bot is alive!')); 

app.listen(port, () => console.log(`Your bot is listening to http://localhost:${port}`));
