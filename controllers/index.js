const router = require("express").Router();

const apiRoutes = require("./routes/api");
const homeRoutes = require("./routes/home");

router.use("/", homeRoutes);
router.use("/api/workouts", apiRoutes);

module.exports = router;