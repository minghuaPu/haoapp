angular.module('enterprise.controllers', [])

.controller('ExpertCtrl', function($scope, $ionicModal, $ionicPopover, $state, $ionicViewSwitcher,$http,$window,ENV) {
  // 发布职位
  //模态框
  $ionicModal.fromTemplateUrl('publish_job.html', {
    scope: $scope
  }).then(function (modal) {
    $scope.modal = modal;
  });

  
  // 显示发布职位的页面
  $scope.publish_job = function () {
    $scope.modal.show();
  };
  // 隐藏发布职位的页面
  $scope.closeModal = function () {
    $scope.popover.hide();
    $scope.modal.hide();

  }; 


  $scope.job_info=JSON.parse(localStorage.getItem("job_info") || '[]');

  //职位名称模态框
  $ionicModal.fromTemplateUrl('jobname_model.html', {
    scope: $scope
  }).then(function (modal) {
    $scope.jobname_modal = modal;
  });
   // 显示发布职位的页面
  $scope.show_jobname_model = function () {
    $scope.jobname_modal.show();
  };
    // 隐藏发布职位的页面
  $scope.hidePopover = function () {
    $scope.popover.hide();
    $scope.jobname_modal.hide();

  };
  $scope.saveJobname = function (job_name) {

    localStorage.setItem('job_info', JSON.stringify({'job_name':job_name}));
    $scope.job_info.job_name=job_name;
     $scope.jobname_modal.hide();
  };

  // 发表职位
  
 $scope.publish_info = function () {
  // 这个是获取用户信息
  // $window.sessionStorage["userInfo"]
    $http({
        'method':'jsonp',
        'url':ENV.api+'/public/job/create',
        'params':$scope.job_info,
    }).then(function  (rtn_data) {
       console.log(rtn_data);
    });
    
  };

  // 浮动框
  $ionicPopover.fromTemplateUrl('my-popover.html', {
    scope:$scope
  }).then(function (popover) {
    $scope.popover = popover;
  });
  // 显示浮动框的页面
  $scope.openPopover = function ($event) {
    $scope.popover.show($event);
  };
  // 隐藏浮动框的页面
  $scope.closePopover = function () {
    $scope.popover.hide();
  };

  $scope.onSwipeLeft = function () {

    $state.go('tab.chats');
    $ionicViewSwitcher.nextDirection('forwards');
  }

})

.controller('ChatsCtrl', function($scope, Chats, $state, $ionicViewSwitcher) {
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
  $scope.onSwipeLeft = function () {
    $state.go('tab.me');
    $ionicViewSwitcher.nextDirection('forwards');
  };
  $scope.onSwipeRight = function () {
    $state.go('tab.expert');
    $ionicViewSwitcher.nextDirection('back');
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('MeCtrl', function($scope, $ionicModal ,$state, $ionicViewSwitcher) {
  $ionicModal.fromTemplateUrl('settings.html', {
    scope: $scope,
    animation:'animated slideInRight'
  }).then(function (modal) {
    $scope.modal = modal;
  });
  $scope.show_settings=function () {
    $scope.modal.show();
  };
  $scope.hide_settings=function () {
    $scope.modal.hide();
  };
  $scope.onSwipeRight = function() {
    $state.go('tab.chats');
    $ionicViewSwitcher.nextDirection('back');
  }
})
;



