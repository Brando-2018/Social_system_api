// connection to the config folder
const express = require('express');
const routes = require('./routes');
const connection= require(`./config/connection`) 
const PORT = process.env.port || 3001;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);
connection.once(`open`, ()=>{
    app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT} 🚀`)
);
})
