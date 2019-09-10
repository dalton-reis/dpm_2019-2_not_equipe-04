import express from "express";
import path from "path";

import "./database";
import routes from "./routes";

class App {
  constructor() {
    this.server = express();

    this.routes();
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
