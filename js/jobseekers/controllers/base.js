angular.module('jobseekers.controllers', [])

.factory('PersonService', function($http) {
	var BASE_URL = "http://api.randomuser.me/";
	var items = [];

	return {
		GetFeed: function() {
			return $http.get('/').then(function(response) {
				//   items = response.data.results;
				items = [{
					id: 1,
					fName: 'Hege' + Math.random() * 50,
					lName: "Pege"
				}, {
					id: 2,
					fName: 'Kim',
					lName: "Pim"
				}, {
					id: 3,
					fName: 'Sal',
					lName: "Smith"
				}, {
					id: 4,
					fName: 'Jack',
					lName: "Jones"
				}, {
					id: 5,
					fName: 'John',
					lName: "Doe"
				}, {
					id: 6,
					fName: 'Peter',
					lName: "Pan"
				}];
				return items;
			});
		},
		GetNewUser: function() {
			return $http.get(BASE_URL).then(function(response) {
				items = response.data.results;
				return items;
			});
		}
	}
})

.controller('WorkDetailCtrl', function($scope, Share) {
	$scope.share = function() {
		Share.show();
	}

})

.controller('LoginCtrl', function($scope, $rootScope, $state, $http, Session, $window, ENV) {
	// $scope.user.password="admin";

	// rootScope 可以在各个控制器使用
	$scope.signIn = function(user) {

		// 就是调用
		// url http://localhost/thinkphp_5.0.2_full/public/user/login
		// user_name和user_pwd
		// 返回json格式
		// jquery ajax
		$http({
			method: "jsonp",
			url: ENV.api + "/public/user/login?callback=JSON_CALLBACK",
			params: user
		}).success(function(data) {
			if(data) {
				$window.sessionStorage["userInfo"] = JSON.stringify(data);
				$scope.login(data);

			} else {
				$scope.success = "用户名或密码不正确";
			}
		});
		$state.go('tab.home');

	}
	$scope.hide_msg = function() {
		$scope.success = "";
	}

	$scope.login = function(data) {
		Session.create(data);
		delete data.user_pwd;
		$rootScope.currentUser = data;
		$state.go('tab.home');
	};

	// if a session exists for current user (page was refreshed)
	// log him in again
	if($window.sessionStorage["userInfo"]) {
		var credentials = JSON.parse($window.sessionStorage["userInfo"]);
		// JSON.parse：把json字符串转换成json对象

		// JSON.stringify：把json对象转换成json字符串
		$scope.login(credentials);
	}

})

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

.controller('MsgCtrl', function($scope, Msgs, $ionicModal, Share, $ionicViewSwitcher, $state) {
	// 模态窗口
	$scope.contacts = [{
		name: 'Gordon Freeman'
	}, {
		name: 'Barney Calhoun'
	}, {
		name: 'Lamarr the Headcrab'
	}, ];

	$ionicModal.fromTemplateUrl('templates/modal.html', {
		scope: $scope
	}).then(function(modal) {
		$scope.modal = modal;
	});

	$scope.showModel = function(info) {
		$scope.newUser = info;
		$scope.modal.show();
	}
	$scope.createContact = function(u) {
		$scope.msgs.push({
			id: u.id,
			name: u.name,
			lastText: u.lastText
		});
		$scope.modal.hide();
	};

	$scope.data = {
		showDelete: false
	};

	$scope.edit = function(item) {
		$scope.showModel(Msgs.get(item.id));
	};
	$scope.share = function(item) {
		Share.show();
	};

	$scope.moveItem = function(item, fromIndex, toIndex) {
		$scope.msgs.splice(fromIndex, 1);
		$scope.msgs.splice(toIndex, 0, item);
	};

	$scope.onItemDelete = function(item) {
		$scope.msgs.splice($scope.msgs.indexOf(item), 1);
	};

	$scope.msgs = Msgs.all();
	$scope.remove = function(chat) {
		Msgs.remove(chat);
	};

	$scope.onSwipeRight = function() {
		$state.go('tab.work');
		$ionicViewSwitcher.nextDirection("back");
	};
})

.controller('WorkCtrl', function($scope, $timeout, PersonService, $ionicViewSwitcher, $state) {
	$scope.items = [];

	PersonService.GetFeed().then(function(items) {
		$scope.items = items;
		//console.log($scope.items);
	});

	$scope.doRefresh = function() {
		PersonService.GetFeed().then(function(items) {
			$scope.items = items.concat($scope.items);

			//Stop the ion-refresher from spinning
			$scope.$broadcast('scroll.refreshComplete');
		});
	};

	$scope.onSwipeLeft = function() {
		$state.go('tab.msg');
		$ionicViewSwitcher.nextDirection("forward"); //注入$ionicViewSwitcher实现页面切换动画效果
	}
	$scope.onSwipeRight = function() {
		$state.go('tab.companys');
		$ionicViewSwitcher.nextDirection("back");
	};

})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
		$scope.chat = Chats.get($stateParams.chatId);
	})
	.controller('MsgDetailCtrl', function($scope, $stateParams, Msgs) {
		$scope.msg = Msgs.get($stateParams.msgId);
	})

.controller('AccountCtrl', function($scope) {
	$scope.to_enterprise = function() {
		// 切换应用
		angular.bootstrap(angular.element(document.querySelector("#enterprise")), ["enterprise"]);

	}
	$scope.settings = {
		enableFriends: true
	};
});
