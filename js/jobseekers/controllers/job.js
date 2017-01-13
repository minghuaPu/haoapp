angular.module('jobseekers.controllers')
<<<<<<< HEAD

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
          //console.log($scope.job_lists);
         
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
=======
>>>>>>> bcdc541780f0daa3a868e7cf09f34aa74338149b
 
.controller('DashCtrl', function($scope, $ionicModal, $ionicPopover, $state, $ionicViewSwitcher, $timeout, Jobs) {
	$ionicModal.fromTemplateUrl('templates/index_search.html', {
		scope: $scope,
		animation: 'animated fadeInRightBig'
	}).then(function(modal) {
		$scope.modal = modal;
	});

	$scope.show_search = function() {

		$scope.modal.show();
	};
	$scope.down_page = function() {
		$state.go('tab.companys');
		$ionicViewSwitcher.nextDirection("forward");
	};
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

	//下拉刷新
	//开始就调用数据
	Jobs.GetFeed().then(function(response) {
		Jobs.hasmore = response.data.length > 0;
		$scope.job_lists = response.data;
	});
	$scope.doRefresh = function() {
		//GetFeed()在base.js
		if(Jobs.hasmore) {
			Jobs.GetFeed().then(function(rtn_data) {
				Jobs.hasmore = rtn_data.data.length > 0;
				$scope.job_lists = rtn_data.data.concat($scope.job_lists);
			});
			//上弹写在这里的话当没有数据的时候不会再弹了
			//   .finally(function () {
			//   $scope.$broadcast('scroll.refreshComplete');
			// });

			//hasmore<=0
		} else {
			alert("没有更多内容了！");
		}
		$scope.$broadcast('scroll.refreshComplete');
	};

	//上拉加载更多
	$scope.loadMore = function() {
		//防止加载过快
		$timeout(function() {
			// if(!Jobs.hasmore){
			//   $scope.$broadcast('scroll.infiniteScrollComplete');
			//   return;
			// }
			if(Jobs.hasmore) {
				Jobs.GetFeed().then(function(rtn_data) {
					Jobs.hasmore = rtn_data.data.length > 0;
					// $scope.job_lists=rtn_data.data.concat($scope.job_lists);
					// push(),数组末尾添加一个或多个元素，而不用concat
					for(var i = 0; i < rtn_data.length; i++) {
						$scope.job_lists.push(rtn_data.data[i]);
					}
				})
			}
			$scope.$broadcast('scroll.infiniteScrollComplete');
		}, 1000);

	};
	$scope.moreDataCanBeLoaded = function() {
		return Jobs.hasmore;
	};
	// $scope.$on("$destroy", function () {
	//   //clearTimeout(timer.$$timeoutId);
	//   $timeout.cancel(timer);
	//   //清除配置,不然scroll会重复请求
	// });
})

<<<<<<< HEAD
.controller('JobDetailCtrl', function($scope, $stateParams, Jobs) {

     Jobs.getJobDetail($stateParams.jobId).then(function(response){
        $scope.job=response.data;
        //console.log($scope.job);
     })

    
})
=======
.controller('JobDetailCtrl', function($scope, $stateParams, Chats) {
	$scope.chat = Chats.get($stateParams.chatId);
	$scope.myActiveSlide = 1;

});
>>>>>>> bcdc541780f0daa3a868e7cf09f34aa74338149b
