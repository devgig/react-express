var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  // res.send('respond with a resource');
  res.json([
    {
      id: 1,
      username: "Geoff.Niehaus",
    },
    {
      id: 2,
      username: "Kim.Niehaus",
    },
    {
      id: 3,
      username: "Kaleb.Niehaus",
    },
    {
      id: 4,
      username: "Mikah.Niehaus",
    },
    {
      id: 5,
      username: "Isaak.Niehaus",
    },
  ]);
});

module.exports = router;
