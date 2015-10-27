(function(){
	angular.module('app')
		.provider('ipad1', [function () {
			//可於自訂module內的config取得
			var vm = this;
			vm.defaults = {};
			vm.defaults.name = 'ipad';

			var counter = 0;
			this.setCounter = function(i) { counter = i; };
			//上述程式碼，指可於自訂module內的config取得
			
			//注入後，會直接執行$get得到回傳物件。
			vm.$get = [function() {
				return {
					name: vm.defaults.name  +' Pro 1'
				};
			}];
		}])
		.service('ipad2', [function () {
			this.name = 'ipad Pro 2';
		}])
		.factory('ipad3', [function () {
			
		
			return {
				name:'ipad Pro 3'
			};
		}])
		.value('ipad4', {
			'name':'ipad Pro 4'
		})
		//可於config取到
		.constant('config', {
			'webroot': '/',
			'weburl': 'http://localhost:8080'
		});

})();