const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const Room = require("./Models/room");
const app = express();
app.use(cors());

app.get("/", async (req, res) => {
  room
    .insertMany([
      {
        room: "자바스크립트 단톡방",
        members: [],
      },
      {
        room: "리액트 단톡방",
        members: [],
      },
      {
        room: "Node.js 단톡방",
        members: [],
      },
    ])
    .then(() => res.send("ok"))
    .catch((error) => res.send(error));
});
app.get("/rooms", async (req, res) => {
  const rooms = await Room.find();
  res.json(rooms);
});
mongoose
  .connect(process.env.DB)
  .then(() => console.log("connected to database"))
  .catch((err) => console.error("connection error:", err));

module.exports = app;
