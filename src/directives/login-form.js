'use strict';

angular.module('leseulsteve.userAuth').directive('loginForm',
	function($animate, UserAuth) {
		return {
			// name: '',
			// priority: 1,
			// terminal: true,
			// scope: {}, // {} = isolate, true = child, false/undefined = no change
			// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
			restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
			// template: '',
			// templateUrl: '',
			// replace: true,
			// transclude: true,
			// compile: function (tElement) {},  
			link: function(scope, element) {

				scope.login = function(loginForm, credentials) {

					if (loginForm.invalid && UserAuth.config.animateForm) {
						$animate.addClass(element, 'shake').then(function() {
							$animate.removeClass(element, 'shake');
						});
					}
				};
			},
			// controller: function ($scope, $element) {};
		};
	});