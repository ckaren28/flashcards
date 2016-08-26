app.controller('notecardController', ['$scope', '$location', 'collectionFactory','$routeParams', '$cookies', function($scope, $location, collectionFactory, $routeParams, $cookies){

    $scope.card = {};
    $scope.user = {};
    if($cookies.getObject('user')){
      $scope.user = $cookies.getObject('user')
    }
    else{
      $location.url('/')
    }

    $scope.add_card = function(){
        $scope.newCard._collection = $routeParams.id
        collectionFactory.add_card($scope.newCard, function(){
            $location.url('/collection/'+ $routeParams.id)
        })
    }

    $scope.show_card = function(){
        collectionFactory.show_card($routeParams.id, function(data){
            $scope.card = data
            $scope.editedCard = data
        })
    }

    $scope.addcardatindex = function(){
        
    }
    $scope.editcard = function(){
        $location.url('/editcard/'+$scope.card._id)
    }
    $scope.editcardnow = function(){
        collectionFactory.editcard($scope.editedCard, function(){
            $location.url('/card/' + $scope.card._id)
        })
    }
    $scope.nextcard = function(){
        console.log($scope.card._collection)
        collectionFactory.nextcard($scope.card._collection,$scope.card._id,function(data){
            if(data.data){
                $location.url('/card/' + data.data)
            }
            else{
                $location.url('/collection/' + $scope.card._collection)
            }
        })
    }
    $scope.backtocollection = function(id){
        $location.url('/collection/' + $scope.card._collection)
    }
    $scope.removecard = function(){
        collectionFactory.removecardfromcard($scope.card._id, function(){
            $location.url('/collection/' + $scope.card._collection)
        })
    }
    $scope.logout = function(){
        $cookies.remove('user')
        $location.url('/')
    }
    $scope.show_card()



}]);
