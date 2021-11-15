import  Mongoose  from "mongoose";
const Schema = Mongoose.Schema;

const UserSchema = Schema({
    id : Number,
    title : String,
    price : Number,
    Description : String
})
const UserModel = Mongoose.model('users',UserSchema);
export default UserModel;