var moduleToLoad = "client";

var args = process.argv;

if (args[2] === "generate") {
  moduleToLoad = "server";
}

var requiredModule = require("./webpack-configs/" + moduleToLoad + ".js");

module.exports = requiredModule;