'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', ['ngResource'])
        .factory('Resources', ['$resource', function($resource) {

                var Resources = function() {
                    var _private = this;

                    _private.user = $resource('webresources/generic/:uuid', {}, {
                        query: {
                            method: 'GET',
                            isArray: true
                        },
                        get: {
                            method: 'GET',
                            isArray: false
                        },
                        update: {method: 'POST'},
                        create: {method: 'PUT'},
                        delete: {method: 'DELETE'}
                    });
                };
                
                return new Resources();
            }]);

