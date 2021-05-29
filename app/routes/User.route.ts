import User from "../controllers/user/user.controller";
import { registerBodySchema } from "../schema-validations/user.schema";

const registerSchema = {
  body: registerBodySchema,
};

export default async function userHandler(server, options, next) {
  server.post("/register", { schema: registerSchema }, User.register);
  server.route({
    method: "GET",
    url: "/all",
    // preValidation: adminAccessAuth,
    // schema: getAllUsersSchema,
    handler: User.getAllUsers,
  });

  // server.get('/getUser', async (request, reply) => {
  //     return { fname: 'Lakjeewa' ,lname : 'Wijebandara' }
  //   });
}
