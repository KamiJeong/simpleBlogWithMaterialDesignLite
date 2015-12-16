'use strict';
app.controller('BlogCtrl', ['$scope', '$http', 'moment', '$route', '$routeParams', function ($scope, $http, moment, $route, $routeParams) {
    //console.log($routeParams.no);
    var blogNo = $routeParams.no;

    $http.get('./json/sample.json', blogNo)
        .then(
            function (response) {
                $scope.status = response.status;
                $scope.contents = response.data;
                var contentsLength = $scope.contents.length;
                //console.log($scope.contents[1].date);
                for (var i = 0; i < contentsLength; i++) {
                    $scope.contents[i].daysAgo = daysAgo($scope.contents[i].date);
                    //console.log($scope.contents[i].daysAgo) ;
                }
                $scope.newistContent = $scope.contents[contentsLength - 1];
                //console.log($scope.newistContent);
            },
            function (response) {
                $scope.contents = response.data || "Request failed";
                $scope.status = response.status;
            });

    var daysAgo = function (d) {
        return moment(d, 'YYYY.MM.DD').fromNow();
    };
}]);