// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('jobseekers', ['ionic', 'jobseekers.config', 'jobseekers.controllers', 'jobseekers.services'])

.run(function($ionicPlatform, $rootScope, $state, Auth) {

	$ionicPlatform.ready(function() {
		// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
		// for form inputs)
		if(window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
			cordova.plugins.Keyboard.disableScroll(true);

		}
		if(window.StatusBar) {
			// org.apache.cordova.statusbar required
			StatusBar.styleDefault();
		}

		$rootScope.$on('$stateChangeStart', function(event, next) {
			if(angular.isDefined(next.data)) {
				var roles = next.data.authorizedRoles;
				/** 登录权限
				if(!Auth.isAuthenticated()) {
					console.log('还未登录');
					event.preventDefault();
					$state.go('login');
				} else if(Auth.isAuthorized(roles)) {
					console.log('用户角色在列表中');
				}
				*/
			}
		});

		$rootScope.logout = function() {
			Auth.logout();
		};
	});
});

angular.module('enterprise', ['ionic', 'enterprise.config', 'enterprise.controllers', 'enterprise.services'])

.run(function($ionicPlatform, $rootScope, $state, Auth, ENV) {
	// console.log(ENV);
	$rootScope.env = ENV;
	$ionicPlatform.ready(function() {
		// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
		// for form inputs)
		if(window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
			cordova.plugins.Keyboard.disableScroll(true);

		}
		if(window.StatusBar) {
			// org.apache.cordova.statusbar required
			StatusBar.styleDefault();
		}

		$rootScope.$on('$stateChangeStart', function(event, next) {

			if(angular.isDefined(next.data)) {
				var roles = next.data.authorizedRoles;
				if(!Auth.isAuthenticated()) {
					console.log('还未登录');
					event.preventDefault();
					$state.go('login');

				} else if(Auth.isAuthorized(roles)) {
					console.log('用户角色在列表中');
				}

				// else {
				//     console.log('用户角色没有在列表中')
				//     event.preventDefault();
				//     $state.go('login');
				// }
			}
		});

		$rootScope.logout = function() {
			Auth.logout();
		};

	});
})

//   .directive('modalBox', [function() {
//     return {
//         restrict: 'E',
//         transclude: true,
//          scope : {
//             htmlName : '=name'
//         },
//         templateUrl:'publish_job.html',
//         replace:true,
//         controller: function($scope, $ionicModal, $ionicPopover,$attrs){
//             // 发布职位
//             //模态框

//             $ionicModal.fromTemplateUrl('publish_job.html', {
//               scope: $scope
//             }).then(function (modal) {
//               $scope.modal = modal;
//             });

//             // 显示发布职位的页面
//             $scope.publish_job = function () {
//               $scope.modal.show();
//                console.log($scope.htmlName);
//             };
//             // 隐藏发布职位的页面
//             $scope.closeJobName = function () {
//               $scope.popover.hide();
//               $scope.modal.hide();

//             }; 
//         },
//         link: function(scope, element, attrs) {
//          // scope.info=attrs;
//             // scope.items = JSON.parse(attrs.items);
//         }
//     }
// }])
;