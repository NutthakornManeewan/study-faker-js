const faker = require("faker");
const randomInt = require("./functions/randomInt");
const projectKeyword = require("./functions/projectKeyword");
const roleRandom = require("./functions/roleRandom");
const refUrls = require("./functions/referenceMethod");
const fakeUpdateProject = require("./FakeComponent/fakeUpdateProject");
faker.seed(Date.now());

let update_payload = fakeUpdateProject();
const fakeCreateProject = {
    project_name: faker.commerce.productName(),
    role_level: roleRandom(),
    project_description: randomInt(2) ? faker.lorem.sentences() : "",
    project_keyword: randomInt(2) ? projectKeyword(randomInt(6)) : "",
    reference_methodUrl: randomInt(2) ? refUrls(randomInt(6)) : "",
    project_source: randomInt(2) ? faker.lorem.text() : "",
    research_area: randomInt(2) ? faker.name.jobArea() : "",
    video_url: randomInt(2) ? faker.internet.url() : "",
};

console.log("create-project >>>", fakeCreateProject);
console.log("update-project >>>", update_payload);
