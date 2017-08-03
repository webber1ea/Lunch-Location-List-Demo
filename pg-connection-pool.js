var pg = require('pg');
//^CREATING A VARIABLE PG THAT REQUIRES THE POSTGRES MODULE//

var config = {
  user: 'postgres',
  password: 'Everest',
  host: 'localhost',
  port: 1212,
  database: 'Lunch'
};
//^DECLARING VARIABLE CONFIG WITH 5 PROPERTIES, ALLOWS US TO ACTUALY CONNECT TO THE DATABASE IN Postgres//

module.exports = new pg.Pool(config);
//^Constructing a new Pool object and passing config through it to allow us to use the query method//
