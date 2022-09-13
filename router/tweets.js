import express from "express";
import "express-async-errors";

let tweets = [
  {
    id: "1",
    text: "Go keep going!!",
    createdAt: Date.now().toString,
    name: "Bob",
    username: "bob",
    url: "https://yt3.ggpht.com/yti/AJo0G0mw0mwX98tJh6MFGi2hNYzi-TOHuSucQGc6vj8tEA=s108-c-k-c0x00ffffff-no-rj",
  },

  {
    id: "2",
    text: "Hello",
    createdAt: Date.now().toString,
    name: "Peter",
    username: "pete",
  },
];
const router = express.Router();

// GET /tweets
// GET /tweets?username=:username

router.get("/", (req, res, next) => {
  const username = req.query.username;
  const data = username
    ? tweets.filter((tweet) => tweet.username === username)
    : tweets;
  res.status(200).json(data);
});

// GET /tweets/:id
router.get("/:id", (req, res, next) => {
  const id = req.params.id;
  const tweet = tweets.find((tweet) => tweet.id == id);
  if (tweet) {
    res.status(200).json(tweet);
  } else {
    res.status(404).json({ message: `Tweets id(${id}) not found` });
  }
});

// POST /tweets
router.post("/", (req, res, next) => {
  const { text, username, name } = req.body;
  const tweet = {
    id: Date.now().toString(),
    text,
    createdAt: new Date(),
    name,
    username,
  };
  tweets = [tweet, ...tweets];
  res.status(201).json();
});

// PUT /tweets/:id
router.put("/:id", (req, res, next) => {
  const id = req.params.id;
  const text = req.body.text;
  const tweet = tweets.find((tweet) => tweet.id === id);
  if (tweet) {
    tweet.text = text;
    res.status(200).json(tweet);
  } else {
    res.status(404).json({ message: `Tweets id(${id}) not found` });
  }
});
// DELETE /tweets/:id
router.delete("/:id", (req, res, next) => {
  const id = req.params.id;
  tweets = tweets.filter((tweet) => tweet.id !== id);
  res.sendStatus(204);
});

export default router;
