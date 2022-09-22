//abcd1234: $2b$10$JpUGy1Mz387Ab31h1wYb9e1Nej70SH6l7KyoLCuk9N65KOIXvPemq
let users = [
  {
    id: "1",
    username: "bob",
    password: "$2b$10$JpUGy1Mz387Ab31h1wYb9e1Nej70SH6l7KyoLCuk9N65KOIXvPemq",
    name: "Bob",
    email: "bob@mail.com",
    url: "https://lh3.googleusercontent.com/a-/ACNPEu-xE55P6Hi0h2BVjanv1b410Gy7OC0eCCetqitKWw=s96-c-rg-br100",
  },
];

export async function findByUsername(username) {
  return users.find((user) => user.username === username);
}

export async function findById(id) {
  return users.find((user) => user.id === id);
}

export async function createUser(user) {
  const created = { ...user, id: Date.now().toString() };
  users.push(created);
  return created.id;
}
