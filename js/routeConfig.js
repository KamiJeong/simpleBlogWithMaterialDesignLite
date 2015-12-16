'use strict';
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'views/home.html',
            controller: 'HomeCtrl'
        })
        .when('/blog/:no', {
            templateUrl: 'views/blog.html',
            controller: 'BlogCtrl'
        })
        .when('/newBlog', {
            templateUrl: 'views/newBlog.html',
            controller: 'NewBlogCtrl'
        })
        .otherwise({
            redirectTo: '/home'
        });
}]);
