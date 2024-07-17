const register = require("./lib/register");

const [, , command, ...args] = process.argv;

if (command === "register") {
  const [name, password, role] = args[0].split(",");
  register(name, password, role, (err, message) => {
    if (err) console.error(err);
    else console.log(message);
  });
}

const login = require("./lib/login");

if (command === "login") {
  const [name, password] = args[0].split(",");
  login(name, password)
    .then((message) => console.log(message))
    .catch((err) => console.error(err.message));
}

const addSiswa = require("./lib/addSiswa");

if (command === "addSiswa") {
  const [studentName, trainerName] = args[0].split(",");
  addSiswa(studentName, trainerName)
    .then((message) => console.log(message))
    .catch((err) => console.error(err.message));
}
