const axe = require('axe-core');
const fs = require('fs');

module.exports = {
  runAccessibilityTests: async (page) => {
    await page.addScriptTag({ path: require.resolve('axe-core') });
    const results = await page.evaluate(() => axe.run());
    fs.writeFileSync('accessibility-report.json', JSON.stringify(results, null, 2));
    return results.violations;
  }
};
