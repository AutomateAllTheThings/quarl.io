import express from "express";
import routes from "../configuration/routes.json";
import path from "path";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

module.exports = (gulp, plugins) => {
  gulp.task("serve", callback => {
    routes.forEach(route => {
      const method = route.method.toLowerCase()

      app[method].call(app, route.path, async (request, response) => {
        let handler;
        if (route.function) {
          const relativePath = path.join("../", route.function);
          handler = require(relativePath).default;
        }

        const handlerResponse = await handler(request.params, request.body);
        response.json(handlerResponse);
      });
    });
    app.listen(3030, callback);
  });
};
