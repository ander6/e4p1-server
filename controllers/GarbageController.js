import GarbageModel from "../models/garbageModel.js";
import UserModel from "../models/userModel.js";

export const getAllGarbages = (req,res) => {
    GarbageModel.find({}, (err,garbages) => {
        if(err) return res.status(500).send({message: `Error al realizar la petición: ${err}`});
        if(!garbages) return res.status(404).send({message: `No existen garbages`});
        res.status(200).send({garbages: garbages});
    });
};
export const getGarbageById = (req,res) => {
    let garbageId = req.params.id;
    GarbageModel.findOne({_id : garbageId}, (err,garbage) => {
        if(err) return res.status(500).send({message: `Error al realizar la petición: ${err}`});
        if(!garbage) return res.status(404).send({message: `No existe ese garbage`});
        res.send({garbage: garbage});
    });
};
export const insertGarbageData = (req,res) => {
    const data = {
        location: req.body.data,
        message : "Recoger basura aquí",
        user: req.body.user
    };
    UserModel.findOne({ email: req.body.user }, (err, user) => {
        GarbageModel.create({location: {latitude: data.location.latitude, longitude: data.location.longitude, timestamp: data.location.timestamp}, message : data.message, user: [user._id]},(err,docs) =>{
            if(err) return res.status(500).send({message: `Error al realizar la petición: ${err}`});
            res.send({data: docs});
        })
    })
}
export const updateGarbageData = (req,res) => {
    const data = req.body;
    let garbageId= req.params.id;
    GarbageModel.findByIdAndUpdate(garbageId,{$set:data},{new : true},(err,docs) => {
        if(err) return res.status(500).send({message: `Error al realizar la petición: ${err}`});
        if(!docs) return res.status(404).send({message: `No existe ese garbage`});
        res.send({data: garbage});
    })
}

export const deleteGarbageData = (req,res) =>{
    let garbageId = req.params.id;
    GarbageModel.findByIdAndRemove(garbageId,(err,docs) =>{
        if(err) return res.status(500).send({message: `Error al realizar la petición: ${err}`});
        if(!docs) return res.status(404).send({message: `No existe ese garbage`});
        res.send({data: docs});
    })
}