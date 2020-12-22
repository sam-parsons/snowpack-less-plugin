const plugin = require('../plugin.js');
const path = require('path');

const pathToLessBasic = path.join(__dirname, 'fixtures/basic/styles.less');
const pathToLessImports = path.join(__dirname, 'fixtures/imports/styles1.less');

describe('snowpack-less-plugin', () => {
  test('returns the compiled Less result', async () => {
    const p = plugin(null, {});
    const lessResult = await p.load({filePath: pathToLessBasic, isDev: false});
    expect(lessResult).toMatchSnapshot('styles.less');
  });

  test('handles imports in Less', async () => {
    const p = plugin(null, {});
    const lessResult = await p.load({filePath: pathToLessImports, isDev: false});
    expect(lessResult).toMatchSnapshot('styles.less');
  });
});