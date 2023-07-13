const mongoose = require('mongoose');


const EmpSchema = mongoose.Schema({
    FirstName: {type:String},
    LastName: {type:String},
    Email: {type:String},
    Department:{type:String},
    Salary:{type:Number},
    userid:{type:String}
},{
    versionKey: false,
})


const EmpModal = mongoose.model('Employee',EmpSchema)


module.exports = {EmpModal}