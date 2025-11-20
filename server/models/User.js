import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      select: false, // Don't send password in queries by default
    },
    googleId: { type: String },
    avatar: {
      type: String,
    },
    isVerified: { type: Boolean, default: false },
    isLoggedIn: { type: Boolean, default: false },
    role: {
      type: String,
      enum: ["student", "admin"],
      default: "student",
    },
    // (From your notes)
    college: {
      type: String,
    },
    branch: {
      type: String,
    },
    socials: {
      linkedin: String,
      github: String,
      twitter: String,
    },
    enrolledCourses: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
      },
    ],
  },
  {
    timestamps: true,
  }
);

// --- Hooks ---
// Hash password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// --- Methods ---
// Method to compare entered password with hashed password
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model("User", userSchema);
export default User;
