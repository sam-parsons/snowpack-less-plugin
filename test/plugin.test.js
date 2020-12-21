const plugin = require('../plugin.js');
const path = require('path');

const pathToLessApp = path.join(__dirname, 'fixtures/styles.less');

describe('snowpack-plugin-less', () => {
  test('returns the compiled Less result', async () => {
    const p = plugin(null, {});
    const lessResult = await p.load({filePath: pathToLessApp, isDev: false});
    expect(lessResult).toMatchSnapshot('styles.less');
  });

  // test('returns undefined when a sass partial is loaded directly', async () => {
  //   const p = plugin(null, {});
  //   const devResult = await p.load({filePath: pathToSassBase, isDev: false});
  //   expect(devResult).toEqual(undefined);
  //   const prodResult = await p.load({filePath: pathToSassBase, isDev: true});
  //   expect(prodResult).toEqual(undefined);
  // });

  // test('throws an error when stderr output is returned', async () => {
  //   const p = plugin(null, {});
  //   await expect(p.load({filePath: pathToBadCode, isDev: false})).rejects.toThrow(
  //     'Command failed with exit code',
  //   );
  // });

  // test('marks a dependant as changed when an imported changes and isDev=true', async () => {
  //   const p = plugin(null, {});
  //   p.markChanged = jest.fn();
  //   await p.load({filePath: pathToSassApp, isDev: true});
  //   expect(p.markChanged.mock.calls).toEqual([]);
  //   p.onChange({filePath: pathToSassApp});
  //   expect(p.markChanged.mock.calls).toEqual([]);
  //   p.onChange({filePath: pathToSassBase});
  //   expect(p.markChanged.mock.calls).toEqual([[pathToSassApp]]);
  // });

  // test('does not track dependant changes when isDev=false', async () => {
  //   const p = plugin(null, {});
  //   p.markChanged = jest.fn();
  //   await p.load({filePath: pathToSassApp, isDev: false});
  //   p.onChange({filePath: pathToSassApp});
  //   p.onChange({filePath: pathToSassBase});
  //   expect(p.markChanged.mock.calls).toEqual([]);
  // });

  // test('uses native sass CLI when native option = true', async () => {
  //   const p = plugin(null, {native: true});
  //   process.env.PATH = '';
  //   await expect(p.load({filePath: pathToSassApp, isDev: false})).rejects.toThrow(/(EPIPE|ENOENT)/);
  // });
});