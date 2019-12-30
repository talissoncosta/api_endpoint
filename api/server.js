const express = require('express');
const app = express();
const morgan = require('morgan');

const personRoutes = require('./routes/person');

  
app.use(express.json());
app.use(morgan('dev'));
app.use(personRoutes);

app.listen(process.env.PORT || 3001, () => {
    console.log("Server is running");
})

app.use(function(req, res, next) {
    return res.status(404).send({ error: `Route ${req.url} Not found.` });
});
module.exports = app