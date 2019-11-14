const faker = require("faker");
module.exports = () => {
  if (faker.random.boolean()) {
    return "PUBLIC";
  }
  return "PRIVATE";
};
