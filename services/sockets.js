import UserModel from "../models/userModel.js";


export const userSocket = () => {
    UserModel.find({rol:"user"}, (err, users) => {
        if (err) return {err}
        if (!users) return console.log("no existen users")
        return users
    });
}