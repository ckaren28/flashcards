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

    this.add_collection = function(collection, callback){
        $http.post('/addcollection', collection).then(function(returned_data){
            callback(returned_data.data)
        })
    }

    this.add_to_top = function(body,callback){
        $http.post('/addtotopcollections', body).then(callback())
    }

    this.delete_collection = function(body,id,callback){
        $http.post('/removecollection/' + id, body).then(callback())
    }
    
    this.index = function(id,callback){
        $http.get('/getuser/' + id).then(function(return_data){
            callback(return_data.data)
        })
    }

    this.shuffle = function(id,callback){
        $http.get('/shufflecollection/' + id).then(callback())
    }

    this.removecardfromcard = function(card,callback){
        $http.post('/removecard/' + card._id, card).then(callback())
    }

    this.nextcard = function(collid,cardid,callback){
        $http.get('/nextcard/'+collid+'/'+cardid).then(function(data){
            callback(data.data)
        })
    }

    this.editcard= function(editedcard, callback){
        $http.post('/editcard/'+editedcard._id, editedcard).then(callback())
    }

    this.add_card = function(newCard, callback){
        $http.post('/pushcard', newCard ).then(callback())
    }

    this.show_card = function(id, callback){
        $http.get('/showcard/' +id).then(function(data){
            callback(data.data)
        })
    }
}
return new collectionFactory()

}])
