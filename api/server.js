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

app.use(function(err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500; 
    res.status(err.statusCode).send(err.message); 
});
module.exports = app