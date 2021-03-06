/**
*  Module
*
* Description
*/

var app =angular.module('myspace', [
	'ngRoute',
	'ngAnimate',
	'ui.router',
	"oc.lazyLoad"
	]);

// app.run(["$rootScope"],function ($rootScope) {
//     $rootScope.app ={
//         viewAnimation: 'ng-fadeInUp'
// 	}
// });

app.constant("APP_JSCRIPTS",{
	script:{
		"viewerjs":['app/libs/viewerjs/dist/viewer.min.css','app/libs/viewerjs/dist/viewer.min.js']
	}
})



//router url handle
app.provider('routerTempUrlHelpProvider', [function () {
	

	this.$get = [function() {

				var that = this;  
                var service = {}; 
                var base="app/view/" 
                service.baseUrl=function(url){  
                  return base+url;  
                 }  
                  return service;  
			}];
}]);

