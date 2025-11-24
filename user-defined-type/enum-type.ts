enum request {
  createData = 3,
  saveData = 4,
  deleteData = 1,
}
console.log(request);

enum request2 {
  createData = "A",
  saveData = "B",
  deleteData = "C",
}
console.log(request2.createData);
