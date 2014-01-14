function MyCtrl( $scope ) {
    $scope.name = "world";
    $scope.Click = function() {
        alert( "Hello " + $scope.name );
    }
}