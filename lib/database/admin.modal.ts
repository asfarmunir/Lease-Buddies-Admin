import { Schema,model,models } from "mongoose";

const adminSchema = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: false },
    role: { type: String, required: true, default: "admin" },
    resetToken: { type: String, required: false },
    resetTokenExpiry: { type: Date, required: false },
  },
  { timestamps: true }
);

const Admin = models.Admin || model("Admin", adminSchema);

export default Admin;