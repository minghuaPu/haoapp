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
			for(var i = 0; i < chats.length; i++) {
				if(chats[i].id === parseInt(chatId)) {
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
	.service('Auth', ['Session', '$window', '$state', function(Session, $window, $state) {
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
		authService.logout = function() {
			Session.destroy();
			$window.sessionStorage.removeItem("userInfo");
			$state.go('login');
		};

		return authService;
	}])

.service('Share', ['$ionicActionSheet', '$timeout', function($ionicActionSheet, $timeout) {
	// 弹出层js
	this.show = function() {
		var hideSheet = $ionicActionSheet.show({
			buttons: [{
				text: '分享到朋友圈'
			}, {
				text: '分享给好友'
			}, {
				text: '分享到微博'
			}],
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

.factory('Jobs',function($http,ENV){
  var page=0;
  var hasmore=false;//标识有没有更多数据
  return{
    GetFeed:function () {
      page++;
      return $http({
        method:"jsonp",
        // http://localhost/thinkphp_5.0.2_full/public/job?callback=JSON_CALLBACK
        url:ENV.api+"/public/job?callback=JSON_CALLBACK",
        // js:callback=?
        params:{'p':page}
      }).then(function (data) {
        if(data){
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

    getCompanyDetail:function  (companyId) {
       return $http({
              method:"jsonp",
              url:ENV.api+"/public/company/"+companyId+"?callback=JSON_CALLBACK",
              }).then(function(data){ 
                 
                  if (data) {
                       return data;
                  } 
             });
    }

  };
})

 .factory('service', function($http) {
    return {
      //加载数据
      load: function() {
        return $http.get(location.href + '?a=select')
          .then(function(response) {
            return response['data']
          })
      },
      //保存数据
      save: function(index, data) {
        $http({
          method: 'get',
          url: location.href + '?a=save&index=' + index,
          params: data
        })
      },
      //删除数据
      remove: function(index, data) {
        $http({
          method: 'get',
          url: location.href + '?a=delete&index=' + index,
          params: data
        })
      }
    }
  })

	//简历服务
	.factory('resume', function($http, $rootScope) {
		return {
			//加载数据 
			load: function() {
				return $http({
					method: "get",
					url: "http://127.0.0.1/aoshi/index.php/Jobseekers/?a=select"
				}).then(function(response) {
					$rootScope.user = response.data['user'];
					$rootScope.basic = response.data['basic'];
					$rootScope.jobexp = response.data['experience'];
					$rootScope.eduexp = response.data['education'];
					$rootScope.career = response.data['prefered'];
				})
			},
			//保存数据
			save: function(index, data) {
				$http({
					method: 'get',
					url: 'http://127.0.0.1/aoshi/index.php/Jobseekers/?a=save&index=' + index,
					params: data
				})
			},
			//删除数据
			remove: function(index, data) {
				$http({
					method: 'get',
					url: 'http://127.0.0.1/aoshi/index.php/Jobseekers?a=delete&index=' + index,
					params: data
				})
			}
		}
	});
