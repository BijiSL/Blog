const mongoose=require('mongoose');
const UserSchema=mongoose.Schema({
    email:String,
password:String,
phonenumber:String
});

const UserData=mongoose.model('userdata',UserSchema);
module.exports=UserData;