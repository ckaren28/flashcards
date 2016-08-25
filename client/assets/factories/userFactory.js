app.factory('userFactory', ['$http', function($http){

	function userFactory(){
////////////////// Login Controller, on login/register html page ///////////////
		this.register = function(newuser, callback){
			$http.post('/register', newuser).then(function(returned_data){
				console.log(returned_data)
				callback(returned_data.data)
			})
		}
		this.login = function(olduser, callback){
			$http.post('/login', olduser).then(function(returned_data){
				console.log(returned_data)
				callback(returned_data.data)
			})
		}
//////////////////////// End of the login page /////////////////////////////////
	}//end of userFactory function.
	return new userFactory()
}])
