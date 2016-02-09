var app = angular.module('fullKollApp', ['ngRoute','AdalAngular','ui.bootstrap']).

    
config(function($routeProvider, $httpProvider, adalAuthenticationServiceProvider, $locationProvider) {
    
    // Initialize the ADAL provider with your clientID (found in the Azure Management Portal) and the API URL (to enable CORS requests).
		adalAuthenticationServiceProvider.init(
			{
				clientId: clientId,
				// The endpoints here are resources for cross origin requests.
				endpoints: {
					'https://graph.microsoft.com': 'https://graph.microsoft.com'
				}
			},
			$httpProvider
			);
            
            $routeProvider.when('/', {
                templateUrl : 'index.html',
                //controller  : 'mainController'
            })
            .when('/admin', {
                templateUrl: 'views/admin.html',
            })
            .when('/carousel', {
                templateUrl: 'views/carousel.html',
            })
            .otherwise('/', {
                templateUrl : 'index.html',
                //controller  : 'mainController'
            });
            
            //$locationProvider.html5Mode(true);

            
    
    
    
});







		