var config = require('../settings')
,   graph
;

exports.index = function(req, res){
    var graph, objectId
    if (req.query.fb_object_id) {
        res.redirect('/object/'+req.query.fb_object_id);
        return;
    }
    res.render('index');
};

exports.getObject = function(req, res, next){
    var FBObject = require('../models/object');
    console.log(req.params);

    FBObject.findOne({id:req.params.id}, function(err, object){
        err || res.render('index', {metaData: object}) || console.log("Object:", object);
        err && console.log("route getObject error:", err);
    })
//    graph = require('fbgraph');
//    graph.get(req.params.id, function(error, response){
//        var metaData;
//
//        if (!error) {
//            metaData = response;
//            console.log(response);
//        } else {
//            console.log(error);
//            //res.redirect('/404');
//        }
//        res.render('index', { metaData: metaData })
//    })
}


exports.partials = function (req, res) {
    if (!req.params.folder)
        res.render('partials/' + req.params.name, { layout: false });
    else
        res.render('partials/' + req.params.folder + '/' + req.params.name, { layout: false });
};

//
//exports.auth = function(req, res){
//    if (req.session.access_token) {
//        res.redirect('/');
//        return;
//    }
//
//    if (!req.query.code) {
//        res.render('auth', { layout: false });
//        return;
//    } else {
//        graph = require('fbgraph');
//        graph.authorize({
//            'client_id': config.APP_ID,
//            'redirect_uri': config.APP_URL + '/auth',
//            'client_secret': config.APP_SECRET,
//            'code': req.query.code
//        }, function (err, fbRes) {
//            req.session.access_token = fbRes.access_token;
//            res.redirect('/');
//        });
//    }
//}
