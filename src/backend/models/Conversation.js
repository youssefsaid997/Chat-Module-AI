import mongoose, { SchemaType } from "mongoose";

const conversationSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  messages: {
    type: [],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Coversation =
  mongoose.models.Coversation ||
  mongoose.model("Coversation", conversationSchema);

export default Coversation;
