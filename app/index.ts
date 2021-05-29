import * as fastify from "fastify";
import routerHandler from "./routes/Routes.route";
import { DatabaseMongoDB } from "./providers/Database.provider.mongodb";
const app = fastify.default({ logger: true });
app.route({
  method: "GET",
  url: "/",
  handler: function (req, res: fastify.FastifyReply) {
    res.code(200).send("Lakjeewa backend service up and running");
  },
});


// Connect to DB
DatabaseMongoDB.init();

app.register(routerHandler,{ prefix: "api/v1" });

const start = async () => {
  try {
    await app.listen(3030,"0.0.0.0")
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}
start()