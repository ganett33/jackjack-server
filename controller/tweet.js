import * as tweetRepository from "../data/tweet.js";

export function getTweets(req, res) {
  const username = req.query.username;
  const data = username
    ? tweetRepository.getAllByUsername(username)
    : tweetRepository.getAll();
  res.status(200).json(data);
}

export function getTweet(req, res, next) {
  const id = req.params.id;
  const tweet = tweetRepository.getByid(id);
  if (tweet) {
    res.status(200).json(tweet);
  } else {
    res.status(404).json({ message: `Tweets id(${id}) not found` });
  }
}

export function createTweet(req, res, next) {
  const { text, username, name } = req.body;
  const tweet = tweetRepository.create();
  res.status(201).json();
}

export function updateTweet(req, res, next) {
  const id = req.params.id;
  const text = req.body.text;
  const tweet = tweetRepository.update(id, text);
  if (tweet) {
    tweet.text = text;
    res.status(200).json(tweet);
  } else {
    res.status(404).json({ message: `Tweets id(${id}) not found` });
  }
}

export function deleteTweet(req, res, next) {
  const id = req.params.id;
  tweetRepository.remove(id);
  res.sendStatus(204);
}
