import  Mongoose  from "mongoose";
const Schema = Mongoose.Schema;

const UserSchema = Schema({
    name : String,
    email : String,
    rol : String,
    login_status : Boolean
})
const UserModel = Mongoose.model('users',UserSchema);
export default UserModel;