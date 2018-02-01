/*jshint esversion: 6 */

angular.module('NotesApp').factory('UserFactory', function () {

    let newUser = ({ email, password }) => {
        return firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch(error => {
                console.log('USER ERROR', error);
            });
    };

    let loginUser = ({ email, password }) => {
        return firebase.auth().signInWithEmailAndPassword(email, password);
    };

    let logoutUser = () => {
        return firebase.auth().signOut();
    };

    return {
        newUser,
        loginUser,
        logoutUser
    };
});