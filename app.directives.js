(function(){
	angular.module('app')
		.directive('mycart', [function(){
			  return {
				    restrict: 'AE',
				    templateUrl: 'mycart.html',
				    link:function( $scope){

				    }
			    }
		}]);

})();