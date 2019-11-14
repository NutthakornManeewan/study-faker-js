const faker = require("faker");
faker.seed(Date.now());
const fakeUpdateProject = require("./FakeComponent/fakeUpdateProject");
const fakeCreateProject = require("./FakeComponent/fakeCreateProject");

const update_payload = fakeUpdateProject();
const create_payload = fakeCreateProject();

console.log("create-project >>>", create_payload);
console.log("update-project >>>", update_payload);
