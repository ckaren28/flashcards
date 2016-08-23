app.factory('userFactory', [$http, function($http){
  function userFactory(){

		this.create = function(newuser, callback){
			$http.post('/register', newuser).then(function(){
				callback()
			})
		}

		this.login = function(olduser, callback){
			$http.post('/login', olduser).then(function(){
				callback()
			})
		}
	}
	return new userFactory()
}])

}]);
