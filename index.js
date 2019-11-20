const faker = require("faker");
faker.seed(Date.now());
const fakeUpdateProject = require("./FakeComponent/fakeUpdateProject");
const fakeCreateProject = require("./FakeComponent/fakeCreateProject");
const fakeCreateUser = require("./FakeComponent/fakeCreateUser");

const update_payload = fakeUpdateProject();
const create_payload = fakeCreateProject();
const user_create_payload = fakeCreateUser();

// console.log("create-project >>>", create_payload);
// console.log("update-project >>>", update_payload);
console.log(create_payload);
