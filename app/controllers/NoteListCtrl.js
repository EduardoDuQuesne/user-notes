/*jshint esversion: 6 */

angular.module('NotesApp').controller('NoteListCtrl', function ($scope, NoteFactory) {

        let getNotesOnLoad = () => {
            let uid = firebase.auth().currentUser.uid;
            NoteFactory.getNotes(uid)
                .then(data => {
                    $scope.notesArr = Object.keys(data).map(fbKey => {
                        return data[fbKey];
                    });
                });
        };

        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                getNotesOnLoad();
            }
        });
});