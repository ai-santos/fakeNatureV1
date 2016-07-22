angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})



.controller('SignupCtrl', function($scope) {
  alert('running signup ctrl');
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

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats, Users) {
  $scope.chat = Chats.get($stateParams.chatId);
  Users.get().then(function(value){
    $scope.users = value
  })
})


