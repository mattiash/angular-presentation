function MyCtrl( $scope ) {
    $scope.name = "Mattias";
    $scope.Click = function() {
        alert( "Hello " + $scope.name );
    }
}