const path = require('path');
const baseGeneratorPath = path.join(__dirname, '../../src/app');
const { toProperCase } = require('../utils');
require('inquirer').registerPrompt('directory', require('inquirer-directory'));

module.exports = {
  description: 'Add a component',
  prompts: [
    {
      type: 'input',
      name: 'componentName',
      message: 'What should it be called?',
    },
    {
      type: 'directory',
      name: 'path',
      message: 'Where do you want it to be created?',
      basePath: `${baseGeneratorPath}`,
    },
    {
      type: 'confirm',
      name: 'wantTests',
      default: false,
      message: 'Do you want to have tests?',
    },
  ],
  actions: data => {
    const answers = data;

    const componentPath = `${baseGeneratorPath}/${answers.path}/{{properCase componentName}}`;
    const actualComponentPath = `${baseGeneratorPath}/${
      answers.path
    }/${toProperCase(answers.componentName)}`;

    const actions = [
      {
        type: 'add',
        path: `${componentPath}/index.tsx`,
        templateFile: './component/index.tsx.hbs',
        abortOnFail: true,
      },
    ];

    if (answers.wantTests) {
      actions.push({
        type: 'add',
        path: `${componentPath}/__tests__/index.test.tsx`,
        templateFile: './component/index.test.tsx.hbs',
        abortOnFail: true,
      });
    }
    actions.push({
      type: 'prettify',
      data: { path: `${actualComponentPath}/**` },
    });

    return actions;
  },
};
