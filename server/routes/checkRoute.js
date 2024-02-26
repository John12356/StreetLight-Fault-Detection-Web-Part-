const router = require("express").Router();
const Check = require("../models/check");

//check
router.post("./checkPost", async (req, res) => {
  console.log(req.body);
  const data = req.body;
  const newData = new Check(data);
  await newData.save();
  res.json({ success: "Posted Successfully" });
});

module.exports = router;
