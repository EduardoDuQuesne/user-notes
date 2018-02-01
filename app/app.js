/*jshint esversion: 6 */

angular.module("NotesApp", ["ngRoute"])
.constant('FBUrl', 'https://user-notes-10f73.firebaseio.com/')
.config($routeProvider => {
    $routeProvider
    .when('/register', {
        templateUrl: 'partials/register-view.html',
        controller: 'RegisterCtrl',
    })
    .when('/login', {
        templateUrl: 'partials/login-view.html',
        controller: 'LoginCtrl'
    })
    .when('/notes', {
        templateUrl: 'partials/note-list-view.html',
        controller: 'NoteListCtrl'
    })
    .when('/new', {
        templateUrl: 'partials/new-note-view.html',
        controller: 'NewNoteCtrl'
    })
    .otherwise('/');
})
.run(FBCreds => {
    let cred = FBCreds;
    let authConfig = {
      apiKey: cred.key,
      authDomain: cred.authDomain
    };
    firebase.initializeApp(authConfig);
  });