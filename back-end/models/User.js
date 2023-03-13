const mongoose = require("mongoose"); // directly import schema

const Schema = mongoose.Schema;
const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: Number, // [Developer, QA,Manager]
    required: true,
  },
});
module.exports = mongoose.model("User", userSchema);
// model will saved as users as plural
