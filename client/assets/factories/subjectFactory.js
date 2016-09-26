app.factory('subjectFactory', ['$http', function($http){

    function subjectFactory(){
        //from subject controller, this goes to the subject page. and shows the subject
      	this.show_subject = function(body, callback){
    		$http.post('/getcollectionsbysub', body).then(function(returned_data){
    			callback(returned_data.data)
    		})
    	}
        // get user info to display proper subject, will allow all subjects to be displayed
        this.index = function(id,callback){
            $http.get('/getuser/' + id).then(function(return_data){
                callback(return_data.data)
            })
        }
        // from the subject page will allow collection to be added to the top collections of user
        this.add_to_top = function(body,callback){
            $http.post('/addtotopcollections', body).then(callback)
        }
	}
	return new subjectFactory()
}])
