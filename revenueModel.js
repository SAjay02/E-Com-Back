const mongoose=require("mongoose");
const revenueScheme=mongoose.Schema({
    Time:{
        type:String,
        required:false
    },
    Amount:{
        type:String,
        required:false
    }
});

const Revenue = mongoose.model('totalrevenue', revenueScheme);
module.exports = Revenue;