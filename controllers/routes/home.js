const router = require("express").Router();

router.get("/", (_, res) => {
    res.redirect("/index.html");
});

router.get("/exercise", (_, res) => {
    res.redirect("/exercise.html");
});

router.get("/stats", (_, res) => {
    res.redirect("/stats.html");
});

module.exports = router;