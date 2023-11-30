const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 3000;

app.use(cors());
app.use(bodyParser.json);

app.get('/messages',(req,res) => {
    const messages = Array.from({length:10}, (_,index)=>{
        return "Message" + index;
    });
    res.send(messages);
});

app.post('/messages', (req, res) => {
    console.log(req.body);
    res.json({});
});

app.listen(
    port,
     () => console.log(`app running on http://localhost:${port}`)
);