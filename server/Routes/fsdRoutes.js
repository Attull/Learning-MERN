import { Router } from "express";
import  {fsdController, fsdTrainerController, newFsdDataController } from "../Controllers/fsdController.js";

const fsdRoute = Router()

fsdRoute.get('/students', fsdController)
fsdRoute.get('/trainer',fsdTrainerController)
fsdRoute.post('/students', newFsdDataController)

export default fsdRoute

