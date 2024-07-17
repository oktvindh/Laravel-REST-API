"use strict";

var fs = require("fs");
var path = require("path");
var filePath = path.resolve(__dirname, "../data.json");
var register = function register(name, password, role, callback) {
  fs.readFile(filePath, "utf8", function (err, data) {
    if (err) return callback(err);
    var employees = JSON.parse(data);
    employees.push({
      name: name,
      password: password,
      role: role,
      isLogin: false
    });
    fs.writeFile(filePath, JSON.stringify(employees, null, 2), "utf8", function (err) {
      if (err) return callback(err);
      callback(null, "Berhasil register");
    });
  });
};
module.exports = register;