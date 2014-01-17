function MyCtrl( $scope, $http ) {
     $scope.FetchJoke = function() {
        $http.get( "http://api.icndb.com/jokes/random").then( function(response) {
            $scope.data = response.data;
        });
    }
}
