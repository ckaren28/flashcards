app.controller('loginController', ['$scope', 'userFactory', '$location', '$cookies', function($scope, userFactory, $location, $cookies){
	$scope.errors= false;
	$scope.messages=[];

//Registering new user
	$scope.register = function(){
		userFactory.register($scope.newUser, function(data){
			$scope.messages =[]
			if(data.errors){
				$scope.errors = true;
				for (err in data.errors){
					$scope.messages.push(data.errors[err].message)
				}
			}
			else if(data.code == 11000){
				$scope.errors = true;
				$scope.messages.push('The email address you have provided is already in use please login in or use a different email')
			}
			else{
				$cookies.putObject('user', {first_name : data.first_name, last_name : data.last_name})
//once registration complete, send to profile page..
				$location.url('/profile')
			}

		})
	}
	$scope.login = function(){
		userFactory.login($scope.loginUser, function(data){
			$scope.messages = []
			if(data.errors){
				$scope.errors = true;
			}
			else if(data.data){
				$scope.errors = true;
				$scope.messages.push(data.data)
			}
			else{
				$cookies.putObject('user', {first_name : data.first_name, last_name : data.last_name})
//after login, send to the profile page
				$location.url('/profile')

			}
		})
	}


}])
