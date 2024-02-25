const router = require("express").Router();
const Admin = require("../models/user");

//login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await Admin.findOne({ email: email });
    if (!user) return res.status(401).json("Wrong email");
    // !user && res.status(401).json("Wrong email");

    const isValid = user.password === password;
    if (!isValid) return res.status(401).json("Wrong password");
    // !isValid && res.status(401).json("Wrong password");

    res.status(200).json(user.email);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
