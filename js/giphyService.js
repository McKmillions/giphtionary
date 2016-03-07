// angular.module('giphTionary').service('giphyService', function($http) {
// 	this.getGiphy = function() {
// 		return $http({
// 			method: 'GET',
// 			url: 'http://api.giphy.com/'
// 		});
// 	};
//   this.getGiphData = function(giphId) {
// 		return $http({
// 			method: 'GET',
//       url: 'http://api.giphy.com/v1/gifs/search?q=' + giphId + '&api_key=dc6zaTOxFJmzC'
// 		});
// 	};
// });

angular.module('giphTionary').service('giphyService', function($http, $q){

  this.getData = function(giphSearch) {
    console.log(giphSearch);
        var dfd = $q.defer();
          $http({
            method: 'GET',
            // url: 'http://api.giphy.com/v1/gifs/search?q=' + giphSearch + '&api_key=dc6zaTOxFJmzC&limit=1',
            url: 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=' + giphSearch,
        }).then(function(response) {
            console.log(response.data);
            var giphResponse = response.data.data;
            dfd.resolve(giphResponse);
        });
        return dfd.promise;
    };

});
