var request;
(function (request) {
    request[request["createData"] = 3] = "createData";
    request[request["saveData"] = 4] = "saveData";
    request[request["deleteData"] = 1] = "deleteData";
})(request || (request = {}));
console.log(request);
var request2;
(function (request2) {
    request2["createData"] = "A";
    request2["saveData"] = "B";
    request2["deleteData"] = "C";
})(request2 || (request2 = {}));
console.log(request2.createData);
