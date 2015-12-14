angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
      
        
    .state('signup', {
      url: '/page1',
      templateUrl: 'templates/signup.html',
      controller: 'signupCtrl'
    })
        
      
    
      
        
    .state('register', {
      url: '/page2',
      templateUrl: 'templates/register.html',
      controller: 'registerCtrl'
    })
        
      
    
      
        
    .state('tabsController.mapPage', {
      url: '/page4',
      views: {
        'tab1': {
          templateUrl: 'templates/mapPage.html',
          controller: 'mapPageCtrl'
        }
      }
    })
        
      
    
      
        
    .state('tabsController.groupPage', {
      url: '/page5',
      views: {
        'tab3': {
          templateUrl: 'templates/groupPage.html',
          controller: 'groupPageCtrl'
        }
      }
    })
        
      
    
      
    .state('tabsController', {
      url: '/page3',
      abstract:true,
      templateUrl: 'templates/tabsController.html'
    })
      
    
      
        
    .state('tabsController.settings', {
      url: '/page7',
      views: {
        'tab4': {
          templateUrl: 'templates/settings.html',
          controller: 'settingsCtrl'
        }
      }
    })
        
      
    
      
        
    .state('contactDetail', {
      url: '/page8',
      templateUrl: 'templates/contactDetail.html',
      controller: 'contactDetailCtrl'
    })
        
      
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/page1');

});