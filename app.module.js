(function(){
	'use strict';
// angular.module('app', [])
// .config(['$controllerProvider', function ($controllerProvider) {
//     $controllerProvider.allowGlobals();
// }]);

	angular.module('app', ['ngCookies'])
	.config(appConfigFn)
	.run(appRunFn);
	//min 後 可以有對應的注入參照。
	// '$provide' 注入後 可decorater
	appConfigFn.$inject = ['$provide','$controllerProvider', '$cookiesProvider', 'ipad1Provider', 'config'];
	//所有相依性注入的"服務"，在實體化前的設定區域。
	function appConfigFn($provide, $controllerProvider, $cookiesProvider, ipad1Provider, config){
		// 跟舊版相容的權宜方法，不建議
		// 應該明確寫入controller
	    // $controllerProvider.allowGlobals();
	    $cookiesProvider.defaults.path = '/';
	    // ipad1Provider.defaults.name = 'Jack';
	    ipad1Provider.defaults.name = config.weburl;

	    //擴充$cookies
	    $provide.decorator('$cookies', ['$delegate', function($delegate){
	    	$delegate.test = function(){
	    		return 'Jack'
	    	}
	    	return $delegate
	    }])

	}

	//run 只能注入實體化後的物件，取得的參考與 config後的物件是同一份，
	//注意：物件是參考傳遞，所以必須使用物件 才能參照到同一份記憶體位置。
	// 字串 是 傳值，所以如果是以字串的形式傳遞，則只是會變成 local的變數更改，實際參照的config後的物件不會改變。
	appRunFn.$inject = ['version','$rootScope'];
	function appRunFn(version,$rootScope){
		version.version = "0.1.0";
		$rootScope.myName = 'Jack';
	}

})();

