app2.controller("peopleCtrl",  function($scope, $http) {

    $http.get("https://cdn.contentful.com/spaces/oms6o6p0a1c2/entries?access_token=f4a10de7d79820fd2c5559abb51c928a89e3df67b7ea0955dbb59ff22c9586d9&content_type=kobi")
        .then(function(response) {
            console.log(response.data);
            $scope.aboutKobi = response.data.items[0].fields.shortAboutKobi;

        });

    $http.get("https://cdn.contentful.com/spaces/oms6o6p0a1c2/assets?access_token=f4a10de7d79820fd2c5559abb51c928a89e3df67b7ea0955dbb59ff22c9586d9")
        .then(function(response) {
            console.log(response.data.items);

            $scope.assets = response.data.items;
            $http.get("https://cdn.contentful.com/spaces/oms6o6p0a1c2/entries?access_token=f4a10de7d79820fd2c5559abb51c928a89e3df67b7ea0955dbb59ff22c9586d9&content_type=people&order")
                .then(function(response) {
                    console.log(response.data.items);
                    $scope.people={
                        graduateStudents:[],
                        undergraduateStudents:[],
                        alumni:[]
                    };
                    response.data.items.forEach(function(item, index){
                        var imgSrcId=item.fields.imgsrc.sys.id;
                        var person=item.fields;
                        $scope.assets.forEach(function(it,i){
                            if (imgSrcId==it.sys.id){
                                person["img"]="http:"+it.fields.file.url;
                            }
                        })
                        if (person.student=="Alumni"){
                            $scope.people.alumni.push(person)

                        }
                        if (person.student=="Undergraduate students"){
                            $scope.people.undergraduateStudents.push(person)

                        }
                        if (person.student=="Graduate students"){
                            $scope.people.graduateStudents.push(person)

                        }
                    })
                    // $scope.data = response.data.items;

                });

        });



    // $http.get("data/people.json")
    //.then(function(response) {
    //     $scope.data = response.data;

    // });
});


app2.controller("projectCtrl",  function($scope, $http) {
    $http.get("https://cdn.contentful.com/spaces/oms6o6p0a1c2/entries?access_token=f4a10de7d79820fd2c5559abb51c928a89e3df67b7ea0955dbb59ff22c9586d9&content_type=projects")
        .then(function (response) {
            $http.get("https://cdn.contentful.com/spaces/oms6o6p0a1c2/entries?access_token=f4a10de7d79820fd2c5559abb51c928a89e3df67b7ea0955dbb59ff22c9586d9&content_type=links")
                .then(function (response2) {
                    if (response2.data.items) {
                        //creating new object to hold the project all by the same year
                        var year = function (name) {
                            this.name = name,
                                this.projects = []
                        };

                        //create the array of projects by year
                        $scope.projects = {
                            years: []
                        };

                        //adding all the projects to the correct year
                        if (response.data.items) {
                            response.data.items.forEach(function (item, index) {
                                var project = item.fields;
                                var inside = false;

                                //creating a new array holding all the actual links not only sys information
                                project.readylinks = [];
                                if(project.links) {
                                    project.links.forEach(function (link, index) {
                                        var linkid = link.sys.id;
                                        //finding the correct link from the list by it id
                                        response2.data.items.forEach(function (li, i) {
                                            if (linkid == li.sys.id) {
                                                project.readylinks.push(li.fields);
                                            }
                                        })
                                    })
                                }

                                $scope.projects.years.forEach(function (itemy, i) {
                                    //if the year already exsist adding the project
                                    if (project.year == itemy.name) {
                                        itemy.projects.push(project);
                                        inside = true;
                                        // console.log(project.year);
                                    }
                                })
                                //create new year and adding the project
                                if (!inside) {
                                    var y = new year(project.year);
                                    y.projects.push(project);
                                    $scope.projects.years.push(y);
                                }
                                // console.log(project.year);
                                //console.log(project);
                            })
                        }
                    }
                });
        });
});


app2.controller("kobiCtrl",  function($scope, $http) {
    $http.get("https://cdn.contentful.com/spaces/oms6o6p0a1c2/entries?access_token=f4a10de7d79820fd2c5559abb51c928a89e3df67b7ea0955dbb59ff22c9586d9&content_type=kobi")
        .then(function(response) {
            console.log(response.data);
            $scope.kobi = response.data.items[0].fields;

        });

});

