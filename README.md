移动开发框架说明
视图层templates
	enterprise：企业端
jobseekers：求职者


控制器、模型、服务：js
	一、根目录中：
		run.js:模型的run，里面有两个模型，两个应用：jobseekers（求职者）enterprise（企业端）

		config.js：配置文件，定义的一个全局对象：ENV。

	二、每个文件夹代表一个应用

			求职者应用的routes.js，路径（www/js/jobseekers/routes.js）
			以后新增路由都是在这一个文件

			controllers：所有控制器文件夹
				父类控制器：base.js
				子类控制器：job.js

			services：所有服务文件夹
				父类控制器：base.js
				子类控制器：job.js
