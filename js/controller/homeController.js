app.controller("homeController",  function($scope, $http) {
    $http.get("data/home.json")
    .then(function(response) {
        $scope.data = response.data;
    });
});
