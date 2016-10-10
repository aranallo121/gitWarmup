var app = angular.module("MainApp", []);

app.controller("MainController", ["$scope", function($scope){
    $scope.test = "Injection working so hard"
    
}])//close controller