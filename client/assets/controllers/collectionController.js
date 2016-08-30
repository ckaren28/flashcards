app.controller('collectionController', ['$scope', '$location', 'collectionFactory', '$routeParams', '$cookies', function($scope, $location, collectionFactory, $routeParams, $cookies){

    $scope.collection = {};
    $scope.collections = [];
    $scope.user = {};
    $scope.editModal = false;

    if($cookies.getObject('user')){
      $scope.user = $cookies.getObject('user')
    }
    else{
      $location.url('/')
    }

    $scope.index = function(){
      collectionFactory.index($scope.user._id, function(return_data){
        $scope.user = return_data
      })
    }

    $scope.toggleModal = function(){
        $scope.editModal = !$scope.editModal;
    }

    $scope.show_collection = function(){
      collectionFactory.show_collection($routeParams.id, function(return_data){
        $scope.collection = return_data
      })
    }

    $scope.show_user_collections = function() {
      collectionFactory.show_user_collections($scope.user._id, function(return_data){
        $scope.collections = return_data
      })
    }

    $scope.add_collection = function(){
      $scope.newCollection._user = $scope.user._id;
      collectionFactory.add_collection($scope.newCollection, function(return_data){
          $location.url('/collection/' + return_data._id)
      })
    }

    $scope.add_to_top = function(id){
      for(var i = 0; i < $scope.user._topcollections.length;i++){
        if($scope.user._topcollections[i]._id == id){
          return;
        }
      }
      $scope.body = {}
      $scope.body._user = $scope.user._id
      $scope.body._collection = id
      collectionFactory.add_to_top($scope.body,function(){
        $location.url('/profile/' + $scope.user._id)
      })
    }
    $scope.edit_col_name = function(){
        $scope.editModal = false;
        collectionFactory.editColName($routeParams.id, $scope.body.editcol, function(return_data){
            show_collection();
        })
    }

    $scope.delete_collection = function(id){
      $scope.body = {}
      $scope.body._user = $scope.user._id
      collectionFactory.delete_collection($scope.body,id, function(){
        $scope.show_user_collections()
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
      collectionFactory.shuffle($routeParams.id, function(){
        $scope.show_collection();
      })
    }
    $scope.logout = function(){
      $cookies.remove('user')
      $location.url('/')
    }

    $scope.index();
    $scope.show_collection();
    $scope.show_user_collections();

}]);
