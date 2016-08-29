app.controller('findController', ['$scope', '$location', 'collectionFactory', '$routeParams', '$cookies', function($scope, $location, collectionFactory, $routeParams, $cookies){

	$scope.collections = []
	$scope.user = {}

    if($cookies.getObject('user')){
      $scope.user = $cookies.getObject('user')
    }
    else{
      $location.url('/')
    }

    $scope.index = function(){
      collectionFactory.getusernotop($scope.user._id, function(return_data){
        $scope.user = return_data
        console.log($scope.user)
      })
    }
	$scope.get_all_collections = function(){
		collectionFactory.all_collections(function(return_data){
			$scope.collections = return_data
		    for(var i = 0; i < $scope.collections.length; i++){
				console.log($scope.user._topcollections.indexOf($scope.collections[i]._id))
			}
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
        $scope.index()
      })
    }
    $scope.index()
	$scope.get_all_collections()

}])