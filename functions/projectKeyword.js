let faker = require("faker");
module.exports = project_keyword_size => {
  let project_keywords = [];
  for (let i = 0; i < project_keyword_size; i++) {
    let keyWord = faker.company.catchPhraseNoun();
    let template = { label: "", value: "" };
    template["label"] = template["value"] = keyWord;
    project_keywords.push(template);
  }
  return project_keywords;
};
