const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('This is my IP address ' + req.ip);
});
app.listen(port, () => console.log('My app listening on port ${port}!'));