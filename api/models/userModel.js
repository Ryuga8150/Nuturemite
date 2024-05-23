const mongoose = require("mongoose");
const bcryptJS = require("bcryptjs");
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "A User must have a name"],
      unique: true,
    },
    email: {
      type: String,
      required: [true, "A User must have an email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "A User must have a password"],
    },
    userType: {
      type: String,
      enum: ["customer", "vendor"],
      default: "customer",
    },
    address: {
      street: String,
      city: String,
      state: String,
      country: String,
      zip: String,
    },
    phone: String,
    orders: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Order",
      },
    ],
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  this.password = await bcryptJS.hashSync(this.password, 12);
  console.log("Password hashed");
  next();
});

userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcryptJS.compareSync(candidatePassword, userPassword);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
