app.controller('loginController', ['$scope', 'userFactory', '$location', '$cookies', function($scope, userFactory, $location, $cookies){
	$scope.messages={};
	$scope.loginmessages={}

//Registering new user
	$scope.register = function(){
		userFactory.register($scope.newUser, function(data){
			$scope.messages ={}
			if(data.errors){
				$scope.messages= data.errors
			}
			else if(data.code == 11000){
				$scope.messages.duperr = {}
				$scope.messages.duperr.message='The email address or username you have provided is already in use please try again'
			}
			else{
				$cookies.putObject('user', {username : data.username, _id : data._id})
				$location.url('/profile/'+ data._id)
			}

		})
	}
	$scope.login = function(){
		userFactory.login($scope.loginUser, function(data){
			$scope.loginmessages = {}
			if(data.data){
				$scope.loginmessages.error = data.data
			}
			else{
				$cookies.putObject('user', {username : data.username, _id : data._id})
				$location.url('/profile/'+ data._id)

			}
		})
	}

}])

