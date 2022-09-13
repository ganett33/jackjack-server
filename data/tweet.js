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

export function getAll() {
  return tweets;
}

export function getAllByUsername(username) {
  return tweets.filter((tweet) => tweet.username == username);
}

export function getByid(id) {
  return tweets.find((tweet) => tweet.id == id);
}

export function create(text, name, username) {
  const tweet = {
    id: Date.now().toString(),
    text,
    createdAt: new Date(),
    name,
    username,
  };
  tweets = [tweet, ...tweets];

  return tweet;
}

export function update(id, text) {
  const tweet = tweets.find((tweet) => tweet.id === id);
  if (tweet) {
    tweet.text = text;
  }
  return tweet;
}

export function remove(id) {
  tweets = tweets.filter((tweet) => tweet.id !== id);
}