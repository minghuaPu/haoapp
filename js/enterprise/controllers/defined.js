angular.module('enterprise.controllers', [])

<<<<<<< HEAD
.controller('ExpertCtrl', function($scope, $ionicModal, $ionicPopover, $state, $ionicViewSwitcher,$http,$window,$ionicScrollDelegate,$ionicListDelegate,$rootScope,ENV) {
=======
.controller('ExpertCtrl', function($scope, $ionicModal, $ionicPopover, $state, $ionicViewSwitcher,$http,$window,$ionicScrollDelegate,$rootScope,ENV) {
>>>>>>> 4bc404d2923abb99ed8636321b287fa808fa8814

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
    // $scope.job_info.comp_info =
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
  // 技术
  $ionicPopover.fromTemplateUrl('jiShu.html',{
    scope: $scope,
    animation:'animated fadeInRight'
  }).then(function (popover) {
    $scope.skillpopover = popover;
  });
  $scope.jiShu = function($event) {
    $scope.skillpopover.show($event);
  };
  // 选项卡开始
  $scope.now = 0;
  $scope.arr = [
    {name: '后端开发',content:['后端开发','移动开发','前端开发','测试','项目管理','运维/技术支持','高端技术职位','数据','硬件开发','其他技术职位','软件销售支持','通信']},
    {name: '移动开发',content:['Android','iOS','Web前端','U3D','HTML5','COCOS2DX','JavaScript','Flash','WP']},
    {name: '前端开发',content:'3'},
    {name: '测试',content:'4'},
    {name: '项目管理',content:'5'},
    {name: '运维/技术支持',content:'6'},
    {name: '高端技术职位',content:'7'},
    {name: '数据',content:'8'},
    {name: '硬件开发',content:'9'},
    {name: '其他技术职位',content:'10'},
    {name: '软件销售支持',content:'11'},
    {name: '通信',content:'12'}
    ];
  $scope.i=3;
  $scope.fn = function (n) {
    $scope.now = n;
    $scope.i++;
    var aItem = document.getElementsByClassName('item-select');
    // console.log(aItem[$scope.now]);
    aItem[$scope.now].style.zIndex=$scope.i;
  };
  $scope.hdkf='Java';
  $scope.gethdkf = function (hdkf) {
    $scope.job_info.job_type=hdkf;
    localStorage.setItem('job_info', JSON.stringify({'job_type':hdkf}));
    console.log(localStorage);
    $scope.skillpopover.hide();
    $scope.jobType.hide();
  };
  $scope.ydkf='Android';
  $scope.getydkf = function (ydkf) {
    $scope.job_info.job_type=ydkf;
    localStorage.setItem('job_info', JSON.stringify({'job_type':ydkf}));
    console.log(localStorage);
    $scope.skillpopover.hide();
    $scope.jobType.hide();
  };
  $scope.qdkf='web前端';
  $scope.getqdkf = function (qdkf) {
    $scope.job_info.job_type=qdkf;
    localStorage.setItem('job_info', JSON.stringify({'job_type':qdkf}));
    console.log(localStorage);
    $scope.skillpopover.hide();
    $scope.jobType.hide();
  };
  $scope.cs='测试工程师';
  $scope.getcs = function (cs) {
    $scope.job_info.job_type=cs;
    localStorage.setItem('job_info', JSON.stringify({'job_type':cs}));
    console.log(localStorage);
    $scope.skillpopover.hide();
    $scope.jobType.hide();
  };
  $scope.xmgl='项目经理';
  $scope.getxmgl = function (xmgl) {
    $scope.job_info.job_type=xmgl;
    localStorage.setItem('job_info', JSON.stringify({'job_type':xmgl}));
    console.log(localStorage);
    $scope.skillpopover.hide();
    $scope.jobType.hide();
  };
  $scope.yw='运维工程师';
  $scope.getyw = function (yw) {
    $scope.job_info.job_type=yw;
    localStorage.setItem('job_info', JSON.stringify({'job_type':yw}));
    console.log(localStorage);
    $scope.skillpopover.hide();
    $scope.jobType.hide();
  };
  $scope.gd='技术总监';
  $scope.getgd = function (gd) {
    $scope.job_info.job_type=gd;
    localStorage.setItem('job_info', JSON.stringify({'job_type':gd}));
    console.log(localStorage);
    $scope.skillpopover.hide();
    $scope.jobType.hide();
  };
  $scope.sj='数据分析师';
  $scope.getsj = function (sj) {
    $scope.job_info.job_type=sj;
    localStorage.setItem('job_info', JSON.stringify({'job_type':sj}));
    console.log(localStorage);
    $scope.skillpopover.hide();
    $scope.jobType.hide();
  };
  $scope.yjkf='嵌入式';
  $scope.getyjkf = function (yjkf) {
    $scope.job_info.job_type=yjkf;
    localStorage.setItem('job_info', JSON.stringify({'job_type':yjkf}));
    console.log(localStorage);
    $scope.skillpopover.hide();
    $scope.jobType.hide();
  };
  $scope.rjxs='售前工程师';
  $scope.getrjxs = function (rjxs) {
    $scope.job_info.job_type=rjxs;
    localStorage.setItem('job_info', JSON.stringify({'job_type':rjxs}));
    console.log(localStorage);
    $scope.skillpopover.hide();
    $scope.jobType.hide();
  };
  $scope.tx='通信技术工程师';
  $scope.gettx = function (tx) {
    $scope.job_info.job_type=tx;
    localStorage.setItem('job_info', JSON.stringify({'job_type':tx}));
    console.log(localStorage);
    $scope.skillpopover.hide();
    $scope.jobType.hide();
  };

  $ionicModal.fromTemplateUrl('other_Skill.html', {
    scope: $scope,
    animation: 'animated fadeIn'
  }).then(function (modal) {
    $scope.osModal = modal;
  });
  $scope.otherSkill = function () {
    $scope.osModal.show();
  };
  $scope.closeOtherSkill = function () {
    $scope.osModal.hide();
  };
// 技能要求
  $rootScope.liItems=[
    'Java',
    '后端开发',
    'JavaScript',
    '数据库',
    'Android',
    'iOS',
    'Web前端',
    'HTML\/CSS',
    '移动开发',
    'HTML5',
    '系统架构',
    'Linux',
    'C\/C++',
    '前端开发',
    '需求分析',
    '解决方案',
    '.NET',
    'C#',
    'Python',
    '数据挖掘',
    ' + '];
  $scope.count=0;
  $scope.skillFn = function (n) {
    $rootScope.cur = document.getElementsByClassName('tagItems');
    $rootScope.now=n;
    // console.log("当前的索引值:"+$rootScope.now);
    console.log($scope.liItems[$rootScope.now]);
    if(!hasClass($rootScope.cur[$rootScope.now], "aa")) {
      // 少于三个标签才做加aa
      if($scope.count<3){
        $scope.count++;
        $rootScope.cur[$rootScope.now].className += " aa";
        // console.log("原来没aa,我加了aa"+"数量："+$scope.count);
      }
    }
    else {
      $scope.count--;
      // console.log("数量："+$scope.count);
      removeClass($rootScope.cur[$rootScope.now], "aa");
    }

  };

  function hasClass(obj, cls) {
    return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
  }
  function removeClass(obj, cls) {
    if (hasClass(obj, cls)) {
      var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
      obj.className = obj.className.replace(reg, ' ');
    }
  }
  $scope.enterJobRequire =function (job_require) {
    $scope.job_info.job_require=job_require;
    localStorage.setItem('job_info', JSON.stringify({'job_require':job_require}));
    console.log(localStorage);
    console.log($rootScope.liItems[$rootScope.now]);
    $scope.jobRequire.hide();
  };
  // $scope.skillContents=['后端开发','移动开发','前端开发','测试','项目管理','运维/技术支持','高端技术职位','数据','硬件开发','其他技术职位','软件销售支持','通信'];
  // $scope.hdkf=['java','PHP','C++','.NET','Python','C#','数据挖掘','Node.js','C','Hadoop','算法分析师','Ruby','Golang'];
  // $scope.ydkf=['Android','iOS','Web前端','U3D','HTML5','COCOS2DX','JavaScript','Flash','WP'];
  // 选项卡结束

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
    $scope.job_info.job_name=job_name;
    localStorage.setItem('job_info', JSON.stringify({'job_name':job_name}));
    console.log(localStorage);
    // console.log(job_name);
    $scope.jobName.hide();
  };

  $scope.numFn = function () {
    $scope.num = document.getElementById('jobName').value.length;
    // console.log($scope.num);
  };
  $scope.numFn1 = function () {
    $scope.loc = document.getElementById('location').value.length;
    // console.log($scope.loc);
  };
  $scope.numFn2 = function () {
    $rootScope.des = document.getElementById('des').value.length;
    // console.log($rootScope.des);
  };
  // 发布职位
  $scope.publish_info = function () {
    // console.log("publish_info: "+$window.sessionStorage["userInfo"]);

    $scope.job_info.enterprise_id=JSON.parse($window.sessionStorage["userInfo"]).id;


    $http({
      method: 'jsonp',
      url: ENV.api+'/public/job/create?callback=JSON_CALLBACK',
      params: $scope.job_info
    }).success(function (rtn_data) {
      console.log(rtn_data);
    });
    console.log(localStorage);
   // $scope.modal.hide();
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
  $scope.saveSalaryRange = function () {
    // salary_range=$rootScope.salary1+'k - '+$rootScope.salary2+'k';
    // 对象直接点添加属性
    // console.log(localStorage);
<<<<<<< HEAD
    // $scope.job_info.job_salary=salary_range;
    $scope.job_info.salary1=$rootScope.salary1;
    $scope.job_info.salary2=$rootScope.salary2;
=======
    $scope.job_info.job_salary=salary_range;
>>>>>>> 4bc404d2923abb99ed8636321b287fa808fa8814
    // console.log($scope.job_info.job_salary);
    // console.log($scope.job_info);
    // stringify()用于从一个对象解析出字符串
    localStorage.setItem('job_info', JSON.stringify($scope.job_info));
    // console.log(localStorage);
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
    // console.log(localStorage);
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

  // $scope.upload =function () {
  //
  // };
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
    var hasDes = document.getElementById('hasDes');
    if($rootScope.des == 0) {hasDes.style.opacity = 0;}
    else{hasDes.style.opacity = 1;}

    $scope.job_info.job_des=job_des;
    localStorage.setItem('job_info', JSON.stringify($scope.job_info));
    // console.log(localStorage);
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

.controller('MeCtrl', function($scope, $ionicModal ,$state, $ionicViewSwitcher,$rootScope) {
  console.log($rootScope.currentUser);
  if(!$rootScope.currentUser) {
    $state.go("login");
  }


  $ionicModal.fromTemplateUrl('zwgl.html',{
    scope: $scope
  }).then(function (modal) {
    $scope.zwgl = modal;
  });
  $scope.show_zwgl=function () {
    $scope.zwgl.show();
  };
  $scope.closezwgl=function () {
    $scope.zwgl.hide();

  };

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
  .service('Session', function() {
    this.create = function(user) {

      this.user = user;
      this.userRole = user.userRole;
    };
    this.destroy = function() {
      this.user = null;
      this.userRole = null;
    };
    return this;
  })
  .service('Auth', ['Session', '$window', '$state', function(Session, $window, $state) {
    var authService = {};
    // 是否已经登录
    authService.isAuthenticated = function() {
      return !!Session.user;
    };
    // 是否有进入的权限
    authService.isAuthorized = function(authorizedRoles) {
      return false;
    };
    //log out the user and broadcast the logoutSuccess event
    authService.logout = function() {
      Session.destroy();
      $window.sessionStorage.removeItem("userInfo");
      $state.go("login");
      console.log($rootScope.currentUser);
    };

    return authService;
  }])


  .controller('LoginCtrl', function($scope, $rootScope, $state, $http, Session, $window, ENV) {
    // $scope.user.password="admin";
    // rootScope 可以在各个控制器使用
    $scope.signIn = function(user) {

      // 就是调用
      // url http://localhost/thinkphp_5.0.2_full/public/user/login
      // user_name和user_pwd
      // 返回json格式
      // jquery ajax
      $http({
        method: "jsonp",
        url: ENV.api + "/public/user/login?callback=JSON_CALLBACK",
        params: user
      }).success(function(data) {
        if(data) {
          $window.sessionStorage["userInfo"] = JSON.stringify(data);
          $scope.login(data);
        } else {
          $scope.success = "用户名或密码不正确";
        }
      });


    };
    $scope.hide_msg = function() {
      $scope.success = "";
    };

    $scope.login = function(data) {
      Session.create(data);
      delete data.password;
      $rootScope.currentUser = data;
      $state.go('tab.expert');
    };

    // if a session exists for current user (page was refreshed)
    // log him in again
    if($window.sessionStorage["userInfo"]) {
      var credentials = JSON.parse($window.sessionStorage["userInfo"]);
      // JSON.parse：把json字符串转换成json对象

      // JSON.stringify：把json对象转换成json字符串
      $scope.login(credentials);
    }

  })

.controller('FaBuPcCtrl',function ($scope) {

})

;



