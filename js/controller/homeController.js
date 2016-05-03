app.controller("homeController", ["$scope", "$http",
                           function ($scope, $http) {


// var news=[];

// var client = contentful.createClient({
//   space: 'oms6o6p0a1c2',
//   accessToken: 'f4a10de7d79820fd2c5559abb51c928a89e3df67b7ea0955dbb59ff22c9586d9'
// })

// client.getEntries({
//   'content_type': 'news'
// })
// .then(function (entries) {
//   // log the title for all the entries that might have it
//   entries.items.forEach(function (entry) {
//     if(entry.fields.title) {
//       // console.log(entry.fields)
//       news.push(entry.fields)
//     }
//   })
// })
// 	$scope.data=[]
// console.log(news);

// // $scope.$evalAsync();

// $scope.data=news;
// // console.log($scope.data.news);


// if ($scope.$root.$$phase != '$apply' && $scope.$root.$$phase != '$digest') {
//     $scope.$apply();
// }

  
    $http.get("https://cdn.contentful.com/spaces/oms6o6p0a1c2/entries?access_token=f4a10de7d79820fd2c5559abb51c928a89e3df67b7ea0955dbb59ff22c9586d9&content_type=news&order")
    .then(function(response) {
    	console.log(response.data.items);
    
        $scope.data = response.data.items;

    });
}]);

