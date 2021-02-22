const path = require('path');
const pluralize = require('pluralize');
const storePath = path.join(__dirname, '../../src/store');
const typesPath = path.join(__dirname, '../../src/types');
const { toProperCase, toCamelCase } = require('../utils');

module.exports = {
  description: 'Add a slice',
  prompts: [
    {
      type: 'input',
      name: 'sliceName',
      message: 'What should it be called?',
    },
    {
      type: 'confirm',
      name: 'wantEntity',
      message: 'Do you want to create en entity?',
      default: false,
    },
    {
      type: 'confirm',
      name: 'wantSaga',
      message: 'Do you want to create a saga?',
      default: false,
    },
  ],
  actions: data => {
    const answers = data;
    const camelCase = toCamelCase(answers.sliceName);
    const plural = toCamelCase(pluralize(answers.sliceName));
    const sliceName = `${answers.wantEntity ? plural : camelCase}`;
    const TypeName = `${toProperCase(pluralize.singular(answers.sliceName))}`;
    const slicePath = `${storePath}/${sliceName}`;

    const actions = [
      {
        type: 'add',
        path: `${slicePath}/index.ts`,
        templateFile: `./slice/${
          answers.wantEntity ? 'entity' : 'index'
        }.ts.hbs`,
        abortOnFail: true,
        data: {
          realSliceName: sliceName,
          TypeName,
        },
      },
      {
        type: 'add',
        path: `${slicePath}/__tests__/index.test.ts`,
        templateFile: `./slice/index.test.ts.hbs`,
        abortOnFail: true,
        data: {
          realSliceName: sliceName,
          TypeName,
        },
      },
      {
        type: 'append',
        path: `${storePath}/index.ts`,
        pattern: />>> \[IMPORT NEW REDUCERS BELOW\]/,
        template: `import { ${sliceName}Reducer } from "./${sliceName}"`,
      },
      {
        type: 'append',
        path: `${storePath}/index.ts`,
        pattern: />>> \[REGISTER NEW REDUCERS BELOW\]/,
        template: `   ${sliceName}: ${sliceName}Reducer,`,
      },
    ];

    if (answers.wantSaga) {
      actions.push(
        {
          type: 'add',
          path: `${slicePath}/saga.ts`,
          templateFile: './slice/saga.ts.hbs',
          abortOnFail: true,
          data: {
            realSliceName: sliceName,
            TypeName,
          },
        },
        {
          type: 'add',
          path: `${slicePath}/__tests__/saga.test.ts`,
          templateFile: './slice/saga.test.ts.hbs',
          abortOnFail: true,
          data: {
            realSliceName: sliceName,
            TypeName,
          },
        },
        {
          type: 'append',
          path: `${storePath}/index.ts`,
          pattern: />>> \[IMPORT NEW SAGAS BELOW\]/,
          template: `import { ${sliceName}Saga } from "./${sliceName}/saga";`,
        },
        {
          type: 'append',
          path: `${storePath}/index.ts`,
          pattern: />>> \[RUN NEW SAGAS BELOW\]/,
          template: `runSaga(${sliceName}Saga);`,
        }
      );
    }
    if (answers.wantEntity) {
      actions.push({
        type: 'append',
        path: `${typesPath}/index.ts`,
        pattern: />>> \[NEW ENTITY TYPES BELOW\]/,
        template: `export type ${TypeName} = {}`,
      });
    }
    actions.push({
      type: 'prettify',
      data: { path: `${slicePath}/**` },
    });
    actions.push({
      type: 'prettify',
      data: { path: `${storePath}/index.ts` },
    });
    actions.push({
      type: 'prettify',
      data: { path: `${typesPath}/index.ts` },
    });

    return actions;
  },
};
