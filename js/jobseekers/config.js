angular.module("jobseekers.config", [])
	.constant("ENV", {
		"accessToken": '',
		"debug": false,
		"api": "http://localhost/thinkphp_5.0.2_full",
		"appleId": 'id981408438',
		'ent_img_path': 'img/enterprise',
		'version': '1.0.1'
	});

angular.module("enterprise.config", [])
.constant("ENV", {
	"accessToken": '',
	"debug": false,
	"api": "http://localhost/thinkphp_5.0.2_full",
	"appleId": 'id981408438',
	'ent_img_path': 'img/enterprise',
	'version': '1.0.1'
});