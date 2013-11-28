(function(){
    'use strict';

    angular.module('angularfb.services', [ 'ngResource' ])

        .factory("API", [ '$rootScope', '$q', '$resource', '$location', '$exceptionHandler',
            function($rootScope, $q, $resource, $location, $exceptionHandler){
                return  {
                    me: function(){
                        var def = $q.defer();
                        FB.api('/me', function(response){
                            def.resolve($rootScope.user = response);
                        })
                        return def.promise;
                    },

                    getLoginStatus: function(successCallback, errorCallback){
                        var self = this;
                        FB.getLoginStatus(function(response) {
                            self._processAuthResponse( response, successCallback, errorCallback )
                        });
                    },

                    login: function(successCallback, errorCallback){
                        var self = this;
                        FB.login(function(response){
                            self._processAuthResponse( response, successCallback, errorCallback );
                        }, { scope: FB_SCOPE } )
                    },

                    logout: function( logoutCallback ){
                        return FB.logout(function( response ){
                            if (_.isFunction( logoutCallback ))
                                logoutCallback.call(this, arguments)
                            else {
                                $location.path('/')
                                $rootScope.user = null;
                            }
                            $rootScope.auth = response;

                        })
                    },

                    _processAuthResponse: function( response, successCb, errorCb ) {
                        var self = this;
                        if (response.authResponse) {
                            if (_.isFunction(successCb))
                                successCb.call(this, response)
                            else
                            if(_.isUndefined(successCb)){
                                $location.path('/')
                            }
                            else
                                throw new Error("Success callback should be a function")
                        } else {
                            if (_.isFunction(errorCb))
                                errorCb.call(this, response)
                            else
                            if(_.isUndefined(errorCb)){}
                            else
                                throw new Error("Error callback should be a function")
                        }
                        $rootScope.auth = response;
                        self._applyScope();
                    },

                    _applyScope: function( cb ) {
                        if (!$rootScope.$$phase) {
                            try {
                                $rootScope.$eval( cb );
                            } catch (e) {
                                $exceptionHandler(e);
                            } finally {
                                try {
                                    $rootScope.$apply();
                                } catch (e) {
                                    $exceptionHandler(e);
                                    throw e;
                                }
                            }
                        } else {
                            $rootScope.$eval( cb );
                        }
                    }
                }
            }
        ])

})();


