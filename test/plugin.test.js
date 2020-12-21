const plugin = require('../plugin.js');
const path = require('path');

const pathToLessApp = path.join(__dirname, 'fixtures/styles.less');

describe('snowpack-plugin-less', () => {
  test('returns the compiled Less result', async () => {
    const p = plugin(null, {});
    const lessResult = await p.load({filePath: pathToLessApp, isDev: false});
    expect(lessResult).toMatchSnapshot('styles.less');
  });
});