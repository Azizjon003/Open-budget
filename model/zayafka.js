const mongoose = require("mongoose");
const zayafkaSchema = new mongoose.Schema(
  {
    phone: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    active: {
      type: String,
      enum: ["begin", "cancel", "bajarildi"],
      default: "begin",
    },
  },
  {
    timestamps: true,
  }
);

const Zayafka = mongoose.model("Zayafka", zayafkaSchema);

module.exports = Zayafka;
