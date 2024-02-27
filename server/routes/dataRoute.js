const router = require("express").Router();
const Data = require("../models/data");

router.get("/getData", async (req, res) => {
  let data = await Data.find();
  res.send(data);
});

router.patch("/update", async (req, res) => {
  try {
    let keys = Object.values(req.body);
    await Data.updateMany(
      { ledId: { $in: keys } },
      { $set: { status: "!ok" } },
      { multi: true }
    );

    await Data.updateMany(
      { ledId: { $nin: keys } },
      { $set: { status: "ok" } }
    );
    res.json({ success: "Updated Successfully" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Internal Server Error", details: error.message });
  }
});

// router.patch("/updateOne", async (req, res) => {
//   log
//   // try {
//   //   let keys = Object.values(req.body);
//   //   await Data.updateMany(
//   //     { ledId: { $in: keys } },
//   //     { $set: { status: "!ok" } },
//   //     { multi: true }
//   //   );
//   //   res.json({ success: "Updated Successfully" });
//   // } catch (error) {
//   //   console.error(error);
//   //   res
//   //     .status(500)
//   //     .json({ error: "Internal Server Error", details: error.message });
//   // }
// });

module.exports = router;
