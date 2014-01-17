function MyCtrl( $scope ) {
    $scope.name = "World";
    $scope.Click = function() {
        alert( "Hello " + $scope.name );
    }
}