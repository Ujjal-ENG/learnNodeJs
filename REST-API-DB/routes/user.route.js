const {
  getAllUsers,
  createUsers,
  getOneUser,
  updateUsers,
  deleteUser,
} = require("../controllers/user.controller");

const router = require("express").Router();

router.get("/", getAllUsers);

router.get("/:id", getOneUser);

router.post("/", createUsers);

router.patch("/:id", updateUsers);
router.delete("/:id", deleteUser);

module.exports = router;
