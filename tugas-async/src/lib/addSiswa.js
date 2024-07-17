const fs = require("fs/promises");
const path = require("path");
const filePath = path.resolve(__dirname, "../data.json");

const addSiswa = async (studentName, trainerName) => {
  const data = await fs.readFile(filePath, "utf8");
  const employees = JSON.parse(data);

  const admin = employees.find((emp) => emp.isLogin && emp.role === "admin");
  if (!admin) throw new Error("Hanya admin yang dapat menambahkan siswa");

  const trainer = employees.find(
    (emp) => emp.name === trainerName && emp.role === "trainer"
  );
  if (!trainer) throw new Error("Trainer tidak ditemukan");

  if (!trainer.students) trainer.students = [];
  trainer.students.push({ name: studentName });

  await fs.writeFile(filePath, JSON.stringify(employees, null, 2), "utf8");
  return "Berhasil add siswa";
};

module.exports = addSiswa;
