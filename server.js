const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");

let users = require("./mock/user.json");
let server = express();
server.use(bodyParser.json());
server.use(morgan("dev"));
server.use(cors());

//get user data
server.get("/user", function (req, res, next) {
  return res.status(200).json({
    code: 1,
    message: "Ok",
    data: users,
  });
});

//Post method
server.post("/user", function (req, res, next) {
  let user = {};
  user.id = users.length + 1;
  user.name = req.body.name;
  user.age = Number(req.body.age);
  user.movie = req.body.movie;
  users.push(user);
  console.log("Users :", user.name, "created!");
  return res.status(201).json({
    code: 1,
    message: "Ok",
    data: users,
  });
});

//Put method
server.put("/user", function (req, res, next) {
  const replaceId = req.body.id; //รับค่าจาก param url
  const position = users.findIndex(function (val) {
    return val.id == replaceId;
  });
  console.log(users[position]);
  users[position].name = req.body.name; //กำหนด name ใหม่จาก req.body ที่รับมา
  users[position].age = Number(req.body.age);
  users[position].movie = req.body.movie;
  return res.status(200).json({
    code: 1,
    message: "Ok",
    data: users,
  });
});

//Delete method
server.delete("/user/:id", function (req, res, next) {
  const removeId = req.body.id;
  const position = users.findIndex(function (val) {
    return val.id === removeId;
  });
  users.splice(position, 1);
  return res.status(200).json({
    code: 1,
    message: "Ok",
    data: users,
  });
});

server.listen(3000, function () {
  console.log("Server running on POST 3000");
  console.log("User data", users);
});
