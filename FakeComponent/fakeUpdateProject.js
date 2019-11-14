const faker = require("faker");
const refUrls = require("../functions/referenceMethod");
const randomInt = require("../functions/randomInt");
const projectKeyword = require("../functions/projectKeyword");
const roleRandom = require("../functions/roleRandom");

const createFakeUpdateProject = update_object => {
    let filteredObject = { ...update_object };
    const keys = Object.keys(update_object);
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        if (!!!update_object[key]) delete filteredObject[key];
    }
    return filteredObject;
};

module.exports = () => {
    let fakeUpdateProject = {
        project_name: randomInt(2) ? faker.commerce.productName() : "",
        role_level: randomInt(2) ? roleRandom() : "",
        project_description: randomInt(2) ? faker.lorem.sentences() : "",
        project_keyword: randomInt(2) ? projectKeyword(randomInt(6)) : "",
        reference_methodUrl: randomInt(2) ? refUrls(randomInt(6)) : "",
        project_source: randomInt(2) ? faker.lorem.text() : "",
        research_area: randomInt(2) ? faker.name.jobArea() : "",
        video_url: randomInt(2) ? faker.internet.url() : "",
    };
    fakeUpdateProject = createFakeUpdateProject({ ...fakeUpdateProject });
    return fakeUpdateProject;
};
