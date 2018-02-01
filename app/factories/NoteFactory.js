/*jshint esversion: 6 */

angular.module("NotesApp").factory("NoteFactory", function (FBUrl, $q, $http) {

    function getNotes(uid) {
        return $q((resolve, reject) => {
            $http
                .get(`${FBUrl}/notes.json?orderBy="uid"&equalTo="${uid}"`)
                .then((notes) => {
                    resolve(notes.data);
                })
                .catch(error => {
                    reject(error);
                });
        });
    }

    function saveNote(userNote) {
        return $q((resolve, reject) => {
            $http
                .post(`${FBUrl}/notes.json`, JSON.stringify(userNote))
                .then(data => {
                    resolve(data);
                })
                .catch(error => {
                    reject(error);
                });
        });
    }

    return {getNotes, saveNote};
});