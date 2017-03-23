//http://stackoverflow.com/questions/35951288/angularjs-route-for-node-express-js-backend
(function () {


    var rout = angular.module("app");



    rout.config(['$routeProvider', '$locationProvider',
    function($routeProvider,$locationProvider){
        $routeProvider
        .when('/login', {
            templateUrl : 'partilas/login.html',
            controller: 'login-register'
        }).when('/home', {
            templateUrl : 'partilas/home.html',
            controller  : 'home'
        }).when('/', {
            templateUrl : 'partilas/home.html',
            controller  : 'home'
        });
    $locationProvider.html5Mode(true);
}]);
            


})();