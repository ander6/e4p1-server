import  Express  from "express";

const router = Express.Router();
import { getUserById, getAllUsers, insertData, updateData, deleteData} from "../controllers/UserController.js";
import { getAllGarbages} from "../controllers/GarbageController.js";
router.get('/users/',getAllUsers);
router.get('/users/:id',getUserById);
router.post('/users/',insertData);
router.put('/users/:id',updateData);
router.delete('/users/:id',deleteData);

router.get('/garbages/',getAllGarbages);


export default router;