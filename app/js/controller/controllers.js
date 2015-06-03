fileVizApp.controller("fileVizController", function ($scope, configs, consoles, $location) {
    var async = require('async');
    var filehelper = require('filehelper');
    
    var consoleKeys = [];

    for(var key in consoles) {
        consoleKeys.push(key);
    }
    
    async.each(consoleKeys, function(currConsole, callback) {
        filehelper.GetItemList(consoles, currConsole, callback);
        
        var a = 9;
    }, function(err) {
        if(err) {
            return next(err);
        }
        
        $scope.headerSrc = "tmpl/header.html";
        
        $scope.configs = configs;


        $scope.back = function () {
            window.history.back();
        };

        $scope.getCount = function (n) {
            return new Array(n);
        }

        $scope.isActive = function (route) {
            return route === $location.path();
        }

        $scope.isActivePath = function (route) {
            return ($location.path()).indexOf(route) >= 0;
        }
        
        $scope.$apply( function () {
            $scope.consoles = consoles;
             if(consoles.length > 0) {
                $scope.currConsoleInd = 0;
                if(consoles.length > 1) {
                    $scope.nextConsoleInd = 1;
                    $scope.prevConsoleInd = consoles.length - 1;
                } else {
                    $scope.nextConsoleInd = -1;
                    $scope.prevConsoleInd = -1;
                }

            }
            else {
                $scope.nextConsoleInd = -1;
                $scope.prevConsoleInd = -1;
            }
                    
        });
    
        
        $scope.$broadcast("Consoles_Ready");
    });

});