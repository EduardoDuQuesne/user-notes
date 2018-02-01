/*jshint esversion: 6 */

angular.module('NotesApp').controller('NewNoteCtrl', function ($scope, NoteFactory) {
    $scope.userNote = {
        note: '',
        uid: firebase.auth().currentUser.uid
    };

    $scope.newNote = () => {
        NoteFactory.saveNote($scope.userNote);
    };
});