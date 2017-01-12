angular.module('jobseekers.controllers')
	//简历基本信息
	.controller('resumeBasic', function($scope, service, $ionicModal) {


		$scope.avatar = function() {
			alert("上传头像")
		}
		$scope.doRefresh = function() {
			$http.get(location.href)
				.success(function(data) {
					console.log(data)
				})
				.finally(function() {
					$scope.$broadcast('scroll.refreshComplete');
				})
		}
		service.load().then(function(response) {
			//测试数据
			$scope.basic = [{
				name: '林国胜',
				intro: '一句话',
				sex: '男',
				birth: '90后',
				degree: '大专',
				working: '应届毕业生',
				residence: '广州',
				mobile: '13226267239',
				email: '648253615@qq.com'
			}];
			$scope.jobexp = [{
				working: '2016',
				company: '源酷创意',
				position: 'Web前端',
				content: '工作内容'
			}, {
				working: '2017',
				company: '源酷创意1',
				position: 'Web前端1',
				content: '工作内容1'
			}];
			$scope.eduexp = [{
				grad: '2016',
				school: '源酷大学',
				degree: '大专',
				major: '软件技术'
			}, {
				grad: '2017',
				school: '源酷大学1',
				degree: '本科',
				major: '软件技术1'
			}];
			$scope.career = [{
				position: 'Web前端',
				type: '全职',
				city: '广州',
				wages: '5k-10k'
			}]
		})

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