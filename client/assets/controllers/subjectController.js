app.controller('subjectController', ['$scope', '$location', 'subjectFactory', '$routeParams', '$cookies', function($scope, $location, subjectFactory, $routeParams, $cookies){

$scope.subject = {}
$scope.user = {}

if($cookies.getObject('user')){
	$scope.user = $cookies.getObject('user')
}
else{
	$location.url('/')
}

$scope.get_subject = function(){
  $scope.body = {}
  $scope.body._user = $scope.user._id
  $scope.body._sub = $routeParams.id
  subjectFactory.show_subject($scope.body, function(return_data){
  	$scope.subject = return_data
  })
}
$scope.index = function(){
	subjectFactory.index($scope.user._id, function(return_data){
	  $scope.user = return_data
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
    subjectFactory.add_to_top($scope.body,function(){
      $location.url('/profile/' + $scope.user._id)
    })
}
$scope.index();
$scope.get_subject();


// $scope.remove_subject = function(){
//
// }





}]);
