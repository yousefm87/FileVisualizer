fileVizApp.directive('ymGamelist', function() {
  return {
    restrict: 'AE',
    scope: {},
    controller: 'fileVizController',
    link: function(scope, element, attrs) {
        scope.$on('Consoles_Ready', function () {
            var newa = 1;
        });

    },
    compile: function (element, attrs) { 
        return {
            pre: function(scope, iElem, iAttrs){
                console.log(name + ': pre link => ' + iElem.html());
            },
            post: function(scope, iElem, iAttrs){
                console.log(name + ': post link => ' + iElem.html());
            }
        }
    },
    templateUrl: 'tmpl/itemlist.html'
  };
});


fileVizApp.directive('buttonRepeat', function($compile) {
  return function(scope, element, attrs) {
      if(scope.$last) {
        scope.$emit('Itemlist_Loaded');
      }
  };
});

fileVizApp.directive('mainDirective', function() {
  return function(scope, element, attrs) {
      scope.$on('Itemlist_Loaded', function (event) {
        $('.gamebutton').first().addClass('selectedbutton');
      });
  };
});
