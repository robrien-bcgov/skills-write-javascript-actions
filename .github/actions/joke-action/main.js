// main joke app code

const getJoke = require("./joke");
const core = require("@actions/core");

async function run() {
  try {
    const joke = await getJoke();
    core.setOutput("joke-output", joke);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
