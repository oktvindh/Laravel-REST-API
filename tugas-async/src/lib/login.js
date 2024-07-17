const fs = require("fs/promises");
const path = require("path");
const filePath = path.resolve(__dirname, "../data.json");

const login = async (name, password) => {
  const data = await fs.readFile(filePath, "utf8");
  const employees = JSON.parse(data);
  const employee = employees.find(
    (emp) => emp.name === name && emp.password === password
  );

  if (employee) {
    employee.isLogin = true;
    await fs.writeFile(filePath, JSON.stringify(employees, null, 2), "utf8");
    return "Berhasil Login";
  } else {
    throw new Error("Login gagal");
  }
};

module.exports = login;
