const mongoose = require("mongoose");

const ClientsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

const Clients =
  mongoose.models.Customers || mongoose.model("Customers", ClientsSchema);


module.exports = {
  Clients: Clients,
};
