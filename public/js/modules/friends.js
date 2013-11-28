(function(){ 'use strict';

    angular.module('angularfb.friends', ['angularfb.services', 'angularfb.filters'])

        .config([
            '$routeProvider', '$locationProvider', '$httpProvider',
            function($routeProvider, $locationProvider, $httpProvider){
                $locationProvider.html5Mode(true);
                $routeProvider
                    .when('/friends', {
                        templateUrl: '/partials/friends/friends',
                        controller: 'FriendsPageCtrl'
                    })
                    .otherwise();
        }
    ])

    .controller('FriendsPageCtrl', [
        '$scope', '$routeParams',
        function($scope, $routeParams){
            FB.api('/me/friends', function(response){
                console.log("Got friends: ", response)
                $scope.$apply($scope.friends = response.data);
            });
        }
    ])

})();