app2.controller("peopleCtrl",  function($scope, $http) {

	$http.get("https://cdn.contentful.com/spaces/oms6o6p0a1c2/entries?access_token=f4a10de7d79820fd2c5559abb51c928a89e3df67b7ea0955dbb59ff22c9586d9&content_type=kobi")
	.then(function(response) {
		console.log(response.data);
        $scope.aboutKobi = response.data.items[0].fields.shortAboutKobi;
        	
    });

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

app2.controller("kobiCtrl",  function($scope, $http) {
  $http.get("https://cdn.contentful.com/spaces/oms6o6p0a1c2/entries?access_token=f4a10de7d79820fd2c5559abb51c928a89e3df67b7ea0955dbb59ff22c9586d9&content_type=kobi")
    .then(function(response) {
        console.log(response.data);
        $scope.kobi = response.data.items[0].fields;
            
    });

});

app2.controller("picCtrl",  function($scope, $http) {
    // $http.get("data/projects.json")
    // .then(function(response) {
    //     $scope.data = response.data;

    // });
});


app2.controller("contactCtrl",  function($scope, $http) {
    // $http.get("data/projects.json")
    // .then(function(response) {
    //     $scope.data = response.data;

    // });
});
