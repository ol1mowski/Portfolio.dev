const mongoose = require("mongoose");

const opinionsSchema = new mongoose.Schema({
  opinions: [
    {
      content: {
        type: String,
      },
      link: {
        type: String,
      },
      companyImage: {
        type: String,
      },
      companyName: {
        type: String,
      },
    },
  ],
});

const opinions =
  mongoose.models.opinions || mongoose.model("opinions", opinionsSchema);

module.exports = {
  opinions: opinions,
};
