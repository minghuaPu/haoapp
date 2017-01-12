angular.module('jobseekers.controller', [])
	//简历基本信息
	.controller('resumeBasic', function($scope, service, $ionicModal) {
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
				email: ''
			}
		}
		$scope.save = function() {
			service.save('basic', $scope.b)
		}
	})
	//简历工作经历
	.controller('resumeJobexp', function($scope, service, $ionicModal) {
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
			service.save('jobexp', $scope.j)
		}
		$scope.remove = function(jobexp) {
			$scope.jobexp.splice($scope.jobexp.indexOf(jobexp), 1);
			service.remove('jobexp', jobexp)
		}
	})
	//简历教育经历
	.controller('resumeEduexp',
		function($scope, service, $ionicModal) {
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
				service.save('eduexp', $scope.e)
			}
			$scope.remove = function(eduexp) {
				$scope.eduexp.splice($scope.eduexp.indexOf(eduexp), 1);
				service.remove('eduexp', eduexp)
			}
		})
	//简历期望工作
	.controller('resumeCareer', function($scope, service, $ionicModal) {
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
			service.save('career', $scope.c)
		}
	});