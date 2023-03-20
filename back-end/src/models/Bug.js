const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bugSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      unique: true,
    },
    description: String,
    priority: {
      type: String, // [Low, Medium, High]
      enum: ["low", "medium", "high"],
      required: true,
      message: "{Value} is not valid",
    },
    deadline: {
      type: Number,
      required: true,
    },
    status: {
      type: String, // [Low, Medium, High]
      enum: ["pending", "in-progress", "completed"],
      default: "pending",
      required: true,
      message: "{Value} is not valid",
    },
    assigned_to: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    _creator: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Bug", bugSchema);
