const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  telegramId: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
  active: {
    type: Boolean,
    default: true,
  },
  wallet: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Payment",
  },
  phone: {
    type: String,
  },
  catpcha: {
    type: String,
  },
  otpKey: {
    type: String,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
