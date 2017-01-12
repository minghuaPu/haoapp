// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('jobseekers')

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  .state('login', {
      url:'/login',
      templateUrl:'templates/jobseekers/login.html',
      controller:'LoginCtrl'
    }

    )
  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
        

    templateUrl: 'templates/jobseekers/menu.html',
    // data: { // 设置进入角色为 admin 或 teacher
    //   authorizedRoles:['admin','teacher']
    // }
  })

  // Each tab has its own nav history stack:

  .state('tab.home', {
    url: '/home',
    views: {
      'tab-home': {
        templateUrl: 'templates/jobseekers/tab-home.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('tab.job-detail', {
   url: '/home/job-detail',
   views: {
     'tab-home': {
       templateUrl: 'templates/jobseekers/job-detail.html',
       controller: 'JobDetailCtrl'
     }
   }
 })

 .state('tab.companys', {
      url: '/companys',
      views: {
        'tab-companys': {
          templateUrl: 'templates/jobseekers/company/companys.html',
          controller: 'CompanysCtrl'
        }
      }
    })

 .state('tab.company-detail', {
   url: '/companys/company-detail/:companyId',
   views: {
     'tab-companys': {
       templateUrl: 'templates/jobseekers/company/company-detail.html',
       controller: 'CompanyDetailCtrl'
     }
   }
 })

  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/jobseekers/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })

    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/jobseekers/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })
.state('tab.work', {
      url: '/work',
      views: {
        'tab-work': {
          templateUrl: 'templates/jobseekers/tab-work.html',
          controller: 'WorkCtrl'
        }
      }
    })
.state('tab.work-detail', {
      url: '/work-detail',
      views: {
        'tab-work': {
          templateUrl: 'templates/jobseekers/work-detail.html',
          controller: 'WorkDetailCtrl'
        }
      }
    })
.state('tab.work-details', {
      url: '/work-details',
      views: {
        'tab-work': {
          templateUrl: 'templates/jobseekers/work-details.html',
          controller: 'WorkDetailCtrl'
        }
      }
    })

.state('tab.msg', {
      url: '/msg',
      views: {
        'tab-msg': {
          templateUrl: 'templates/jobseekers/tab-msg.html',
          controller: 'MsgCtrl'
        }
      }
    })
  .state('tab.msg-detail', {
      url: '/msg/:msgId',
      views: {
        'tab-msg': {
          templateUrl: 'templates/jobseekers/msg-detail.html',
          controller: 'MsgDetailCtrl'
        }
      }
    })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/jobseekers/tab-account.html',
        controller: 'AccountCtrl'
      }
    },
    data: { // 设置进入角色为 admin 或 teacher
      authorizedRoles:['admin','teacher']
    }
  });



  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/home');

   $ionicConfigProvider.platform.ios.tabs.style('standard');  
    $ionicConfigProvider.platform.ios.tabs.position('bottom');  
    $ionicConfigProvider.platform.android.tabs.style('standard');  
    $ionicConfigProvider.platform.android.tabs.position('standard');  

    $ionicConfigProvider.platform.ios.navBar.alignTitle('center');  
    $ionicConfigProvider.platform.android.navBar.alignTitle('left');  

    $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');  
    $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');  

    $ionicConfigProvider.platform.ios.views.transition('ios');  
    $ionicConfigProvider.platform.android.views.transition('android');  
});
