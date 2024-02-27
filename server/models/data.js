const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  co_ordinates: {
    type: String,
    required: true,
  },
  ledId: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  src: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("datas", dataSchema);
