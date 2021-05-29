import UserRouter from "./User.route";
export default function routerHandler(server, options, next) {
    server.register(UserRouter,{ prefix: "/user" });
    next();
  }