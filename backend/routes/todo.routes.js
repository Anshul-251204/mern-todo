import { Router } from "express";
import { addTodo, deleteTodo, getTodo, isDone } from "../controllers/todo.controllers.js";

const router = Router();

router.route("/todo")
    .post(addTodo)
    .get(getTodo)
  
router.route("/todo/:_id")
	.delete(deleteTodo);

router.route("/complete")
    .put(isDone)

export default router;
