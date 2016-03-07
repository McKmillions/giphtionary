angular.module('giphTionary')
.controller('giphyCtrl', function($scope, $stateParams, giphyService, userService){

  // giphyService.getGiphData($stateParams.giphId)
  // .then(function(result) {
  //   $scope.giph = result.data;
  // });

  $scope.getGiphData = function() {
    giphyService.getData($scope.search)
    .then(function(data) {
      console.log(data);
      // $scope.giphData = data[0].images.fixed_height.url;
      $scope.giphData = data.fixed_height_downsampled_url;
      $scope.search = ""
    });
  };

});
