app.factory('profileFactory', ['$http', function($http){

	function profileFactory(){
		//to get all data on profile page
		this.index = function(id,callback){
			$http.get('/getuser/' + id).then(function(return_data){
				callback(return_data.data)
			})
		}
		//to add colleciton re route to page using id passed back
		this.add_collection = function(collection, callback){
			$http.post('/addcollection', collection).then(function(return_data){
				callback(return_data.data)
			})
		}
		//to add subject callback calls index again
		this.add_subject = function(subject, callback){
			$http.post('/addsubject', subject).then(callback)
		}
		// to remove collection from top collections
        this.remove_from_top = function(body, callback){
            $http.post('/removecollectionfromtop', body).then(callback)
        }
		//to add user
        this.register = function(newuser, callback){
			$http.post('/register', newuser).then(function(return_data){
				callback(return_data.data)
			})
		}
		//to login user
		this.login = function(olduser, callback){
			$http.post('/login', olduser).then(function(return_data){
				callback(return_data.data)
			})
		}
	}
	return new profileFactory()
}])
