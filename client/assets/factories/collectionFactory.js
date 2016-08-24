app.factory('collectionFactory', [$http, function($http){
  function collectionFactory(){

    ////////////////////// Start of profile page ////////////////////////////

    //from the collection controller, this is to go see my top collection
    		this.show_collection = function(id){
    			$http.get('/getcollection/' + id).then(function(returned_data){
    				callback(returned_data.data)
    			})
    		}

    //from collection controller, shows all collections created by user
        this.get_collection_by_user = function(id){
          $http.get('/getcollectionsbyuser/' + id).then(function(){

          })
        }

        this.addtotopcollections = function(){
          $http.get('/addtotopcollections').then(function(){

          })
        }

    //from collection controller, adding collection to db
    		this.add_collection = function(){
    			$http.post('/addcollection').then(function(){

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
    ///////////////////////// End of profile page ////////////////////////////



	}
	return new collectionFactory()
  }])

}]);
