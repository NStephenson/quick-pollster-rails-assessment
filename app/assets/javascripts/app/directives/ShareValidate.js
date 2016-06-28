app.directive('shareValidate', function () {
return {
    restrict: 'A',
    require: 'ngModel',
    link: function(scope, elem, attr, ngModel) {
        scope.$watch(attr.shareValidate, function(newArr, oldArr) {
            debugger;
            var hasResponse = 0;
            angular.forEach(newArr, function(value, key) {
                if(value.trim() !== ''){
                    hasResponse++;
                }
            });
            if (hasResponse > 2) {
                true;
            }
            else {
                false;
            }
        }, true); //enable deep dirty checking

        ngModel.$validators.shareValidate = function(a,b,c){
            // scope.$watch(attr.shareValidate, function(newArr, oldArr) {
            //     var hasResponse = 0;
            //     angular.forEach(newArr, function(value, key) {
            //         if(value.trim() !== ''){
            //             hasResponse++;
            //         }
            //     });
            //     if (hasResponse < 2) {
            //         return true
            //     }
            //     else {
            //         return false
            //     }
            // }, true); //enable deep dirty checking
        }
    }
};
});