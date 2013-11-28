(function(){
    'use strict';

    angular.module('angularfb.directives', ['angularfb.services', 'angularfb.filters'])

        .directive('profilepicture', function() {
            return function(scope, element, attr) {
                attr.$observe('profilepicture', function(compiled) {
                    var temp = document.createElement('img');
                    temp.src = compiled;
                    temp.onload = function() {
                        element.attr('src', compiled);
                    };
                });
            };
        })


})();