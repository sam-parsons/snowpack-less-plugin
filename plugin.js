const fs = require('fs');
const less = require('less');

module.exports = function lessPlugin(_, {compilerOptions = {}} = {}) {
  return {
    name: 'snowpack-plugin-less',
    resolve: {
      input: ['.less'],
      output: ['.css'],
    },
    /** Load the Less file and compile it to CSS. */
    async load({filePath}) {
      const contents = fs.readFileSync(filePath, 'utf8');

      // TODO: Pass in user-defined options

      // Build the file.
      // TODO: Error handling
      const result = await less.render(contents);
      return result.css;
    },
  };
};