import {Router} from "express";
import { fetchFeedback } from "../controllers/controller";

const router = Router()

router.get('/', fetchFeedback )


export default router