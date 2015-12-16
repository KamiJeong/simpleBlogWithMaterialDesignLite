'use strict';
app.controller('HomeCtrl', ['$scope', '$http', 'moment', function ($scope, $http, moment) {

    $http.get('./json/sample.json')
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
                $scope.oldContents = [];

                for (var i = 0; i < contentsLength - 1; i++) {
                    $scope.oldContents[i] = $scope.contents[i];
                    //console.log(oldContent);
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