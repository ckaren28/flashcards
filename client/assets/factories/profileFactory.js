app.factory('profileFactory', [$http, function($http){
  function profileFactory(){

    //to get all data on profile page
    		this.index = function(callback){
    			$http.get('/getuser').then(function(return_data){
    				callback(return_data.data)
    			})
    		}


	}
	return new profileFactory()
  }])

}]);
