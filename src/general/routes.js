const express = require('express');

const controller = require('./controller/index');

const router = express.Router();

router.get("/epidemic-tracker/hello/:message", (req, res) => {
  const { message } = req.params;
  console.log(message);
  res.send(controller.sendMessage(message));
});

router.get("/", (req, res) => {

  console.log("message");
});

module.exports = router;