app.factory('userFactory', ['$http', function($http){

	function userFactory(){
////////////////// Login Controller, on login/register html page ///////////////
		this.register = function(newuser, callback){
			$http.post('/register', newuser).then(function(returned_data){
				callback(returned_data.data)
			})
		}
		this.login = function(olduser, callback){
			$http.post('/login', olduser).then(function(returned_data){
				callback(returned_data.data)
			})
		}

//////////////////////// End of the login page /////////////////////////////////


////////////////////// Start of profile page ////////////////////////////

//from the collection controller, this is to go see my top collection
		this.show_collection = function(id){
			$http.post('/getcollection/' + id).then(function(returned_data){
				callback(returned_data.data)
			})
		}
//from subject controller, this goes to the subject page. and shows the subject
		this.show_subject = function(id){
			$http.post('/getcollectionsbysub/' + id).then(function(returned_data){
				callback(returned_data.data)
			})
		}
//from collection controller, adding collection to db
		this.add_collection = function(){
			$http.post('/addcollection').then(function(){

			})
		}
//from collection controller, shows all collections created by user
		this.get_collection_by_user = function(id){
			$http.post('/getcollectionsbyuser/' + id).then(function(){

			})
		}
		this.edit_collection = function(id){
			$http.post('/editcollection/' + id).then(function(){

			})
		}
		this.remove_collection = function(){
			$http.get('/removecollection' + id).then(function(){

			})
		}
	}//end of userFactory function.

	return new userFactory()
}])
