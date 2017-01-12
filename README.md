移动开发框架说明

	视图层templates

		enterprise：企业端

		jobseekers：求职者
			company :公司相关页面
			ucenter：用户个人中心
			menu.html:底部菜单

	业务模型和控制器层 js文件夹
		
		enterprise：企业端

		jobseekers：求职者
			controllers ：所有的控制器
					base.js：父类控制器
					company.js：企业相关操作
					job.js：职位的
					resume.js：简历的

			service：所有的服务
				base.js：父类服务

			routes.js ：求职者栏目相关的路由
			

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
