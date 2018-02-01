/*jshint esversion: 6 */

angular.module('NotesApp').controller('RegisterCtrl', function ($scope, UserFactory) {

    $scope.account = {};
    $scope.registerUser = () => {
        UserFactory.newUser($scope.account)
            .then((user) => {
                console.log('THEN CHECK', user);
                $scope.login();
            })
            .catch(error => {
                console.log('Error Register', error);
            });
    };

    $scope.login = () => {
        UserFactory.loginUser($scope.account)
            .then(user => {
                console.log('LOGGED IN', user);
            });
    };



});