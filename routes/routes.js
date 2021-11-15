import  Express  from "express";

const router = Express.Router();
import { getAllUsers, getUserById, insertUserData, updateUserData, deleteUserData } from "../controllers/UserController.js";
import { getAllGarbages, getGarbageById, insertGarbageData, updateGarbageData, deleteGarbageData } from "../controllers/GarbageController.js";

{/* USERS */}
router.get('/users/',getAllUsers);
router.get('/users/:id',getUserById);
router.post('/users/',insertUserData);
router.put('/users/:id',updateUserData);
router.delete('/users/:id',deleteUserData);

{/* GARBAGES */}
router.get('/garbages/',getAllGarbages);
router.get('/garbages/:id',getGarbageById);
router.post('/garbages/',insertGarbageData);
router.put('/garbages/:id',updateGarbageData);
router.delete('/garbages/:id',deleteGarbageData);


export default router;