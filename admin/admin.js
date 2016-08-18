

// Initialize Firebase
var config = {
    apiKey: "AIzaSyC3UWKkBeQCRo2YaL7pdek_R2UJuyoDvfk",
    authDomain: "aecc-uprrp.firebaseapp.com",
    databaseURL: "https://aecc-uprrp.firebaseio.com",
    storageBucket: "aecc-uprrp.appspot.com",
};

firebase.initializeApp(config);


var app = angular.module('adminApp', [ 'firebase']);

app.controller('addMemberCtrl', addMemberController);


function addMemberController ($scope, $firebaseObject) {
    
    $scope.name;
    $scope.email;
    $scope.facebook;
    $scope.profilePic;
    
    $scope.addMember = function (){
        
        if( $scope.name && $scope.email )
        
        var membersRef = firebase.database().ref('members');
        membersRef.push({
            name: $scope.name,
            email: $scope.email,
            facebookProfile: $scope.facebook,
            profilePic: $scope.profilePic
        }).then(function(){
            alert("Memeber Added successful");
            $scope.name = '';
            $scope.email = '';
            $scope.facebook = '';
            $scope.profilePic = '';
            
        }).catch(function(error){
            alert(error.message);
        })
    }
    
    
}

    