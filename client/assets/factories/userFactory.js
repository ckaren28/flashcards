app.factory('userFactory', ['$http', function($http){

	function userFactory(){
		////////////// Collection Controller -- Inside the profile page ///////////////
		this.register = function(newuser, callback){
//check url name with routes.js
			$http.post('/register', newuser).then(function(returned_data){
				callback(returned_data.data)
			})
		}
		this.login = function(olduser, callback){
//check url name with routes.js
			$http.post('/login', olduser).then(function(returned_data){
				callback(returned_data.data)
			})
		}
		/////////////////// End of the login page ///////////////////////////


//from the collection controller, this is to go see my top collection
		this.show_collection = function(){
			$http.post('/', ___).then(function(returned_data){
				callback(returned_data.data)
			})
		}
//from subject controller, this goes to the subject page. and shows the subject
		this.show_subject = function(){
			$http.post('/', ___).then(function(returned_data){
				callback(returned_data.data)
			})
		}
//from collection controller,
		this.add_collection = function(){

		}

	}
	return new userFactory()
}])
