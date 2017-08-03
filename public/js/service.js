var app = angular.module('foodModule');

app.factory('foodFactory', function($http){

  var listArray = [];

  return {
    getList: getList,
    addRow: addRow,
    deleteRow: deleteRow,
    updateRow: updateRow,
    returnAll: returnAll
  }

  function returnAll () {
    return listArray
  }

  function updateRow() {
    var newInfo = {
      location: 'Ann Arbor',
      restaurantname: 'Mani',
      footype: 'Woodfire Pizza',
      price: 5,
      rating: 5
    };
    var id = 5;
    var p = $http({
      method: 'PUT',
      url: '/api/restaurants/' + id,
      data: newInfo
    }).then(function(response){
      listArray = response.data;
      console.log(listArray);
    });
    return p;
  }

  function getList() {
    var p = $http({
      url:'/api/restaurants',
      method: 'GET'
    }).then(function(response){
      listArray = response.data;
      console.log(listArray)
    });
    return p;
  };

  function addRow(newLocation) {
    var p = $http({
      url:'/api/restaurants',
      method: 'POST',
      data: newLocation
    }).then(function(response){
      listArray = response.data;
      console.log(listArray);
    });
    return p;
  }

  function deleteRow(id) {
    var p = $http({
      url:'/api/restaurants/' + id,
      method: 'DELETE',
    }).then(function(response){
      listArray = response.data;
      console.log(listArray);
    });
    return p;
  }
});
