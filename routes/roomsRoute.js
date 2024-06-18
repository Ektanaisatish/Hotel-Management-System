const express = require("express");
const router = express.Router();
const Rooms = require("../models/room");

router.get("/rooms", async (req, res) => {
  try {
    const rooms = await Rooms.find();
    res.json(rooms);
  } catch (error) {
    res.status(400).json({ message: error });
  }
});
module.exports = router;
