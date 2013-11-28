// don't think it's needed anymore.

var mongoose = require('mongoose')
,   Schema = mongoose.Schema
;

var objectSchema = new Schema({
    id: { type: Number, required: true },
    type: { type: String, required: true },
    title: { type: String, default: false, required: true },
    locale: { type: String, default: false },
    description: { type: String, default: false },
    url: { type: String, required: true },
    app_id: Number
});

module.exports = mongoose.model('Object', objectSchema);