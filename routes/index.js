var config = require('../settings')
;

exports.index = function(req, res){
    res.render('index');
};

exports.partials = function (req, res) {
    if (!req.params.folder)
        res.render('partials/' + req.params.name, { layout: false });
    else
        res.render('partials/' + req.params.folder + '/' + req.params.name, { layout: false });
};
