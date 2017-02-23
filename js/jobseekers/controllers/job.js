angular.module('jobseekers.controllers')

.controller('DashCtrl', function($scope,$ionicModal,$ionicPopover,$state,$ionicViewSwitcher,Jobs) {
 
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

      //解决页面一开始调用数据
       Jobs.GetFeed().then(function(response){

            Jobs.hasmore = response.data.length>0;
            $scope.job_lists=response.data;
            console.log($scope.job_lists);
         
        })

      $scope.doRefresh=function  () {
        if (Jobs.hasmore) {
          Jobs.GetFeed().then(function  (rtn_data) {
             Jobs.hasmore = rtn_data.data.length>0;//>0有数据
             $scope.job_lists=rtn_data.data.concat($scope.job_lists);
          })
        }
          $scope.$broadcast('scroll.refreshComplete');//隐藏下拉刷新

        return;
      }

      $scope.loadMore=function  () {
        //console.log(Jobs.hasmore);
        if (Jobs.hasmore) {
          
          Jobs.GetFeed().then(function  (rtn_data) {
             Jobs.hasmore = rtn_data.data.length>0;//>0有数据
              //数据绑定
              // $scope.job_lists=
             for(var i=0;i<rtn_data.data.length;i++){
                $scope.job_lists.push(rtn_data.data[i]);
                //console.log($scope.job_lists);
             }
          })
        }
          $scope.$broadcast('scroll.infiniteScrollComplete');//隐藏加载更多
        
        return;
      }

      $scope.moreDataCanBeLoaded = function(){
         return Jobs.hasmore;
        }

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
 

.controller('JobDetailCtrl', function($scope, $stateParams,$ionicModal, Jobs) {

     Jobs.getJobDetail($stateParams.jobId).then(function(response){
        $scope.job=response.data;
        console.log($scope.job);
     })

    $ionicModal.fromTemplateUrl('templates/morejob.html', {
        scope: $scope,
         animation: 'animated fadeInUpBig'
      }).then(function(modal) {
        $scope.modal = modal;
      });

      $scope.show_morejob=function  () { 

        $scope.modal.show();
      }
})

.controller('MoreJobCtrl', function($scope, $stateParams,$ionicModal, Jobs){
    Jobs.GetFeed().then(function(response){

            $scope.job_list=response.data;
            console.log($scope.job_list);
         
        })
});
