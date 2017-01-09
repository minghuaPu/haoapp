angular.module('jobseekers.controllers')

.controller('DashCtrl', function($scope,$ionicModal,$ionicPopover,$state,$ionicViewSwitcher) {
     $ionicModal.fromTemplateUrl('templates/index_search.html', {
        scope: $scope,
         animation: 'animated fadeInRightBig'
      }).then(function(modal) {
        $scope.modal = modal;
      });

      $scope.show_search=function  () { 

        $scope.modal.show();
      }
      $scope.down_page=function  () {
          $state.go('tab.companys');
          $ionicViewSwitcher.nextDirection("forward");
      }
      $scope.popover = $ionicPopover.fromTemplateUrl('my-popover.html', {
        scope: $scope
      });

      // .fromTemplateUrl() 方法
      $ionicPopover.fromTemplateUrl('my-popover.html', {
        scope: $scope
      }).then(function(popover) {
        $scope.popover = popover;
      });


      $scope.openPopover = function($event) {
        $scope.popover.show($event);
      };
      $scope.closePopover = function() {
        $scope.popover.hide();
      };

})

.controller('JobDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
  $scope.myActiveSlide = 1;

})
