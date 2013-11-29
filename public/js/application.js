(function() {
    'use strict';

    angular.module('angularfb', [
            'ngRoute',
            'ngResource',
            'angularfb.filters',
            'angularfb.controllers',
            'angularfb.services',
            'angularfb.directives',
            'angularfb.friends'
        ])

    .config([ '$routeProvider', '$locationProvider',
        function($routeProvider, $locationProvider){
            $locationProvider.html5Mode(true);
            $routeProvider
                .when('/', {
                    templateUrl: '/partials/homepage',
                    controller: 'HomePageCtrl'
                })

                .when('/logout', {
                    resolve: [ '$rootScope', 'API', '$location', function($rootScope, API, $location){
                        API.logout(function(){
                            console.log('Logout... redirecting...');
                            $location.path('/')
                            $rootScope.$apply();
                        });
                    }]
                })

                .otherwise();
        }
    ])

    .run(['$rootScope', '$location', 'API', function($rootScope, $location, API){
        FB.init({
            appId      : FB_APP_ID,
            channelUrl : FB_APP_URL,
            status     : true,
            xfbml      : true,
            oauth      : true
        });

        console.log('RUN!');

        $rootScope.login = function(){
            API.login(function(){
                console.log("Logged in. Redirecting...")
                $location.path('/');
            }, function(){
                console.log("not logged in... error...")
            });
        }

        API.getLoginStatus(
            function( response ){
                console.info("Authorized:", response)
            },
            function( response ){
                console.error("Not authorized:", response)
            }
        )

        FB.Event.subscribe('auth.authResponseChange', function(response) {
            console.log('got AuthResponseChange:', response);
            if (response.status === 'connected') {
                API.me().then(
                    function(resp){
                        console.log('got user Info', resp);
                    },
                    function(error){
                        console.log("got user Info error", error);
                    }
                );
            }
            else {
                //console.log(response);
                $rootScope.user = null;
                $location.path('/');
            }
            $rootScope.auth = response;
            $rootScope.$$phase || $rootScope.$apply();
        });


        $rootScope.$on('$routeChangeStart', function(event, next, current){
            console.log(event, next, current);
            if ( !next.$$route )
                next.templateUrl = '/partials/error';
        })

    }])

    .controller('HomePageCtrl', [
        '$scope',
        function($scope){

        }
    ])

}());