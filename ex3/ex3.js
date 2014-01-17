function MyCtrl( $scope, $http ) {

    $scope.FetchJokes = function() {
        $http.get( "http://api.icndb.com/jokes/random/3")
        .then( function(response) {
            $scope.data = response.data;
        });
    }

}