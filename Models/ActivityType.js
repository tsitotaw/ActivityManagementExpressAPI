const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const activityTypeScema = new Schema(
  {
    name: String,
    code: String,
    categories: [
      {
        name: String,
        code: String,
        subcategories: [
          {
            name: String,
            code: String,
            uom: String,
          },
        ],
      },
    ],
  },
  { timestamps: true }
);

const ActivityType = mongoose.model("ActivityType", activityTypeScema);

module.exports = ActivityType;
