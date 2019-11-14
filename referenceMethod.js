const faker = require("faker");
module.exports = ref_size => {
  let reference_method_url = [];
  for (let i = 0; i < ref_size; i++) {
    let url = faker.internet.url();
    reference_method_url.push(url);
  }
  return reference_method_url;
};