app2.controller("dorCtrl", function ($scope, $http) {
    // $http.get("https://cdn.contentful.com/spaces/oms6o6p0a1c2/entries?access_token=f4a10de7d79820fd2c5559abb51c928a89e3df67b7ea0955dbb59ff22c9586d9&content_type=kobi")
    //   .then(function(response) {
    //       console.log(response.data);
    //       $scope.kobi = response.data.items[0].fields;

    //   });
    $('html,body').scrollTop(0);
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


app2.controller("gprojectCtrl",  function($scope, $http) {
    $http.get("https://cdn.contentful.com/spaces/oms6o6p0a1c2/entries?access_token=f4a10de7d79820fd2c5559abb51c928a89e3df67b7ea0955dbb59ff22c9586d9&content_type=gprojects")
        .then(function (response) {
            $http.get("https://cdn.contentful.com/spaces/oms6o6p0a1c2/entries?access_token=f4a10de7d79820fd2c5559abb51c928a89e3df67b7ea0955dbb59ff22c9586d9&content_type=links")
                .then(function (response2) {
                    $http.get("https://cdn.contentful.com/spaces/oms6o6p0a1c2/assets?access_token=f4a10de7d79820fd2c5559abb51c928a89e3df67b7ea0955dbb59ff22c9586d9")
                        .then(function(response3) {

                            //create the array of projects
                            $scope.projects = [];

                            response.data.items.forEach(function (item, index) {
                                var project = item.fields;
                                project.updatedAt = item.sys.updatedAt;

                                //creating a new array holding all the actual links not only sys information
                                project.readylinks = [];
                                if(project.links) {
                                    project.links.forEach(function (link, index) {
                                        var linkid = link.sys.id;
                                        //finding the correct link from the list by it id
                                        response2.data.items.forEach(function (li, i) {
                                            if (linkid == li.sys.id) {
                                                project.readylinks.push(li.fields);
                                            }
                                        })
                                    })
                                }

                                //check if there is a picture to the project
                                if (project.img) {
                                    //finding the correct pic
                                    response3.data.items.forEach(function (pic, i) {
                                        if (project.img.sys.id == pic.sys.id) {
                                            project.readyImg = "http:" + pic.fields.file.url;
                                        }
                                    })
                                }

                                $scope.projects.push(project);

                            });
                    });
                });
        });
});


app2.controller("galleryCtrl",  function($scope, $http) {

    $http.get("https://cdn.contentful.com/spaces/oms6o6p0a1c2/assets?access_token=f4a10de7d79820fd2c5559abb51c928a89e3df67b7ea0955dbb59ff22c9586d9")
        .then(function(response) {
            console.log(response.data.items);

            $scope.assets = response.data.items;
            $http.get("https://cdn.contentful.com/spaces/oms6o6p0a1c2/entries?access_token=f4a10de7d79820fd2c5559abb51c928a89e3df67b7ea0955dbb59ff22c9586d9&content_type=galleryItem")
                .then(function(response) {
                    console.log(response.data.items);
                    $scope.images=[];
                    response.data.items.forEach(function(item, index){
                        var imgSrcId=item.fields.image.sys.id;

                        $scope.assets.forEach(function(it,i){
                            if (imgSrcId==it.sys.id){
                                var itemG ={src:"http:"+it.fields.file.url,
                                desc:item.fields.name};
                                $scope.images.push(itemG);
                            }
                        })
                    })
                });
        });
    
// initial image index
        $scope._Index = 0;
// if a current image is the same as requested image
        $scope.isActive = function (index) {
            return $scope._Index === index;
        };
// show prev image
        $scope.showPrev = function () {
            $scope._Index = ($scope._Index > 0) ? --$scope._Index : $scope.images.length - 1;
        };
// show next image
        $scope.showNext = function () {
            $scope._Index = ($scope._Index < $scope.images.length - 1) ? ++$scope._Index : 0;
        };
// show a certain image
        $scope.showPhoto = function (index) {
            $scope._Index = index;
        };

    });
