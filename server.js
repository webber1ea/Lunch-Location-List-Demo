var express = require('express');
var app = express();
var bodyParser = require('body-parser');
//^MIDDLE MAN BETWEEN SERVER AND FRONT END//
var routes = require('./routes');
//^VAR ROUTES IS REQUIRING ROUTES MODULE//

app.use(bodyParser.json({ extended: true}));
//^USES BODYPARSER AND USE IT TO CONVER TO JSON//
app.use('/api', routes);
//^USE PREFIX /API FOR ROUTES, ROUTES IS REFERENCINGS THE VARIABLE ROUTES//
app.use(express.static(__dirname + '/public'));
//^TELLING THIS APP WHEN WE RUN THE SERVER HOST THE PUBLIC FOLDER//

app.listen(5000, function() {
  console.log('Server is running :]');
});
//^SET UP A SERVER AND 5000 IS THE PORT NUMBER LOCALHOST:5000//
