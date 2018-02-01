/*jshint esversion: 6 */

angular.module('NotesApp').controller('LoginCtrl', function ($scope, UserFactory) {
   let account = {};

    $scope.login = () => {
        UserFactory.loginUser($scope.account)
            .then(user => {
                console.log('LOGGED IN', user);
            });
    };

    $scope.logout = () => {
        UserFactory.logoutUser()
            .then(user => {
                console.log('LOGGED OUT', user);
            });
    };

});