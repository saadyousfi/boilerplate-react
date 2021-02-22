const componentGenerator = require('./component');
const shell = require('shelljs');

module.exports = function plop(plop) {
  plop.setGenerator('component', componentGenerator);

  plop.setActionType('prettify', (answers, config) => {
    const data = config.data;
    shell.exec(`yarn prettier --write ${data.path}`, { silent: true });
    return '';
  });
};
