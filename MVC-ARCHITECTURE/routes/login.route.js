const express = require("express");
const { getlogindata, savelogindata } = require("../controllers/login.controller");

const router = express.Router();

router.get("/login", getlogindata);

router.post("/login", savelogindata);

module.exports = router;
