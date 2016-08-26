app.factory('collectionFactory', ['$http', function($http){

function collectionFactory(){


	this.show_collection = function(id, callback){
		$http.get('/getcollection/' + id).then(function(returned_data){
			callback(returned_data.data)
		})
	}
	this.show_user_collections = function(id, callback){
		$http.get('/getcollectionsbyuser/' + id).then(function(returned_data){
			callback(returned_data.data)
		})
	}


    this.shuffle = function(id,callback){
        $http.get('/shufflecollection/' + id).then(function(){
            callback()
        })
    }
    this.removecardfromcard = function(card,callback){
        $http.post('/removecard/' + card._id, card).then(function(){
            callback()
        })
    }

    this.nextcard = function(collid,cardid,callback){
        $http.get('/nextcard/'+collid+'/'+cardid).then(function(data){
            callback(data.data)
        })
    }
    this.editcard= function(editedcard, callback){
        $http.post('/editcard/'+editedcard._id, editedcard).then(function(){
            callback()
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

    		this.edit_collection = function(id){
    			$http.post('/editcollection/' + id).then(function(){

    			})
    		}
    		this.remove_collection = function(){
    			$http.get('/removecollection' + id).then(function(){

    			})
    		}
    ///////////////////////// End of profile page ////////////////////////////
    this.add_card = function(newCard, callback){
        $http.post('/pushcard', newCard ).then(function(){
            callback();
        })
    }

    this.show_card = function(id, callback){
        $http.get('/showcard/' +id).then(function(data){
            callback(data.data)
        })
    }
}
return new collectionFactory()

}])
