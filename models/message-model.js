const mongoose = require("mongoose");
require('mongoose-type-email');
const Schema = mongoose.Schema;

let messageSchema = new Schema(
  {
    contact_name: {
      type: String,
      required: true,
    },
    contact_email: {
      type: mongoose.SchemaTypes.Email,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Message", messageSchema);
