angular.module('jobseekers.controllers')
	//简历基本信息
	.controller('resumeBasic', function($scope, resume, $ionicModal) {
		resume.load();
		$scope.avatar = function() {
			alert("上传头像")
		}
		$scope.doRefresh = function() {
			resume.load();
			$scope.$broadcast('scroll.refreshComplete')
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
				nickname: '',
				peculiarity: '',
				sex: '男',
				birth: '90后',
				top_edu: '本科',
				work_years: '1-3年',
				current_city: '广州',
				phone: '',
				e_mail: '',
				current_status: '目前正在找工作'
			}
		}
		$scope.save = function() {
			resume.save('basic', $scope.b);
			$scope.modal.hide()
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
				working_time: '',
				re_company_name: '',
				job_title: '',
				job_description: ''
			}
		}
		$scope.save = function() {
			resume.save('experience', $scope.j);
			$scope.jobexp.push($scope.j);
			$scope.modal.hide()
		}
		$scope.remove = function(jobexp) {
			if(confirm("是否删除！")) {
				$scope.jobexp.splice($scope.jobexp.indexOf(jobexp), 1);
				resume.remove('experience', jobexp)
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
					graduated: '2017',
					school_name: '',
					degree: '本科',
					major: ''
				}
			}
			$scope.save = function() {
				resume.save('education', $scope.e);
				$scope.eduexp.push($scope.e);
				$scope.modal.hide()
			}
			$scope.remove = function(eduexp) {
				if(confirm("是否删除！")) {
					$scope.eduexp.splice($scope.eduexp.indexOf(eduexp), 1);
					resume.remove('education', eduexp)
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
				expected_position: '',
				job_type: '全职',
				expected_location: '广州',
				expected_monthly_income: '5k-10k'
			}
		}
		$scope.save = function() {
			resume.save('prefered', $scope.c);
			$scope.modal.hide()
		}
	});