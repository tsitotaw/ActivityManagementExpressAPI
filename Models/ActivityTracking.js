const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const activityTrackingScema = new Schema(
  {
    title: String,
    typeId: String,
    categoryId: String,
    details: [
      {
        subcategoryId: String,
        quantity: Number,
        trackingDate: Date,
        beneficiary: String,
      },
    ],
  },
  { timestamps: true }
);

const ActivityTraking = mongoose.model(
  "ActivityTraking",
  activityTrackingScema
);

module.exports = ActivityTraking;
