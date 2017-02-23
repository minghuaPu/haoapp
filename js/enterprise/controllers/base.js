angular.module('enterprise.controllers', [])

.factory('PersonService', function($http){
  var BASE_URL = "http://api.randomuser.me/";
  var items = [];

  return {
    GetFeed: function(){
      return $http.get('/').then(function(response){
      //   items = response.data.results;
        items= [
          {id:1, fName:'Hege'+Math.random()*50, lName:"Pege" },
          {id:2, fName:'Kim',  lName:"Pim" },
          {id:3, fName:'Sal',  lName:"Smith" },
          {id:4, fName:'Jack', lName:"Jones" },
          {id:5, fName:'John', lName:"Doe" },
          {id:6, fName:'Peter',lName:"Pan" }
        ];
        return items;
      });
    },
    GetNewUser: function(){
      return $http.get(BASE_URL).then(function(response){
        items = response.data.results;
        return items;
      });
    }
  }
})
.controller('DashCtrl', function($scope,$ionicModal,$ionicPopover,$state,$ionicViewSwitcher) {
     $ionicModal.fromTemplateUrl('templates/index_search.html', {
        scope: $scope,
         animation: 'animated fadeInRightBig'
      }).then(function(modal) {
        $scope.modal = modal;
      });

      $scope.show_search=function  () {
        $scope.modal.show();
      };
      $scope.down_page=function  () {
          $state.go('tab.chats');
          $ionicViewSwitcher.nextDirection("forward");
      };
      $scope.popover = $ionicPopover.fromTemplateUrl('my-popover.html', {
        scope: $scope
      });

      // .fromTemplateUrl() 方法
      $ionicPopover.fromTemplateUrl('my-popover.html', {
        scope: $scope
      }).then(function(popover) {
        $scope.popover = popover;
      });


      $scope.openPopover = function($event) {
        $scope.popover.show($event);
      };
      $scope.closePopover = function() {
        $scope.popover.hide();
      };

})
.controller('WorkDetailCtrl',  function($scope,Share){
      $scope.share=function  () {
        Share.show();
      }

})


.controller('ChatsCtrl', function($scope, Chats) {
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
})

.controller('MsgCtrl', function($scope, Msgs, $ionicModal,Share) {
  // 模态窗口
  $scope.contacts = [
    { name: 'Gordon Freeman' },
    { name: 'Barney Calhoun' },
    { name: 'Lamarr the Headcrab' }
  ];

  $ionicModal.fromTemplateUrl('templates/modal.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });



   $scope.showModel=function(info){
     $scope.newUser=info;
     $scope.modal.show();
   };
    $scope.createContact = function(u) {
      $scope.msgs.push({ id: u.id ,name: u.name,lastText:u.lastText });
      $scope.modal.hide();
    };

    $scope.data = {
      showDelete: false
    };

    $scope.edit = function(item) {
      $scope.showModel(Msgs.get(item.id));
    };
    $scope.share = function(item) {
      Share.show();
    };

    $scope.moveItem = function(item, fromIndex, toIndex) {
      $scope.msgs.splice(fromIndex, 1);
      $scope.msgs.splice(toIndex, 0, item);
    };

    $scope.onItemDelete = function(item) {
      $scope.msgs.splice($scope.msgs.indexOf(item), 1);
    };

    $scope.msgs = Msgs.all();
    $scope.remove = function(chat) {
      Msgs.remove(chat);
    };
})

.controller('WorkCtrl', function($scope, $timeout, PersonService) {
  $scope.items = [];

  PersonService.GetFeed().then(function(items){
    $scope.items = items;
    console.log($scope.items);
  });

  $scope.doRefresh = function() {
    PersonService.GetFeed().then(function(items){
      $scope.items = items.concat($scope.items);

      //Stop the ion-refresher from spinning
      $scope.$broadcast('scroll.refreshComplete');
    });
  };

})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})
.controller('MsgDetailCtrl', function($scope, $stateParams, Msgs) {
  $scope.msg = Msgs.get($stateParams.msgId);
})

.controller('AccountCtrl', function($scope) {

  $scope.settings = {
    enableFriends: true
  };
});
