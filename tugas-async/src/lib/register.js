const fs = require("fs");
const path = require("path");
const filePath = path.resolve(__dirname, "../data.json");

const register = (name, password, role, callback) => {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) return callback(err);

    const employees = JSON.parse(data);
    employees.push({ name, password, role, isLogin: false });

    fs.writeFile(
      filePath,
      JSON.stringify(employees, null, 2),
      "utf8",
      (err) => {
        if (err) return callback(err);
        callback(null, "Berhasil register");
      }
    );
  });
};

module.exports = register;
