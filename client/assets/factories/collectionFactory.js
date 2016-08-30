app.factory('collectionFactory', ['$http', function($http){

    function collectionFactory(){    
        //adds a collection to user, will also add to top collections of user, returns collection data to display
        this.add_collection = function(collection, callback){
            $http.post('/addcollection', collection).then(function(return_data){
                callback(return_data.data)
            })
        }
        // deletes collection completely
        this.delete_collection = function(body,id,callback){
            $http.post('/removecollection/' + id, body).then(callback())
        }
        // shuffle collection, using random indices
        this.shuffle = function(id,callback){
            $http.get('/shufflecollection/' + id).then(callback())
        }
        // adds collection to top collections of user
        this.add_to_top = function(body,callback){
            $http.post('/addtotopcollections', body).then(callback())
        }
        this.clonecollections = function(body,callback){
            console.log(body)
            $http.post('/clonecollection/' + body._collection, body).then(function(return_data){
                console.log(return_data)
                callback()
            })
        }


        // gets collection data to display to the user
    	this.show_collection = function(id, callback){
    		$http.get('/getcollection/' + id).then(function(return_data){
    			callback(return_data.data)
    		})
    	}
        // gets the all collection data for the user to display on the full page 
    	this.show_user_collections = function(id, callback){
    		$http.get('/getcollectionsbyuser/' + id).then(function(return_data){
    			callback(return_data.data)
    		})
    	}
        // will return all collections that are public
        this.all_collections = function(callback){
            $http.get('/getcollections').then(function(return_data){
                callback(return_data.data)
            })
        }
        //adds card to the collection
        this.add_card = function(newCard, callback){
            $http.post('/pushcard', newCard).then(callback())
        }
        //adds card  at the defined index
        this.add_card_index = function(newCard, callback){
            $http.post('/pushcardatindex', newCard).then(function(return_data){
                callback(return_data.data)
            })
        }
        // edits selected card
        this.editcard= function(editedcard, callback){
            $http.post('/editcard/'+editedcard._id, editedcard).then(callback())
        }
        // removes card from selected card page
        this.removecardfromcard = function(card,callback){
            $http.post('/removecard/' + card._id, card).then(callback())
        }
        // gets card info to display to the user
        this.show_card = function(id, callback){
            $http.get('/showcard/' +id).then(function(return_data){
                callback(return_data.data)
            })
        }
        // gets card info at the next index or if at end returns to collection page
        this.nextcard = function(collid,cardid,callback){
            $http.get('/nextcard/'+collid+'/'+cardid).then(function(return_data){
                callback(return_data.data)
            })
        }
        //gets card info at the before index or if at the beginning returns to collection page
    	this.lastcard = function(collid, cardid, callback){
    		$http.get('/lastcard/'+collid+'/'+cardid).then(function(return_data){
    			callback(return_data.data)
    		})
    	}
        //sets up user info to display and/or establish cookie.
        this.index = function(id,callback){
            $http.get('/getuser/' + id).then(function(return_data){
                callback(return_data.data)
            })
        }
        this.getusernotop = function(id,callback){
            $http.get('/getusernotop/' + id).then(function(return_data){
                callback(return_data.data)
            })
        }
    }
    return new collectionFactory()

}])
