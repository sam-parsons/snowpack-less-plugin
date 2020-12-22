const plugin = require('../plugin.js');
const path = require('path');

const pathToLessApp = path.join(__dirname, 'fixtures/styles.less');

describe('snowpack-less-plugin', () => {
  test('returns the compiled Less result', async () => {
    const p = plugin(null, {});
    const lessResult = await p.load({filePath: pathToLessApp, isDev: false});
    console.log(lessResult);
    expect(lessResult).toMatchSnapshot('styles.less');
  });
});