import  Express  from "express";

const router = Express.Router();
import { getAllUsers, getUserById, insertUserData, updateUserData, deleteUserData, updateUserStatus} from "../controllers/UserController.js";
import { getAllGarbages, getGarbageById, insertGarbageData, updateGarbageData, deleteGarbageData, updateGarbageStatus } from "../controllers/GarbageController.js";
import { verifyToken } from "../middlewares/jwt.js";
{/* USERS */}
router.get('/users/',getAllUsers);
router.get('/users/:id',getUserById);
router.post('/users/',verifyToken,insertUserData)
router.put('/users/:id',updateUserData);
router.put('/users/',updateUserStatus);
router.delete('/users/:id',deleteUserData);

{/* GARBAGES */}
router.get('/garbages/',getAllGarbages);
router.get('/garbages/:id',getGarbageById);
router.post('/garbages/',insertGarbageData);
router.put('/garbages/:id',updateGarbageData);
router.put('/garbages/',updateGarbageStatus);
router.delete('/garbages/:id',deleteGarbageData);


export default router;
