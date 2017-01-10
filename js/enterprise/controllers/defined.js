angular.module('enterprise.controllers', [])

.controller('ExpertCtrl', function($scope, $ionicModal, $ionicPopover, $state) {
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

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('MeCtrl', function($scope) {})

;



