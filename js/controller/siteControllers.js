app2.controller("peopleCtrl",  function($scope, $http) {
    $http.get("data/people.json")
    .then(function(response) {
        $scope.data = response.data;

    });
});


app2.controller("projectCtrl",  function($scope, $http) {
    $http.get("data/projects.json")
    .then(function(response) {
        $scope.data = response.data;

    });
});

