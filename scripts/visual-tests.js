const backstop = require('backstopjs');

module.exports = {
  runVisualTests: async () => {
    await backstop('test');
  }
};
