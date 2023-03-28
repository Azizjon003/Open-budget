const mongoose = require("mongoose");
const phoneSchema = new mongoose.Schema(
  {
    phone: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Phone = mongoose.model("Phone", phoneSchema);
module.exports = Phone;
