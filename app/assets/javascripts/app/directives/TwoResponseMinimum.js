app.directive('integer', function(){
  return {
    restrict: 'A',
    require: 'ngModel',
    link: function (scope, element, attrs, ngModel) {
      debugger;
      ngModel.$validators.integer = function(a,b,c) {
        
      };
    }
  }
})