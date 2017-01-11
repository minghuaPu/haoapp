angular.module('jobseekers.controllers')

.controller('DashCtrl', function($scope,$ionicModal,PersonService,$ionicPopover,$state,$ionicViewSwitcher) {
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

      //////////////////////////下拉刷新/////////////////////
      $scope.items = [];
     
      PersonService.GetFeed().then(function(items){
        $scope.items = items;
        console.log($scope.items);
      });
     
      $scope.doRefresh = function() {
        PersonService.GetFeed().then(function(items){
          $scope.items = items.concat($scope.items);
     
          //Stop the ion-refresher from spinning
          $scope.$broadcast('scroll.refreshComplete');
        });
      };

    })

.controller('JobDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
  $scope.myActiveSlide = 1;

})
