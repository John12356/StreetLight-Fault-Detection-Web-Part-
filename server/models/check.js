const mongoose = require("mongoose");

const checkSchema = new mongoose.Schema({
  myString: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("check", checkSchema);
