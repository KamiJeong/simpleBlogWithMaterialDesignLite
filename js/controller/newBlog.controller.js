'use strict';
app.controller('NewBlogCtrl', ['$scope', function ($scope) {
    //alert('working??');
    $scope.postNewBlog = function ($event, newBlog) {
        $event.preventDefault();
        console.log(newBlog);
        //alert('working');
    };
}]);