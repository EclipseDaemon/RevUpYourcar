const mongoose = require("mongoose");

const carSchema = mongoose.Schema(
  {
    carModel: {
      type: String,
      required: [true, "Please Add Car Model"],
    },
    manufacturingDate: {
      type: String,
      required: [true, "Please Add Manufacturing Date"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("carsData", carSchema);
