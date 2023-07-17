import mongoose from "mongoose";

const NoteSchema = mongoose.Schema(
  {
    content: {
      type: String,
      required: [true, "please add your note"],
    },
    state: {
      type: Boolean,
      required: false,
      default: false,
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Note", NoteSchema);
