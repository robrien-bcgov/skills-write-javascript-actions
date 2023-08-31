// Contents of joke.js
/**
 * request-promise library for making HTTP requests.
 * @see
 *
 * /actions/joke-action/node_modules/request-promise
 */
const request = require("request-promise");
/**
 * Options for the request-promise library.
 */
const options = {
  method: "GET",
  uri: "https://icanhazdadjoke.com/",
  headers: {
    Accept: "application/json",
    "User-Agent": "Writing JavaScript action GitHub Skills course.",
  },
  json: true,
};

// Get a joke from the Dad Jokes API
async function getJoke() {
  const res = await request(options);
  return res.joke;
}

module.exports = getJoke;
