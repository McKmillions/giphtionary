angular.module('giphTionary', ['ui.router', 'firebase'])
.constant('fb', {
  url: 'https://giphtionary.firebaseio.com/'
})
.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
    .state('home',{
      url: '/home',
      templateUrl: './views/homeTmpl.html',
      controller: 'homeCtrl'
    })
    .state('login', {
      url: '/login',
      templateUrl: './views/loginTmpl.html',
      controller: 'loginCtrl'
    })
    .state('register', {
      url: '/register',
      templateUrl: './views/regTmpl.html',
      controller: 'regCtrl'
    })
    .state('giphy', {
      // url: '//:uid',
      templateUrl: './views/giphtionaryTmpl.html',
      controller: 'giphyCtrl'
    });
  $urlRouterProvider.otherwise('/home');
});
