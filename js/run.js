// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('jobseekers', ['ionic','jobseekers.config', 'jobseekers.controllers', 'jobseekers.services'])

.run(function($ionicPlatform,$rootScope,$state,Auth) {

  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }

    $rootScope.$on('$stateChangeStart', function(event, next) {
         
        if (angular.isDefined(next.data)) {
            var roles = next.data.authorizedRoles;
            if (!Auth.isAuthenticated()) {
                console.log('还未登录');
                event.preventDefault(); 
                $state.go('login');

            } else if (Auth.isAuthorized(roles)) {
                console.log('用户角色在列表中');
            } 

            // else {
            //     console.log('用户角色没有在列表中')
            //     event.preventDefault();
            //     $state.go('login');
            // }
        }
    })

    $rootScope.logout = function(){
      Auth.logout();
    };
    

  });
});

<<<<<<< HEAD
angular.module('enterprise', ['ionic', 'enterprise.controllers', 'enterprise.services'])
=======

angular.module('enterprise', ['ionic','enterprise.config', 'enterprise.controllers', 'enterprise.services'])
>>>>>>> 4a28c8e9df327e1fc6661320f68ef926cd6651b3

.run(function($ionicPlatform,$rootScope,$state,Auth,$rootScope,ENV) {
  // console.log(ENV);
 $rootScope.env=ENV;
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }

    $rootScope.$on('$stateChangeStart', function(event, next) {
         
        if (angular.isDefined(next.data)) {
            var roles = next.data.authorizedRoles;
            if (!Auth.isAuthenticated()) {
                console.log('还未登录');
                event.preventDefault(); 
                $state.go('login');

            } else if (Auth.isAuthorized(roles)) {
                console.log('用户角色在列表中');
            } 

            // else {
            //     console.log('用户角色没有在列表中')
            //     event.preventDefault();
            //     $state.go('login');
            // }
        }
    })

    $rootScope.logout = function(){
      Auth.logout();
    };
    

  });
});



