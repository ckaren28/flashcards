app.controller('subjectController', ['$scope', '$location', 'subjectFactory', '$routeParams', '$cookies' function($scope, $location, subjectFactory, $routeParams, $cookies){

$scope.subject = {}
$scope.user = {}

if($cookies.getObject('user')){
	$scope.user = $cookies.getObject('user')
}
else{
	$location.url('/')
}


$scope.get_subject = function(){
  subjectFactory.show_subject($routeParams.id, function(data){
  	$scope.subject = data
}
$scope.remove_subject = function(){
	subjectFactory.remove_subject($routeParams.id, function(){
		location.url('/profile')
	})
}



}]);
