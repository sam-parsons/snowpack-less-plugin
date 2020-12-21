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

      // Pass in user-defined options
      Object.entries(compilerOptions).forEach(([flag, value]) => {
        let flagName = flag.replace(/[A-Z]/g, (c) => `-${c.toLowerCase()}`); // convert camelCase to kebab-case
        switch (typeof value) {
          case 'boolean': {
            args.push(`--${value === false ? 'no-' : ''}${flagName}`);
            break;
          }
          case 'string':
          case 'number': {
            args.push(`--${flagName}=${value}`);
            break;
          }
        }
      });

      console.log("args after processing compiler opts: ", args);

      // Build the file.
      // TODO: Error handling
      const result = await less.render(contents);
      return result.css;
    },
  };
};