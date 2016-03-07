angular.module('giphTionary')
.controller('regCtrl', function($scope, userService){

  $scope.register = function(newEmail, newPassword){
    userService.register(newEmail, newPassword);
  };

  $scope.fbSignUp = function(){
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
