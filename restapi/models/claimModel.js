const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    // status: {
    //   type: Boolean,
    //   default: false,
    // },
    policyID: {
      type: Number,
      required: true,
    },
    //   ,
    //   lastname: {
    //     type: Boolean,
    //     default: false,
    //   },
    //   email: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Policy",
    //   },

    _id: {
      type: String,
      required: true,
    },

    // firstname: {
    //     type: String,
    //     required: true
    // },
    // lastname: {
    //     type: String,
    //     required: true
    // },
    // email: {
    //     type: String,
    //     required: true
    // },
    // city: {
    //     type: String,
    //     required: true
    // },
    // age: {
    //     type: Number,
    //     required: true
    // }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Claim", userSchema, "Claims");
