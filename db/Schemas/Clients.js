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
  mongoose.models.Clients || mongoose.model("Clients", ClientsSchema);

const newClient = new Clients({ name: "test", email: "test@example.com" });

newClient.save();

module.exports = {
  Clients: Clients,
};
