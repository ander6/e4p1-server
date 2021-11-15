import  Mongoose  from "mongoose";
const Schema = Mongoose.Schema;

const GarbageSchema = Schema({
    location : Array,
    message : String,
    user : [{ type: Schema.Types.ObjectId, ref: 'users' }]
})
const GarbageModel = Mongoose.model('garbages',GarbageSchema);
export default GarbageModel;