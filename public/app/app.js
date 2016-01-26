var app = angular.module('fullKollApp', ['ngRoute','AdalAngular','ui.bootstrap']).

    
config(function($routeProvider, $httpProvider, adalAuthenticationServiceProvider) {
    
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
    
    
    
});







		