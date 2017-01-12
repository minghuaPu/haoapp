angular.module('jobseekers', ['ionic', 'jobseekers.config', 'jobseekers.controller', 'jobseekers.service'])
	.config(function($stateProvider, $urlRouterProvider) {
		$stateProvider
		//首页
			.state('index', {
				url: '/',
				templateUrl: 'templates/jobseekers/tabs.html'
			})
			//我的
			.state('me', {
				url: '/me',
				templateUrl: 'templates/jobseekers/me.html'
			})
			//简历
			.state('resume', {
				url: '/resume',
				templateUrl: 'templates/jobseekers/resume.html'
			})
		$urlRouterProvider.otherwise('/')
	})
	.run(function($rootScope, service, $http) {
		$rootScope.avatar = function() {
			alert("上传头像")
		}
		$rootScope.doRefresh = function() {
			$http.get(location.href)
				.success(function(data) {
					console.log(data)
				})
				.finally(function() {
					$rootScope.$broadcast('scroll.refreshComplete');
				})
		}
		service.load().then(function(response) {
			//测试数据
			$rootScope.basic = [{
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
			$rootScope.jobexp = [{
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
			$rootScope.eduexp = [{
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
			$rootScope.career = [{
				position: 'Web前端',
				type: '全职',
				city: '广州',
				wages: '5k-10k'
			}]
		})
	});