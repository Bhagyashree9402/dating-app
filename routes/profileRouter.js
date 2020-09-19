const router = require("express").Router();
const auth = require("../middleware/auth");
let db = require("../models/profileModel");
let likesDb = require("../models/likesModel");
require("dotenv").config();

router.get("/test", (req, res) => {
  res.send("profileRouter successfully connected");
});

router.get("/all", (req, res) => {
  db.Profile.find().then((profiles) => res.send(profiles));
});

router.get("/find", auth, (req, res) => {
  console.log(req.user);
  db.Profile.findById(req.user)
    .then((profile) => {
      console.log(profile);
      res.send(profile);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("db err");
    });
});

router.get("/findProfile/:id", (req, res) => {
  db.Profile.findById(req.params.id).then((profile) => res.send(profile));
});

router.get("/discover", (req, res) => {
  db.Profile.find().then((profiles) => res.send(profiles));
});

router.get("/likes", auth, (req, res) => {
  db.Profile.findById(req.user)
    .select("likes")
    .populate({ path: "likes", select: "-likes -__v" })
    .then((likes) => {
      console.log(likes);
      res.json(likes);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("db err");
    });
  //likesDb.LikesModel.find().then((likes) => res.send(likes));
});

router.post("/newlikes", auth, (req, res) => {
  db.Profile.findByIdAndUpdate(
    req.user,
    { $push: { likes: req.body.id } },
    { new: true, upsert: true }
  ).then((likes) => {
    console.log(likes);
    res.json(likes);
  });
  //likesDb.LikesModel.create(req.body).the:n((likes) => res.send(likes));
});
router.delete("/remove/:id", (req, res) => {
  db.Profile.findByIdAndRemove(req.params.id).then(() => res.send("success"));
});

router.post("/new", auth, (req, res) => {
  console.log(req.user);
  console.log(req.body);
  req.body._id = req.user;
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
