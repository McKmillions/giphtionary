angular.module('giphTionary')
.controller('loginCtrl', function($scope, userService){

  $scope.login = function(email, password){
    userService.login(email, password);
  };

  $scope.fbSignIn = function(){
    var ref = new Firebase("https://giphtionary.firebaseio.com");
    ref.authWithOAuthPopup("facebook", function(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
      } else {
        console.log("Authenticated successfully with payload:", authData);
      }
    });
  };

});
