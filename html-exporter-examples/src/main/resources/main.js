var mustacheLib = require('/lib/xp/mustache');
var router = require('/lib/router')();
var helper = require('/lib/helper');
var siteTitle = 'HTML Exporter';

var renderPage = function(pageName) {
    return function() {
        return {
            body: mustacheLib.render(resolve('pages/' + pageName), {
                title: siteTitle,
                baseUrl: helper.getBaseUrl()
            })
        };
    }
};

router.get('/', function (req) {
    return {
        body: mustacheLib.render(resolve('/pages/main.html'), {
            title: siteTitle,
            appUrl: helper.getAppUrl(),
            baseUrl: helper.getBaseUrl(),
            precacheUrl: helper.getBaseUrl() + '/precache',
            themeColor: '#FFF',
            isLive: (req.mode == 'live')
        })
    }
});

router.get('/api/htmlexporter/{type}', function( req ){
    return require( "controller/htmlexport" ).get(req,  req.pathParams.type);
});


exports.get = function (req) {
    return router.dispatch(req);
};




// Log when application is stopped
__.disposer(function() {
    log.info('Application ' + app.name + ' stopped');
});

// Log application started
log.info('Application ' + app.name + ' started');
log.info("Application can be reached on basePath: /app/" + app.name);
