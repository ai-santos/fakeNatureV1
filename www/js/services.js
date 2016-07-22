angular.module('starter.services', [])

.factory('Pictures', function ($http) {
  return {
    // all: function() {
    //   return users;
    // },
    get: function() {
      return $http({
        method: 'GET',
        url: 'https://naturegram-api.herokuapp.com/api/v1/pictures'
      })
      .then(function successCallback(pictures) {
          return pictures
          console.log(pictures);
        }, function errorCallback(response) {
          return response
        });
    }
  };

})

.factory('Users', function ($http) {
  return {
    // all: function() {
    //   return users;
    // },
    get: function() {
      return $http({
        method: 'GET',
        url: 'http://naturegram-api.herokuapp.com/api/v1/users'
      })
      .then(function successCallback(users) {
          return users
        }, function errorCallback(response) {
          return response
        });
    }
  };

})

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png',
    pic: 'img/yosemite.png',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto fuga doloremque aspernatur laudantium fugit veniam dolorum sit velit voluptatum repudiandae repellendus repellat, eligendi eius iusto, quam maiores quidem dolor similique!',
    posts: '2',
    network: '5A',
    handle: 'Nickname'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png',
    pic: 'img/yosemite.png',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto fuga doloremque aspernatur laudantium fugit veniam dolorum sit velit voluptatum repudiandae repellendus repellat, eligendi eius iusto, quam maiores quidem dolor similique!',
    posts: '2',
    network: '5A',
    handle: 'Nickname'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg',
    pic: 'img/yosemite.png',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto fuga doloremque aspernatur laudantium fugit veniam dolorum sit velit voluptatum repudiandae repellendus repellat, eligendi eius iusto, quam maiores quidem dolor similique!',
    posts: '2',
    network: '5A',
    handle: 'Nickname'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png',
    pic: 'img/yosemite.png',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto fuga doloremque aspernatur laudantium fugit veniam dolorum sit velit voluptatum repudiandae repellendus repellat, eligendi eius iusto, quam maiores quidem dolor similique!',
    posts: '2',
    network: '5A',
    handle: 'Nickname'

  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png',
    pic: ['img/yosemite.png','img/yosemite.png', 'img/yosemite.png', 'img/yosemite.png', 'img/yosemite.png', 'img/yosemite.png', 'img/yosemite.png', 'img/yosemite.png', 'img/yosemite.png'],
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto fuga doloremque aspernatur laudantium fugit veniam dolorum sit velit voluptatum repudiandae repellendus repellat, eligendi eius iusto, quam maiores quidem dolor similique!',
    posts: '2',
    network: '5A',
    handle: 'Nickname'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
