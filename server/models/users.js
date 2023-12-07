var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema= new Schema(
    {
        userName:{type: String, required:true, minLength:1},
        email:{type: String, required: true, minLength:1},
        passwordHash:{type: String, required: true, minLength:1},
        reputation:{type: Number, default: 0},
        signDate:{type: Date, required: true, default: new Date()},
    },
    {timestamps: true},
    {
        toObject: { getters: true },
        toJSON: { getters: true },
        
    }
);

module.exports = mongoose.model('users', UserSchema);