var graph       = require('fbgraph')
,   config      = require('../settings')
;

//exports.getObject = function(req, res, next){
//    var Object = require('../models/object');
//    console.log(req.params);
//    Object.findById(req.params.id, function(err, object){
//        err || res.send(object) || console.log('Got object:', object);
//        err && res.send(err) && console.log('Getting object Error:', err);
//    })
//}
//
//exports.createObject = function(req, res, next){
//    var Object = require('../models/object')
//    console.log("params", req.body );
//    Object.create(req.body, function(err, object){
//
//        if (err) {
//            console.log('Creating object error:', err);
//            res.render(err)
//        } else {
//            console.log('Created object:', object);
//            res.render(object);
//        }
//    })
//}
//
//exports.object = function(req, res) {
//
//}
//
//exports.objects = function(req, res){
//    var FBObject = require('../models/object')
//    console.log(req.method);
//    switch (req.method) {
//        case 'GET':
//            FBObject.find({}, function(err, objects){
//                if (!err) {
//                    res.send(objects);
//                } else {
//                    res.send(err);
//                }
//            })
//        break;
//
//        case 'POST':
//            if (typeof req.body === 'object') {
//                console.log("POST: create Object Params", req.body );
//                FBObject.create(req.body, function(err, object){
//                    if (err) {
//                        console.log('Creating object error:', err);
//                        res.send(err)
//                    } else {
//                        console.log('Created object:', object);
//                        res.send(object);
//                    }
//                })
//            }
//        break;
//
//        default:
//            res.send({})
//        break;
//    }
//}


//exports.checkAuth = function(req, res, next) {
//    if (!req.session.access_token) {
//        res.redirect('/auth')
//        return;
//    } else {
//        next();
//    }
//}
//
//
//exports.getAuthUrl = function(){
//    return graph.getOauthUrl({
//        'client_id': config.APP_ID,
//        'redirect_uri': config.APP_URL + '/auth',
//        'scope': config.SCOPE
//    });
//}
//exports.friends = {
//    getAll: function(req, res){
//        graph.setAccessToken(req.session.access_token)
//            .setOptions({
//                timeout: 3000,
//                pool: { maxSockets: Infinity },
//                headers: {connection: 'keep-alive'}
//            })
//            .get('/me/friends?fields=picture,first_name,last_name', function(err, fbRes) {
//                res.send({friends: fbRes});
//            });
//    }
//}