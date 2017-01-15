angular.module('enterprise.controllers', [])

.controller('ExpertCtrl', function($scope, $ionicModal, $ionicPopover, $state, $ionicViewSwitcher,$http,$window,$ionicScrollDelegate,$rootScope,ENV) {

  var vm=$scope.vm={};
  vm.cb = function () {
    console.log(vm.CityPickData1.areaData);
  };
  //例1
  vm.CityPickData1 = {
    areaData: [],
    backdrop: true,
    backdropClickToClose: true,
    defaultAreaData: ['江苏', '无锡', '江阴市'],
    buttonClicked: function () {
      vm.cb()
    },
    tag: '-'
    // iconClass: 'ion-location'
    // title: '工作城市：'
  };

  vm.change = function () {
    console.log('change');
    vm.CityPickData4.areaData = ['上海', '徐汇区']
  };
  vm.sync = function () {
    console.log('sync');
    vm.CityPickData4.areaData = vm.CityPickData2.areaData
  };



  // 发布职位
  //模态框
  $ionicModal.fromTemplateUrl('publish_job.html', {
    scope: $scope
  }).then(function (modal) {
    $scope.modal = modal;
  });
  // 显示发布职位的页面
  $scope.publish_job = function () {
    $scope.modal.show();
  };
  // 隐藏发布职位的页面
  $scope.closeModal = function () {
    $scope.popover.hide();
    $scope.modal.hide();
    // localStorage.clear();
  };
  // 浮动框
  $ionicPopover.fromTemplateUrl('my-popover.html', {
    scope:$scope,
    animation:'animated fadeIn'
  }).then(function (popover) {
    $scope.popover = popover;
  });
  // 显示浮动框的页面
  $scope.openPopover = function ($event) {
    $scope.popover.show($event);
  };
  // 隐藏浮动框的页面
  $scope.closePopover = function () {
    $scope.popover.hide();
  };

  $scope.onSwipeLeft = function () {

    $state.go('tab.chats');
    $ionicViewSwitcher.nextDirection('forwards');
  };

  // 在电脑上发布职位
  $ionicModal.fromTemplateUrl('fabu_pc.html',{
    scope: $scope
  }).then(function (modal) {
    $scope.fabupc=modal;
  });
  $scope.fabu_pc = function () {
    $scope.fabupc.show();
  };
  $scope.closeFaBuPc = function () {
    $scope.fabupc.hide();
  };

  // 公司信息
  $ionicModal.fromTemplateUrl('comp_info.html',{
    scope: $scope
  }).then(function (modal) {
    $scope.compInfo=modal;
  });
  $scope.comp_Info = function () {
    $scope.compInfo.show();
  };
  $scope.closeCompInfo = function () {
    $scope.compInfo.hide();
  };

  // 职位类型
  $ionicModal.fromTemplateUrl('jobType.html',{
    scope: $scope
  }).then(function (modal) {
    $scope.jobType=modal;
  });
  $scope.job_Type = function () {
    $scope.jobType.show();
  };
  $scope.closeJobType = function () {
    $scope.jobType.hide();
  };

  // 职位名称
  $scope.job_info=JSON.parse(localStorage.getItem("job_info") || '[]');
  // console.log($scope.job_info);对象
  $ionicModal.fromTemplateUrl('jobName.html',{
    scope: $scope
  }).then(function (modal) {
    $scope.jobName=modal;
  });
  $scope.job_Name = function () {
    $scope.jobName.show();
  };
  $scope.closeJobName = function () {
    $scope.jobName.hide();
  };

  $scope.saveJobName = function (job_name) {
    localStorage.setItem('job_info', JSON.stringify({'job_name':job_name}));
    console.log(localStorage);
    // console.log(job_name);
    $scope.job_info.job_name=job_name;
    $scope.jobName.hide();
  };

  // 发布职位
  $scope.publish_info = function () {
    console.log("publish_info: "+$window.sessionStorage["userInfo"]);
    $http({
      'method': 'jsonp',
      // create:先要登录验证密码
      'url': ENV.api+'/public/job/create',
      'params': $scope.job_info
    }).then(function (rtn_data) {
      console.log(rtn_data);
    });
    $scope.modal.hide();
  };

  // 技能要求
  $ionicModal.fromTemplateUrl('jobRequire.html',{
    scope: $scope
  }).then(function (modal) {
    $scope.jobRequire=modal;
  });
  $scope.job_Require = function () {
    $scope.jobRequire.show();
  };
  $scope.closeJobRequire = function () {
    $scope.jobRequire.hide();
  };

  // 薪资范围 浮动框
  $ionicPopover.fromTemplateUrl('salaryRange.html', {
    scope:$scope,
    animation:'animated fadeInUp'
  }).then(function (popover) {
    $scope.salaryRange = popover;
  });
  $scope.salary_Range = function ($event) {
    $scope.salaryRange.show($event);
  };
  $scope.closeSalaryRange = function () {
    $scope.salaryRange.hide();
  };
  // 保存
  $scope.saveSalaryRange = function (salary_range) {
    // salary_range=$rootScope.salary1+'k - '+$rootScope.salary2+'k';
    // 对象直接点添加属性
    // console.log(localStorage);
    $scope.job_info.job_salary=salary_range;
    // console.log($scope.job_info.job_salary);
    // console.log($scope.job_info);
    // stringify()用于从一个对象解析出字符串
    localStorage.setItem('job_info', JSON.stringify($scope.job_info));
    console.log(localStorage);
    $scope.salaryRange.hide();
  };
  // var arr=[];
  $scope.rangeLeft=[];
  $scope.rangeRight=[];
  for(var i=0;i<50;i++){
    // arr[i]=(i+1)+'k';
    // console.log(arr[i]);
    $scope.rangeLeft.push((i+1)+'k');
    $scope.rangeRight.push((i+1)+'k');
  }
  $scope.rangeRight.push('100k');
  // console.log($scope.rangeLeft);
  // on-scroll
  var n=0,m=0,n2=0,m2=0;

  // 看看页面有没有放缩35？38.1818?
  $scope.myMove=function () {
    // console.log(this);
    this.$onScrollComplete=function (env) {
      // console.log(env.scrollTop);
      var t=env.scrollTop;
      // console.log(t);
      n=parseInt(t/35);
      m=n+1;
      $rootScope.salary1=m;
      // console.log("第"+m+"个");
      // ||  scrollBy
      // 停的条件是t=n*35
      function calca() {
          if(parseFloat(t%35)<17.5){
            // console.log("↓");
            $ionicScrollDelegate.$getByHandle("scroll1").scrollTo(0,n*35,[true]);
            $ionicScrollDelegate.$getByHandle("scroll2").scrollTo(0,m*35,[true]);
            t=n*35;
          }
          else{
            // console.log("↑");
            $ionicScrollDelegate.$getByHandle("scroll1").scrollTo(0,m*35,[true]);
            $ionicScrollDelegate.$getByHandle("scroll2").scrollTo(0,(m+1)*35,[true]);
            t=m*35;
          }
      }
      calca();
      // e.stopPropagation();冒泡
      // e.preventDefault();默认
    };
  };


  $scope.myMove2=function () {
    this.$onScrollComplete=function (env) {
      var t2=env.scrollTop;
      n2=parseInt(t2/35);
      m2=n2+1;
      if(m2==51){m2=100;$rootScope.salary2=m2;}
      else{$rootScope.salary2=m2;}
      function calca2() {
        if(parseFloat(t2%35)<17.5){
          t2=n2*35;
          $ionicScrollDelegate.$getByHandle("scroll2").scrollTo(0,n2*35,[true]);
        }else{
          t2=m2*35;
          $ionicScrollDelegate.$getByHandle("scroll2").scrollTo(0,m2*35,[true]);
        }
      }
      calca2();
    }
  };
  // 经验要求 浮动框
  $ionicPopover.fromTemplateUrl('expRequire.html', {
    scope:$scope,
    animation:'animated fadeInUp'
  }).then(function (popover) {
    $scope.expRequire = popover;
  });
  $scope.exp_Require = function ($event) {
    $scope.expRequire.show($event);
  };
  $scope.closeExpRequire = function () {
    $scope.expRequire.hide();
  };
  $scope.saveExpRequire = function (job_exp) {
    // console.log(localStorage);
    // $scope.job_info.job_exp=$rootScope.expItems[$rootScope.exp];
    $scope.job_info.job_exp=job_exp;
    localStorage.setItem('job_info', JSON.stringify($scope.job_info));
    console.log(localStorage);
    $scope.expRequire.hide();
  };
  $rootScope.expItems=['不限','应届生','1年以内','1-3年','3-5年','5-10年','10年以上'];
  $scope.myMoveExp=function () {
    this.$onScrollComplete=function (env) {
      var t=env.scrollTop;
      n=parseInt(t/35);
      m=n+1;
      $rootScope.exp=n;//数组0开始
      // console.log($rootScope.exp);
      // console.log($rootScope.expItems[$rootScope.exp]);
      function calculate() {
        if(parseFloat(t%35)<17.5){
          $ionicScrollDelegate.$getByHandle("scrollExp").scrollTo(0,n*35,[true]);
          t=n*35;
        }
        else{
          $ionicScrollDelegate.$getByHandle("scrollExp").scrollTo(0,m*35,[true]);
          t=m*35;
        }
      }
      calculate();
    };
  };

  // 学历要求 浮动框
  $ionicPopover.fromTemplateUrl('eduRequire.html', {
    scope:$scope,
    animation:'animated fadeInUp'
  }).then(function (popover) {
    $scope.eduRequire = popover;
  });
  $scope.edu_Require = function ($event) {
    $scope.eduRequire.show($event);
  };
  $scope.closeEduRequire = function () {
    $scope.eduRequire.hide();
  };
  $scope.saveEduRequire = function () {
    $scope.eduRequire.hide();
  };

  $rootScope.eduItems=['不限','大专','本科','硕士','博士'];
  $scope.saveEduRequire = function (job_edu) {
    // console.log(localStorage);
    // $scope.job_info.job_exp=$rootScope.expItems[$rootScope.exp];
    $scope.job_info.job_edu=job_edu;
    localStorage.setItem('job_info', JSON.stringify($scope.job_info));
    console.log(localStorage);
    $scope.eduRequire.hide();
  };
  $scope.myMoveEdu=function () {
    this.$onScrollComplete=function (env) {
      var t=env.scrollTop;
      n=parseInt(t/35);
      m=n+1;
      $rootScope.edu=n;//数组0开始
      // console.log($rootScope.exp);
      // console.log($rootScope.expItems[$rootScope.exp]);
      function calculate() {
        if(parseFloat(t%35)<17.5){
          $ionicScrollDelegate.$getByHandle("scrollEdu").scrollTo(0,n*35,[true]);
          t=n*35;
        }
        else{
          $ionicScrollDelegate.$getByHandle("scrollEdu").scrollTo(0,m*35,[true]);
          t=m*35;
        }
      }
      calculate();
    };
  };

  // 工作城市 浮动框
  $ionicPopover.fromTemplateUrl('jobCity.html', {
    scope:$scope,
    animation:'animated fadeInUp'
  }).then(function (popover) {
    $scope.jobCity = popover;
  });
  $scope.job_City = function ($event) {
    $scope.jobCity.show($event);
  };
  $scope.closeJobCity = function () {
    $scope.jobCity.hide();
  };
  $scope.saveJobCity = function () {
    $scope.jobCity.hide();
  };

  // 工作地点 模态框
  $ionicModal.fromTemplateUrl('jobLocation.html', {
    scope:$scope
  }).then(function (modal) {
    $scope.jobLocation = modal;
  });
  $scope.job_Location = function () {
    $scope.jobLocation.show();
  };
  $scope.closeJobLocation = function () {
    $scope.jobLocation.hide();
  };
  $scope.saveJobLocation = function (job_location) {
    $scope.job_info.job_location=job_location;
    localStorage.setItem('job_info', JSON.stringify($scope.job_info));
    $scope.jobLocation.hide();
  };

  // 职位描述 模态框
  $ionicModal.fromTemplateUrl('jobDes.html', {
    scope:$scope
  }).then(function (modal) {
    $scope.jobDes = modal;
  });
  $scope.job_Des = function () {
    $scope.jobDes.show();
  };
  // $scope.closeJobDes = function () {
  //   $scope.jobDes.hide();
  // };
  $scope.saveJobDes = function (job_des) {
    $scope.job_info.job_des=job_des;
    localStorage.setItem('job_info', JSON.stringify($scope.job_info));
    console.log(localStorage);
    $scope.jobDes.hide();
  };

  // 职位描述中的提示 浮动框
  $ionicPopover.fromTemplateUrl('desWarning.html', {
    scope:$scope
  }).then(function (popover) {
    $scope.desWarning = popover;
  });
  $scope.showDes = function ($event) {
    $scope.desWarning.show($event);
  };
  $scope.closeDes = function () {
    $scope.desWarning.hide();
  };
  $scope.ensureDes = function () {
    $scope.jobDes.hide();
    $scope.desWarning.hide();
  };
})

.controller('ChatsCtrl', function($scope, Chats, $state, $ionicViewSwitcher) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
  $scope.onSwipeLeft = function () {
    $state.go('tab.me');
    $ionicViewSwitcher.nextDirection('forwards');
  };
  $scope.onSwipeRight = function () {
    $state.go('tab.expert');
    $ionicViewSwitcher.nextDirection('back');
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('MeCtrl', function($scope, $ionicModal ,$state, $ionicViewSwitcher) {
  $ionicModal.fromTemplateUrl('settings.html', {
    scope: $scope,
    animation:'animated slideInRight'
  }).then(function (modal) {
    $scope.modal = modal;
  });
  $scope.show_settings=function () {
    $scope.modal.show();
  };
  $scope.hide_settings=function () {
    $scope.modal.hide();
  };
  $scope.onSwipeRight = function() {
    $state.go('tab.chats');
    $ionicViewSwitcher.nextDirection('back');
  }
})

.controller('LoginCtrl',function ($scope) {

})

.controller('FaBuPcCtrl',function ($scope) {

})

;



