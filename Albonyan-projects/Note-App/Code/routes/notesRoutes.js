import express from "express";
const router = express.Router();

import {
  addNote,
  editNote,
  deleteNote,
  clearCompleted,
} from "../controllers/notesController.js";
import authenticateUser from "../middlewares/auth.js";

router.route("/add-note").post(authenticateUser, addNote);
router
  .route("/:id")
  .delete(authenticateUser, deleteNote)
  .patch(authenticateUser, editNote);
router.route("/clearCompleted").post(authenticateUser, clearCompleted);

export default router;
