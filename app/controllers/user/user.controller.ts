import UserModel from "../../models/user.model";
import { IUser } from "../../interfaces/user.interface";
import { FastifyRequest, FastifyReply } from "fastify";
class User {
  async register(req, res: FastifyReply) {
    try {
      console.info("user/register", req.body);

      const new_user: IUser = {
        fName: req.body.fName,
        lName: req.body.lName,
        jwtToken: req.body.jwtToken,
      };

      let result = await UserModel.create(new_user);

      res.code(201).send({
        success: true,
        data: result,
        message: "Successfully Added",
      });
    } catch (err) {
      console.error("user/register", err);
      res.code(500).send({
        success: false,
        data: null,
        message: "Failed",
        error: err,
      });
    }
  }
  async getAllUsers(req, res: FastifyReply) {
    console.info("user/all", req.query);
    try {
      const all_users: any = await UserModel.find();
      res.code(200).send({
        success: true,
        data: all_users,
        message: "Successfully retrive",
      });
    } catch (error) {
      console.error("user/all", error);
      res.code(500).send({
        success: false,
        data: null,
        message: "Failed",
        error: error,
      });
    }
  }
}

export default new User();
