angular.module('jobseekers.service', [])
	.factory('service', function($http) {
		return {
			//加载数据
			load: function() {
				return $http.get(location.href + '?a=select')
					.then(function(response) {
						return response['data']
					})
			},
			//保存数据
			save: function(index, data) {
				$http({
					method: 'get',
					url: location.href + '?a=save&index=' + index,
					params: data
				})
			},
			//删除数据
			remove: function(index, data) {
				$http({
					method: 'get',
					url: location.href + '?a=delete&index=' + index,
					params: data
				})
			}
		}
	});