import Note from "../models/Note.js";
import {
  BadRequestError,
  NotFoundError,
  UnAuthenticatedError,
} from "../errors/index.js";
import { StatusCodes } from "http-status-codes";

const getAllNotes = async (req, res) => {
  let notes = await Note.find({ createdBy: req.user.userId })
    .sort("-state")
    .sort("+createAt");

  const active = await Note.countDocuments({
    state: false,
    createdBy: req.user.userId,
  });

  res.status(StatusCodes.OK).json({ notes, active });
};

const addNote = async (req, res) => {
  const { content, state } = req.body;
  if (!content) {
    throw new BadRequestError("please enter note");
  }

  await Note.create({
    content,
    state,
    createdBy: req.user.userId,
  });

  await getAllNotes(req, res);
};

const editNote = async (req, res) => {
  const { state } = req.body;
  const { id: noteId } = req.params;

  const note = await Note.findOne({ _id: noteId });
  if (!note) {
    throw new NotFoundError(`Nothing Found Note With Id${noteId}`);
  }

  if (req.user.userId !== note.createdBy.toString()) {
    throw new UnAuthenticatedError("Not Authorized To Edit");
  }

  note.state = state;
  await note.save();
  await getAllNotes(req, res);
};

const deleteNote = async (req, res) => {
  const { id: noteId } = req.params;

  const note = await Note.findOne({ _id: noteId });
  if (!note) {
    throw new NotFoundError(`Nothing Found Note With Id${noteId}`);
  }

  if (req.user.userId !== note.createdBy.toString()) {
    throw new UnAuthenticatedError("Not Authorized To Edit");
  }

  await Note.deleteOne({ _id: noteId });
  await getAllNotes(req, res);
};
const clearCompleted = async (req, res) => {
  await Note.deleteMany({ createdBy: req.user.userId, state: true });
  await getAllNotes(req, res);
};

export { getAllNotes, addNote, editNote, deleteNote, clearCompleted };
