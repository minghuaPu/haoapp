angular.module('jobseekers.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: '王红',
    lastText: '精通PHP',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: '李小明',
    lastText: '精通JAVA',
    face: 'img/max.png'
  }, {
    id: 2,
    name: '王大大',
    lastText: 'UI大师',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: '王小小',
    lastText: '音乐天才!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: '王狗狗',
    lastText: '不怕伤害.',
    face: 'img/mike.png'
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
})


.service('Session', function() {
    this.create = function(user) {
     
        this.user = user;
        this.userRole = user.userRole;
    };
    this.destroy = function() {
      this.user = null;
      this.userRole = null;
  };
    return this;
})
.service('Auth', ['Session','$window','$state', function(Session,$window,$state) {
    var authService = {};
    // 是否已经登录
    authService.isAuthenticated = function() {
      return !!Session.user;
    };
    // 是否有进入的权限
    authService.isAuthorized = function(authorizedRoles) {
      return false;
    };
      //log out the user and broadcast the logoutSuccess event
    authService.logout = function(){
      Session.destroy();
      $window.sessionStorage.removeItem("userInfo");
        $state.go('login');
    }

    return authService;
}])

.service('Share',['$ionicActionSheet','$timeout',function  ($ionicActionSheet,$timeout) {
     // 弹出层js
        this.show = function() {
          var hideSheet = $ionicActionSheet.show({
              buttons: [
                { text: '分享到朋友圈' },
                { text: '分享给好友' },
                { text: '分享到微博' }
              ],
              titleText: '分享好职位',
              cancelText: '取消',
              cancel: function() {
                   // add cancel code..
                 },
              buttonClicked: function(index) {
                return true;
              }
          });

          $timeout(function() {
              hideSheet();
          }, 2000);
        }
}])

.factory('Msgs', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: '王红',
    content: '我不冷，斯大林开发建设拉动房价！',
    lastText: '冷不冷？',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: '李小明',
    content: '我不冷，斯大林开发建设拉动房价！',
    lastText: '精通JAVA',
    face: 'img/max.png'
  }, {
    id: 2,
    name: '王大大',
    content: '我不冷，斯大林开发建设拉动房价！',
    lastText: 'UI大师',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: '王小小',
    content: '我不冷，斯大林开发建设拉动房价！',
    lastText: '音乐天才!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: '王狗狗',
    content: '我不冷，斯大林开发建设拉动房价！',
    lastText: '不怕伤害.',
    face: 'img/mike.png'
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
})

.factory('Jobs', function( $http,ENV) {
  
  var page=0;
  var hasmore = false;//标识有没有更多数据
  return {

    
    GetFeed: function() {
      page++;
       return $http({
              method:"jsonp",
              url:ENV.api+"/public/job?callback=JSON_CALLBACK",
              params:{'p':page}
              }).then(function(data){ 
                 
                  if (data) {
                       return data;
                  } 
             });
    },

    getJobDetail:function  (jobId) {
       return $http({
              method:"jsonp",
              url:ENV.api+"/public/job/"+jobId+"?callback=JSON_CALLBACK",
              }).then(function(data){ 
                 
                  if (data) {
                       return data;
                  } 
             });
    }
  };
})

.factory('Company' , function( $http,ENV) {
  
  var page=0;
  var hasmore = false;//标识有没有更多数据
  return {
    
    GetFeed: function() {
      page++;
       return $http({
              method:"jsonp",
              url:ENV.api+"/public/company?callback=JSON_CALLBACK",
              params:{'p':page}
              }).then(function(data){ 
                 
                  if (data) {
                       return data;
                  } 
             });
    },
    getDetail:function  (id) {
       return $http({
              method:"jsonp",
              url:ENV.api+"/public/company/"+id+"?callback=JSON_CALLBACK",
              }).then(function(data){ 
                 
                  if (data) {
                       return data;
                  } 
             });
    }

  };
})

 
;
