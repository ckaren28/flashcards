app.factory('subjectFactory', [$http, function($http){
  function subjectFactory(){

            //from subject controller, this goes to the subject page. and shows the subject
          	this.show_subject = function(id){
    					$http.post('/getcollectionsbysub/' + id).then(function(returned_data){
    						callback(returned_data.data)
    					})
    				}


	}
	return new subjectFactory()
  }])

}]);
