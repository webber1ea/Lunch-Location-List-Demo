var express = require('express');
//REQUIRING EXPRESS//
var route = express.Router();
//VARIABLE CALLED ROUTE THAT ALLOWS US TO BUILD//
var pg = require('pg');
//REQUIRES PG SO WE CAN USE QUERY//
var pool = require('./pg-connection-pool');
//REQUIRE EXPORTED POOL OBJECT FROM pg-connection-pool//

route.get('/restaurants', function(req, res, next){
  pool.query('select * from hotspots order by id').then(function(result) {
    res.send(result.rows);
  });
});
//MAKE A GET REQUEST FROM restaurants AND RUN THE POOL.QUERY FUNCTION//
//^CREATING A URL WE CAN MAKE A GET REQUEST FROM//
//^Whenever the user makes a get request it will talk to our server and will trigger the function relating to the restaurants endpoint. It will give you every row in the hotspots table//

route.post('/restaurants', function(req, res, next){
  var data = req.body;
  pool.query('insert into hotspots(location, restaurantname, foodtype, rating, price) values($1::text, $2::text, $3::text, $4::int, $5::int)', [data.location, data.restaurantname, data.foodtype, data.rating, data.price]).then(function(){
    pool.query('select * from hotspots order by id').then(function(result) {
      res.send(result.rows);
    });
  });
});
//^Inserting restaurant NEW into the hotspots table//

route.delete('/restaurants/:id', function(req, res, next){
  var id = req.params.id;
  pool.query('delete from hotspots where id=$1::int', [id]).then(function(){
    pool.query('select * from hotspots order by id').then(function(result) {
      res.send(result.rows);
    });
  });
});
//^Deleting from hotspots table where the the id is 2 (FIRST ITEM IN THAT ARRAY, THINK OF ID=$1 AS A PARAMETER)//

route.put('/restaurants/:id', function(req, res, next){
  var data = req.body;
  var id = req.params.id;
  pool.query('update hotspots set location=$2::text, restaurantname=$3::text, foodtype=$4::text, rating=$5::int, price=$6::int where id=$1::int', [id, data.location, data.restaurantname, data.foodtype, data.rating, data.price]).then(function(){
    pool.query('select * from hotspots order by id').then(function(result) {
      res.send(result.rows);
    });
  });
});
//^Updating the hotspots table and set the location, restaurantname, foodtype, rating, and price to the values in [] where the id is 3//

module.exports = route;
