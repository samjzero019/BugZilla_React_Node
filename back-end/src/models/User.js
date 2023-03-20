const mongoose = require("mongoose"); // directly import schema

const Schema = mongoose.Schema;
const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      min: [6, "Must be at least 6, got {VALUE}"],
      required: true,
    },
    role: {
      type: String, // {Developer, QA,Manager}
      enum: ["developer", "qa", "manager"],
      default: "developer",
      lowercase: true,
      trim: true,
      required: true,
      message: "{Value} is not valid ROLE",
    },
    bugs: [{ type: Schema.Types.ObjectId, ref: "Bug" }], //todo:  remove it .. it hold no value for now as role data is fetched by conditions
  },
  { timestamps: true }
);
module.exports = mongoose.model("User", userSchema);
// model will saved as users as plural
