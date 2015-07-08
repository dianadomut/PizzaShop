//app.js
(function(){

  "use strict";

  var module =  angular.module("pizzaApp", ["ngRoute"]);

  module.config(function($routeProvider){
    $routeProvider.when('/', {
      templateUrl: 'templates/order.tmpl.html',
      controller: 'orderController',
      controllerAs:"order"
    });

    $routeProvider.when('/status', {
      templateUrl: 'templates/status.tmpl.html',
      controller: 'statusController',
      controllerAs:"status"
    });
    
    
    $routeProvider.otherwise({redirectTo: '/'});
    
    

  });

  module.controller("orderController", function(){
    var order = this;
    order.count = 0;
    order.addOrder = function(){
      order.count++;
    }
  });


  var x=0;

  module.controller("statusController", function(){
    var status = this;

    status.steps = [{
      num:1,
      name:"Make Pie"
    },{
      num:2,
      name:"Bake Pie"
    },{
      num:3,
      name:"Deliver Pie"
    }];
    status.currentStep = 2;

  });


  /**
   * @description: Shows a pizza status bar
   */
  module.directive('pizzaStatusBar', function () {

    return {
      restrict: "E",
      link: function (scope, element, attrs) {
        element.text("this is the status bar");
      }
    }
  });

})();