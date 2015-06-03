fileVizApp.factory('configs', function() {
    var path = require('path');
    var configReq = require(path.join(process.cwd(), 'json/config.json'));
    var retObj = {};
    
    for(var key in configReq) {
        retObj[key] = configReq[key];
    }
    
    return retObj;
});

fileVizApp.factory('consoles', function() {
    var path = require('path');
    var configReq = require(path.join(process.cwd(), 'json/items.json'));
    var configReq = configReq.consoles;
    
    
    var retObj = {};
    
    for(var key in configReq) {
        retObj[configReq[key].consolename] = configReq[key];
    }

    return retObj;
});