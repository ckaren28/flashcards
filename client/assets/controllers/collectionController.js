app.controller('collectionController', ['$scope', '$location', 'collectionFactory', '$routeParams', '$cookies', function($scope, $location, collectionFactory, $routeParams, $cookies){

  $scope.collection = {};
  $scope.user = {};
  if($cookies.getObject('user')){
    $scope.user = $cookies.getObject('user')
  }
  else{
    $location.url('/')
  }

  $scope.show_collection = function(){
    collectionFactory.show_collection($routeParams.id, function(returned_data){
      $scope.collection = returned_data
    })
  }

  $scope.addcard = function(){
    $location.url('/addcard/'+ $scope.collection._id)
  }

  $scope.show_card = function(id){
    $location.url('/card/' + id)
  }

  $scope.startcard = function(){
    $location.url('/card/'+ $scope.collection._notecards[0]._id)
  }

  $scope.shuffle = function(){
    collectionFactory.shuffle($routeParams.id, function(data){
      $scope.show_collection();

    })
  }

  $scope.show_collection();



  $scope.edit_collection = function(){
    collectionFactory.edit_collection($routeParams.id, function(){
      //
    })
  }
  $scope.remove_collection = function(){
    collectionFactory.remove_collection($routeParams.id, function(){
      //
    })
  }

//On see my collections click, show all collections created by user
  $scope.get_collection_by_user = function(){
    collectionFactory.get_collection_by_user($routeParams.id, function(){
      $location.url('/')
    })
  }





}]);
