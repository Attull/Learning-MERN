import { Router } from "express";
import  {fsdController, fsdTrainerController } from "../Controllers/fsdController.js";

const fsdRoute = Router()

fsdRoute.get('/students', fsdController)
fsdRoute.get('/trainer',fsdTrainerController)

export default fsdRoute

