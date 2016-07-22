angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('CameraCtrl', function($scope) {

    $scope.picture = 'http://placehold.it/300x300';
    $scope.takePicture = function() {
      

    };

})

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function(){
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAcessoryBar(true);
    }
    if (window.StatusBar){
      StatusBar.styleDefault();
    }
  });
})

.controller('SignupCtrl', function($scope) {
  alert('running signup ctrl');
})

.controller('AccountCtrl', function($scope) {
  alert('Take a Picture');
})

// .controller('MapCtrl', function($scope) {
//   alert('map displaying');
// })

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})


