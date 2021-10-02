const generator = require("custom-template-generator");

generator({
  componentName: process.argv[4],
  customTemplatesUrl: "templates",
  dest: process.argv[3],
  templateName: process.argv[2],
});
