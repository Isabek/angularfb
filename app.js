var express     = require('express')
,   expressLayouts = require('express-ejs-layouts')
,   less        = require('less-middleware')
,   routes      = require('./routes')
,   config      = require('./settings')
,   http        = require('http')
,   path        = require('path')
,   app         = express()
;

// all environments
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('layout', 'layout');
app.locals({
    appName: config.APP_NAME,
    appId: config.APP_ID,
    appUrl: config.APP_URL,
    scope: config.SCOPE,
    random: Math.random()
});
app.use(expressLayouts);
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser());
app.use(express.session({ secret: config.SECRET, maxAge: new Date(Date.now() + 3600000) }));
app.use(require('less-middleware')({
    force: true,
    dest: path.join(__dirname, 'public', 'css'),
    src:  path.join(__dirname, 'less'),
    prefix: '/static/css/'
}));
app.use('/static', express.static(path.join(__dirname, 'public')));
app.use('/static', express.static(path.join(__dirname, 'bower_components')));
app.use(app.router);

// landing page
app.get('/'                             , routes.index);
app.get('/partials/:name'               , routes.partials);
app.get('/partials/:folder/:name'       , routes.partials);
app.all(/^(\/((?!static)\w.+))+$/       , routes.index);


http.createServer(app).listen(config.PORT, function(){
  console.log('Express server listening on port ' + config.PORT);
});
