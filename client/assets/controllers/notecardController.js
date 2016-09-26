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
    $scope.add_card_index = function(){
        $scope.newCardIndex.index = $routeParams.cardid
        $scope.newCardIndex._collection = $routeParams.colid ;
        collectionFactory.add_card_index($scope.newCardIndex, function(data){
            $location.url('/card/'+ data._id)
        })
    }
    $scope.editcard = function(){
        $location.url('/editcard/'+$scope.card._id)
    }
    $scope.editcardnow = function(){
        collectionFactory.editcard($scope.editedCard, function(){
            $location.url('/card/' + $scope.card._id)
        })
    }
    $scope.show_card = function(){
        collectionFactory.show_card($routeParams.id, function(data){
            $scope.card = data
            $scope.editedCard = data
            $scope.display = $scope.card.question
        })
    }
    $scope.swap = function(){
        if($scope.card.question == $scope.display){
            $scope.display = $scope.card.answer
        }
        else{
            $scope.display = $scope.card.question
        }
    }
    $scope.removecard = function(){
        collectionFactory.removecardfromcard($scope.card, function(){
            $location.url('/collection/' + $scope.card._collection._id)
        })
    }
    $scope.nextcard = function(){
        collectionFactory.nextcard($scope.card._collection._id,$scope.card._id,function(data){
            if(data.data){
                $location.url('/card/' + data.data)
            }
            else{
                $location.url('/collection/' + $scope.card._collection._id)
            }
        })
    }
    $scope.lastcard = function(){
        collectionFactory.lastcard($scope.card._collection._id,$scope.card._id,function(data){
            if(data.data){
                $location.url('/card/' + data.data)
            }
            else{
                $location.url('/collection/' + $scope.card._collection._id)
            }
        })
    }
    $scope.backtocollection = function(){
        $location.url('/collection/' + $scope.card._collection._id)
    }
    $scope.logout = function(){
        $cookies.remove('user')
        $location.url('/')
    }

    $scope.show_card()
}]);
