angular.module('jobseekers.controllers')
	//简历基本信息
	.controller('resumeBasic', function($scope, resume, $rootScope, $ionicModal) {
		$scope.avatar = function() {
			alert("上传头像")
		}
		$scope.doRefresh = function() {
			resume.load().then(function(data) {
				$rootScope.user = data['user'];
				$rootScope.basic = data['basic'];
				$rootScope.jobexp = data['jobexp'];
				$rootScope.eduexp = data['eduexp'];
				$rootScope.career = data['career'];
				$scope.$broadcast('scroll.refreshComplete');
			})
		}
		$ionicModal.fromTemplateUrl('basic-modal.html', {
			scope: $scope
		}).then(function(modal) {
			$scope.modal = modal
		})
		$scope.edit = function() {
			$scope.modal.show();
			$scope.b = $scope.basic[0]
		}
		$scope.add = function() {
			$scope.modal.show();
			$scope.b = {
				name: '',
				intro: '',
				sex: '',
				birth: '',
				degree: '',
				working: '',
				residence: '',
				mobile: '',
				email: '',
				status: ''
			}
		}
		$scope.save = function() {
			resume.save('basic', $scope.b)
		}
	})
	//简历工作经历
	.controller('resumeJobexp', function($scope, resume, $ionicModal) {
		$ionicModal.fromTemplateUrl('jobexp-modal.html', {
			scope: $scope
		}).then(function(modal) {
			$scope.modal = modal
		})
		$scope.edit = function(jobexp) {
			$scope.modal.show();
			$scope.j = jobexp
		}
		$scope.add = function() {
			$scope.modal.show();
			$scope.j = {
				working: '',
				company: '',
				position: '',
				content: ''
			}
		}
		$scope.save = function() {
			resume.save('jobexp', $scope.j)
		}
		$scope.remove = function(jobexp) {
			if(confirm("是否删除！")) {
				$scope.jobexp.splice($scope.jobexp.indexOf(jobexp), 1);
				resume.remove('jobexp', jobexp)
			}
		}
	})
	//简历教育经历
	.controller('resumeEduexp',
		function($scope, resume, $ionicModal) {
			$ionicModal.fromTemplateUrl('eduexp-modal.html', {
				scope: $scope
			}).then(function(modal) {
				$scope.modal = modal
			})
			$scope.edit = function(eduexp) {
				$scope.modal.show();
				$scope.e = eduexp
			}
			$scope.add = function() {
				$scope.modal.show();
				$scope.e = {
					grad: '',
					school: '',
					degree: '',
					major: ''
				}
			}
			$scope.save = function() {
				resume.save('eduexp', $scope.e)
			}
			$scope.remove = function(eduexp) {
				if(confirm("是否删除！")) {
					$scope.eduexp.splice($scope.eduexp.indexOf(eduexp), 1);
					resume.remove('eduexp', eduexp)
				}
			}
		})
	//简历期望工作
	.controller('resumeCareer', function($scope, resume, $ionicModal) {
		$ionicModal.fromTemplateUrl('career-modal.html', {
			scope: $scope
		}).then(function(modal) {
			$scope.modal = modal
		})
		$scope.edit = function() {
			$scope.modal.show();
			$scope.c = $scope.career[0]
		}
		$scope.add = function() {
			$scope.modal.show();
			$scope.c = {
				position: '',
				type: '',
				city: '',
				wages: ''
			}
		}
		$scope.save = function() {
			resume.save('career', $scope.c)
		}
	});