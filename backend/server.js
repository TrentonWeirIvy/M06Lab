const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;

app.use(cors());

app.get('/messages',(req,res) => {
    const messages = Array.from({length:10}, (_,index)=>{
        return "Message" + index;
    });
    res.send(messages);
});

app.listen(
    port,
     () => console.log(`app running on http://localhost:${port}`)
);