angular
  .module('app').controller('CalendarController', ['$scope', '$http', '$log', 'adalAuthenticationService',
    function ($scope, $http, $log, adalAuthenticationService) {
      $scope.pageName = 'page 1';

      var vm = this;
    
      // Properties
      vm.isConnected;
      vm.userAlias;
      vm.emailAddress;
      vm.emailAddressSent;
      vm.requestSuccess;
      vm.requestFinished; 
    
      // Methods
      vm.connect = connect;
      vm.disconnect = disconnect;
      vm.getEvents = getEvents;

      /**
       * Expose the login method from ADAL to the view.
       */
      function connect() {
        $log.debug('Connecting to Office 365...');
        adalAuthenticationService.login();
      };
		
      /**
       * Expose the logOut method from ADAL to the view.
       */
      function disconnect() {
        $log.debug('Disconnecting from Office 365...');
        adalAuthenticationService.logOut();
      };

      (function activate() {
        // Check connection status and show appropriate UI.
        if (adalAuthenticationService.userInfo.isAuthenticated) {
          vm.isConnected = true;
        
          // Get the user alias from the universal principal name (UPN).
          vm.userAlias = adalAuthenticationService.userInfo.profile.upn.split('@')[0];

        }
        else {
          vm.isConnected = false;
        }
      })();

      function getEvents() {
        var request = {
          method: 'GET',
          url: 'https://graph.microsoft.com/v1.0/me/events?$top=5'
        };
        
        // Execute the HTTP request. 
        $http(request)
          .then(function (response) {
            $log.debug('HTTP request to Microsoft Graph API returned successfully.', response);
            response.status === 202 ? vm.requestSuccess = true : vm.requestSuccess = false;
            vm.requestFinished = true;
          }, function (error) {
            $log.error('HTTP request to Microsoft Graph API failed.');
            vm.requestSuccess = false;
            vm.requestFinished = true;
          });
      }


    }]);