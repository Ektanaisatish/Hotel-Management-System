const mongoose = require('mongoose');
const roomschema = mongoose.Schema({
    menuName : {
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    }
}
)
const roomModel = mongoose.model('fooditems',roomschema) 
module.exports = roomModel  