const router = require("express").Router();
const Data = require("../models/data");

router.get("/getData", async (req, res) => {
  let data = await Data.find();
  res.send(data);
});

module.exports = router;
