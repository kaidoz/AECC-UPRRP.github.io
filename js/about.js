

// Initialize Firebase
var config = {
apiKey: "AIzaSyC3UWKkBeQCRo2YaL7pdek_R2UJuyoDvfk",
authDomain: "aecc-uprrp.firebaseapp.com",
databaseURL: "https://aecc-uprrp.firebaseio.com",
storageBucket: "aecc-uprrp.appspot.com",
};

firebase.initializeApp(config);


var app = angular.module('about', [ 'firebase']);

app.controller('aboutCtrl', aboutController);


function aboutController ($scope, $firebaseArray) {
    var membersRef = firebase.database().ref('members');
    $scope.members = $firebaseArray(membersRef);
    $scope.members.$loaded().then(function(){
        console.log($scope.members);
    })
}

    