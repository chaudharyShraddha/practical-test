const mongoose = require("mongoose");

const { Schema } = mongoose;

const LeaveSchema = new Schema(
  {
    type: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    reason: {
      type: String,
      required: true,
    },
    employee_id: {
      type: Schema.Types.ObjectId,
      ref: "employee",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("leaves", LeaveSchema);
