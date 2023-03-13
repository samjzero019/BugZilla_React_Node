const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bugSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  description: String,
  priority: {
    type: Number, // [Low, Medium, High]
    required: true,
  },
  estimated_days: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Bug", bugSchema);
