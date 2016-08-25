app.controller('notecardController', ['$scope', '$location', 'collectionFactory','$routeParams', function($scope, $location, collectionFactory, $routeParams){
    $scope.card = {};

    $scope.add_card = function(){
        $scope.newCard._collection = $routeParams.id
        collectionFactory.add_card($scope.newCard, function(){
            $location.url('/collection/'+ $routeParams.id)
        })
    }

    $scope.show_card = function(){
        collectionFactory.show_card($routeParams.id, function(data){
            $scope.card = data
            console.log($scope.card);
        })
    }
    $scope.show_card()

}]);
