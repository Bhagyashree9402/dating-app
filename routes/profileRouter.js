const router = require("express").Router();
const auth = require("../middleware/auth");
let db = require("../models/profileModel");
require("dotenv").config();

router.get("/test", (req, res) => {
  res.send("profileRouter successfully connected");
});

router.get("/all", (req, res) => {
  db.Profile.find().then((profiles) => res.send(profiles));
});

router.get("/find/:id", (req, res) => {
  db.Profile.findById(req.params.id).then((profile) => res.send(profile));
});

router.get("/discover", (req, res) => {
  db.Profile.find().then((profiles) => res.send(profiles));
});

router.get("/likes",(req, res) => {
  likesDb.LikesModel.find().then((likes) => res.send(likes));
});

router.post("/newlikes",(req, res) => {
  likesDb.LikesModel.create(req.body).then((likes) => res.send(likes));
});
router.delete("/remove/:id", (req, res) => {
  db.Profile.findByIdAndRemove(req.params.id).then(() => res.send("success"));
});

router.post("/new", (req, res) => {
  db.Profile.create(req.body).then((profile) => res.send(profile));
});

router.patch("/edit/:id", (req, res) => {
  db.Profile.findByIdAndUpdate(req.params.id, req.body).then((result) =>
    res.send(result)
  );
});

// router.post("/", auth, async (req, res) => {
//   try {
//     const { title } = req.body;

//     if (!title)
//       return res.status(400).json({ msg: "Not all fields have been entered." });

//     const newTodo = new Todo({
//       title,
//       userId: req.user,
//     });
//     const savedTodo = await newTodo.save();
//     res.json(savedTodo);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// router.get;

module.exports = router;
