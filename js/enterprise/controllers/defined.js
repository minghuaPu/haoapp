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
  };

  // 在电脑上发布职位
  $ionicModal.fromTemplateUrl('fabu_pc.html',{
    scope: $scope
  }).then(function (modal) {
    $scope.fabupc=modal;
  });
  $scope.fabu_pc = function () {
    $scope.fabupc.show();
  };
  $scope.closeFaBuPc = function () {
    $scope.fabupc.hide();
  };

  // 公司信息
  $ionicModal.fromTemplateUrl('comp_info.html',{
    scope: $scope
  }).then(function (modal) {
    $scope.compInfo=modal;
  });
  $scope.comp_Info = function () {
    $scope.compInfo.show();
  };
  $scope.closeCompInfo = function () {
    $scope.compInfo.hide();
  };

  // 职位类型
  $ionicModal.fromTemplateUrl('jobType.html',{
    scope: $scope
  }).then(function (modal) {
    $scope.jobType=modal;
  });
  $scope.job_Type = function () {
    $scope.jobType.show();
  };
  $scope.closeJobType = function () {
    $scope.jobType.hide();
  };

  // 职位名称
  $scope.job_info=JSON.parse(localStorage.getItem("job_info") || '[]');
  $ionicModal.fromTemplateUrl('jobName.html',{
    scope: $scope
  }).then(function (modal) {
    $scope.jobName=modal;
  });
  $scope.job_Name = function () {
    $scope.jobName.show();
  };
  $scope.closeJobName = function () {
    $scope.jobName.hide();
  };

  $scope.saveJobName = function (job_name) {
    localStorage.setItem('job_info', JSON.stringify({'job_name':job_name}));
    console.log(localStorage);
    // console.log(job_name);
    $scope.job_info.job_name=job_name;
    $scope.jobName.hide();
  };

  // 发布职位
  $scope.publish_info = function () {
    console.log("publish_info: "+$window.sessionStorage["userInfo"]);
    $http({
      'method': 'jsonp',
      // create:先要登录验证密码
      'url': ENV.api+'/public/job/create',
      'params': $scope.job_info
    }).then(function (rtn_data) {
      console.log(rtn_data);
    });
    $scope.modal.hide();
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

.controller('LoginCtrl',function ($scope) {

})

.controller('FaBuPcCtrl',function ($scope) {

})
;



