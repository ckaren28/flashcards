app.controller('loginController', ['$scope', 'profileFactory', '$location', '$cookies', function($scope, profileFactory, $location, $cookies){
	$scope.messages={};
	$scope.loginmessages={}
//Registering new user
	$scope.register = function(){
		profileFactory.register($scope.newUser, function(data){
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
//Login old user
	$scope.login = function(){
		profileFactory.login($scope.loginUser, function(data){
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
