var app = angular.module('foodModule');

app.controller('foodCtrl', function($scope, foodFactory){
  foodFactory.getList().then(function() {
    $scope.info = foodFactory.returnAll();
  });
  $scope.deleteLocation = function(id){
    foodFactory.deleteRow(id).then(function(){
      $scope.info = foodFactory.returnAll();
    });
  };
  $scope.addLocation = function(newLocation){
    foodFactory.addRow(newLocation).then(function(){
      $scope.info = foodFactory.returnAll();
    });
  };
  // foodFactory.addRow();
  //
  // foodFactory.updateRow();
});
