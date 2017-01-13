angular.module('jobseekers.controllers')

.controller('CompanysCtrl', function($scope, $state, $ionicViewSwitcher, $ionicModal, $ionicPopover) {
	// With the new view caching in Ionic, Controllers are only called
	// when they are recreated or on app start, instead of every page change.
	// To listen for when this page is active (for example, to refresh data),
	// listen for the $ionicView.enter event:
	//
	//$scope.$on('$ionicView.enter', function(e) {
	//});
	//搜索模态框
	$ionicModal.fromTemplateUrl('search-modal.html', {
		scope: $scope,
		animation: 'slide-in-up'
	}).then(function(modal) {
		$scope.modal = modal;
	});
	$scope.openModal = function() {
		$scope.modal.show();
	};

	//融资浮动框
	$scope.financingpopover = $ionicPopover.fromTemplateUrl('financing-popover.html', {
		scope: $scope
	});

	// .fromTemplateUrl() 方法
	$ionicPopover.fromTemplateUrl('financing-popover.html', {
		scope: $scope
	}).then(function(popover) {
		$scope.financingpopover = popover;
	});
	$scope.financingPopover = function($event) {
		$scope.financingpopover.show($event);
	};

	//人员规模浮动框
	$scope.personnelsizepopover = $ionicPopover.fromTemplateUrl('personnelsize-popover.html', {
		scope: $scope
	});

	// .fromTemplateUrl() 方法
	$ionicPopover.fromTemplateUrl('personnelsize-popover.html', {
		scope: $scope
	}).then(function(popover) {
		$scope.personnelsizepopover = popover;
	});
	$scope.personnelsizePopover = function($event) {
		$scope.personnelsizepopover.show($event);
	};

	//行业浮动框
	$scope.industrypopover = $ionicPopover.fromTemplateUrl('industry-popover.html', {
		scope: $scope
	});

	// .fromTemplateUrl() 方法
	$ionicPopover.fromTemplateUrl('industry-popover.html', {
		scope: $scope
	}).then(function(popover) {
		$scope.industrypopover = popover;
	});
	$scope.industryPopover = function($event) {
		$scope.industrypopover.show($event);
	};
	//tab页面切换
	$scope.onSwipeLeft = function() {
		$state.go('tab.work');
		$ionicViewSwitcher.nextDirection("forward"); //注入$ionicViewSwitcher实现页面切换动画效果
	}
	$scope.onSwipeRight = function() {
		$state.go('tab.home');
		$ionicViewSwitcher.nextDirection("back");
	};

})

.controller('CompanyDetailCtrl', function($scope, $stateParams, Company) {
	$scope.company = Company.getDetail($stateParams.companyId);
})