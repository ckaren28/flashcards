app.controller('profileController', ['$scope', '$location', 'profileFactory', '$cookies', function($scope, $location, profileFactory, $cookies){
  //this is where the data for top collections will be stored.
    $scope.user = {}
    if($cookies.getObject('user')){
      $scope.user = $cookies.getObject('user')
    }
    else{
      $location.url('/')
    }

  //show the netflix scroll, this should show all top collections
  //**********************check**************
    $scope.index = function(){
      profileFactory.index($scope.user._id, function(returned_Data){
        $scope.user = returned_Data
      })
    }

    $scope.logout = function(){
      $cookies.remove('user')
      $location.url('/')
    }

    $scope.show_collection = function(id){
      $location.url('/collection/'+ id)
    }

    $scope.show_subject = function(id){
        console.log(subject);
      $location.url('/subject/' + id)
    }

    $scope.add_collection = function(){
      $scope.newCollection._user = $scope.user._id;
      profileFactory.add_collection($scope.newCollection,function(data){
        $location.url('/collection/' + data._id)
      })
    }
    $scope.remove_from_top = function(id){
        $scope.body = {};
        $scope.body._user = $scope.user._id;
        $scope.body._collection = id
        profileFactory.remove_from_top($scope.body, function(){
            $scope.index();
        })
    }

    $scope.add_subject = function(){
      $scope.newSubject._user = $scope.user._id;
      profileFactory.add_subject($scope.newSubject,function(){
        $scope.newSubject = {}
        $scope.index();
      })
    }


    $scope.index();
}]);
