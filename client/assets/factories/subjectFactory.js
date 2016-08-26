app.factory('subjectFactory', ['$http', function($http){
    function subjectFactory(){

            //from subject controller, this goes to the subject page. and shows the subject
  	this.show_subject = function(id, callback){
		$http.get('/getcollectionsbysub/' + id).then(function(returned_data){
			callback(returned_data.data)
		})
	}
    this.index = function(id,callback){
        $http.get('/getuser/' + id).then(function(return_data){
            callback(return_data.data)
        })
    }
    this.add_to_top = function(body,callback){
        $http.post('/addtotopcollections', body).then(callback())
    }


	}
	return new subjectFactory()
}])
