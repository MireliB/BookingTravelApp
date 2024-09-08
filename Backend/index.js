const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error(err));

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  booking: [{ type: mongoose.Schema.Types.ObjectId, ref: "Booking" }],
});

const User = mongoose.model("User", userSchema);

module.exports = User;

app.listen(process.env.PORT, () => {
  console.log(`Server is listening to ${process.env.PORT}`);
});
