import GarbageModel from "../models/garbageModel.js";
export const getAllGarbages = (req,res) => {
    GarbageModel.find({}, (err,garbages) => {
        if(err) return res.status(500).send({message: `Error al realizar la petición: ${err}`});
        if(!garbages) return res.status(404).send({message: `No existen garbages`});
        res.status(200).send({garbages: garbages});
    });
};