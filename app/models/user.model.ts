import mongoose from "mongoose";
import { IUser } from "../interfaces/user.interface";

export interface IUserModel extends IUser, mongoose.Document {}

export const UserSchema = new mongoose.Schema({
    customerId: {
        type: String,
        unique: true,
      },
  fName: { type: String },
  lName: { type: String },
  jwtToken: { type: String },
});

const User = mongoose.model<IUserModel>("User", UserSchema);

export default User;
