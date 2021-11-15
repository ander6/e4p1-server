import  Express  from "express";
const router = Express.Router();
import { getUserById,getAllUsers,insertData,updateData, deleteData} from "../controllers/UserController.js";
router.get('/users/',getAllUsers);
router.get('/users/:id',getUserById);
router.post('/users/',insertData);
router.put('/users/:id',updateData);
router.delete('/users/:id',deleteData);
export default router;