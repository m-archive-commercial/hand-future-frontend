/**
 * Copyright (c) Hand-Future @2023. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
*/

const OFF = 0
const WARNING = 1
const ERROR = 2

module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    node: true,
  },
  globals: {
    JSX: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'plugin:@next/next/recommended',
    'prettier',
  ],
  plugins: [
    'react',
    'header',
  ],
  rules: {
    'array-callback-return': WARNING,
    camelcase: WARNING,
    'class-methods-use-this': OFF, // It's a way of allowing private variables.
    curly: [WARNING, 'all'],
    'global-require': WARNING,
    'lines-between-class-members': OFF,
    'max-classes-per-file': OFF,
    'max-len': [
      WARNING,
      {
        code: Infinity, // Code width is already enforced by Prettier
        tabWidth: 2,
        comments: 120,
        ignoreUrls: true,
        ignorePattern: '(eslint-disable|@)',
      },
    ],
    'no-await-in-loop': OFF,
    'no-case-declarations': WARNING,
    'no-console': OFF,
    'no-constant-binary-expression': ERROR,
    'no-continue': OFF,
    'no-else-return': [WARNING, {allowElseIf: true}],
    'no-empty': [WARNING, {allowEmptyCatch: true}],
    'no-lonely-if': WARNING,
    'no-nested-ternary': WARNING,
    'no-param-reassign': [WARNING, {props: false}],
    'no-prototype-builtins': WARNING,
    'no-restricted-exports': OFF,
    'no-restricted-properties': [
      ERROR,
      .../** @type {[string, string][]} */ ([
        // TODO: TS doesn't make Boolean a narrowing function yet,
        // so filter(Boolean) is problematic type-wise
        // ['compact', 'Array#filter(Boolean)'],
        ['concat', 'Array#concat'],
        ['drop', 'Array#slice(n)'],
        ['dropRight', 'Array#slice(0, -n)'],
        ['fill', 'Array#fill'],
        ['filter', 'Array#filter'],
        ['find', 'Array#find'],
        ['findIndex', 'Array#findIndex'],
        ['first', 'foo[0]'],
        ['flatten', 'Array#flat'],
        ['flattenDeep', 'Array#flat(Infinity)'],
        ['flatMap', 'Array#flatMap'],
        ['fromPairs', 'Object.fromEntries'],
        ['head', 'foo[0]'],
        ['indexOf', 'Array#indexOf'],
        ['initial', 'Array#slice(0, -1)'],
        ['join', 'Array#join'],
        // Unfortunately there's no great alternative to _.last yet
        // Candidates: foo.slice(-1)[0]; foo[foo.length - 1]
        // Array#at is ES2022; could replace _.nth as well
        // ['last'],
        ['map', 'Array#map'],
        ['reduce', 'Array#reduce'],
        ['reverse', 'Array#reverse'],
        ['slice', 'Array#slice'],
        ['take', 'Array#slice(0, n)'],
        ['takeRight', 'Array#slice(-n)'],
        ['tail', 'Array#slice(1)'],
      ]).map(([property, alternative]) => ({
        object: '_',
        property,
        message: `Use ${alternative} instead.`,
      })),
      ...[
        'readdirSync',
        'readFileSync',
        'statSync',
        'lstatSync',
        'existsSync',
        'pathExistsSync',
        'realpathSync',
        'mkdirSync',
        'mkdirpSync',
        'mkdirsSync',
        'writeFileSync',
        'writeJsonSync',
        'outputFileSync',
        'outputJsonSync',
        'moveSync',
        'copySync',
        'copyFileSync',
        'ensureFileSync',
        'ensureDirSync',
        'ensureLinkSync',
        'ensureSymlinkSync',
        'unlinkSync',
        'removeSync',
        'emptyDirSync',
      ].map((property) => ({
        object: 'fs',
        property,
        message: 'Do not use sync fs methods.',
      })),
    ],
    'no-restricted-syntax': [
      WARNING,
      // Copied from airbnb, removed for...of statement, added export all
      {
        selector: 'ForInStatement',
        message:
          'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
      },
      {
        selector: 'LabeledStatement',
        message:
          'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message:
          '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
      {
        selector: 'ExportAllDeclaration',
        message:
          "Export all does't work well if imported in ESM due to how they are transpiled, and they can also lead to unexpected exposure of internal methods.",
      },
      // TODO make an internal plugin to ensure this
      // {
      //   selector:
      // @   'ExportDefaultDeclaration > Identifier, ExportNamedDeclaration[source=null] > ExportSpecifier',
      //   message: 'Export in one statement'
      // },
      ...['path', 'fs-extra', 'webpack', 'lodash'].map((m) => ({
        selector: `ImportDeclaration[importKind=value]:has(Literal[value=${m}]) > ImportSpecifier[importKind=value]`,
        message:
          'Default-import this, both for readability and interoperability with ESM',
      })),
    ],
    'no-template-curly-in-string': WARNING,
    'no-unused-expressions': [WARNING, {allowTaggedTemplates: true}],
    'no-useless-escape': WARNING,
    'no-void': [ERROR, {allowAsStatement: true}],
    'prefer-destructuring': WARNING,
    'prefer-named-capture-group': WARNING,
    'prefer-template': WARNING,
    yoda: WARNING,

    '@typescript-eslint/consistent-type-definitions': OFF,
    '@typescript-eslint/require-await': OFF,

    '@typescript-eslint/ban-ts-comment': [
      ERROR,
      {'ts-expect-error': 'allow-with-description'},
    ],
    '@typescript-eslint/consistent-indexed-object-style': [
      WARNING,
      'index-signature',
    ],
    '@typescript-eslint/consistent-type-imports': [
      WARNING,
      {disallowTypeAnnotations: false},
    ],
    '@typescript-eslint/explicit-module-boundary-types': WARNING,
    '@typescript-eslint/method-signature-style': ERROR,
    '@typescript-eslint/no-empty-function': OFF,
    '@typescript-eslint/no-empty-interface': [
      ERROR,
      {
        allowSingleExtends: true,
      },
    ],
    '@typescript-eslint/no-inferrable-types': OFF,
    '@typescript-eslint/no-namespace': [WARNING, {allowDeclarations: true}],
    'no-use-before-define': OFF,
    '@typescript-eslint/no-use-before-define': [
      ERROR,
      {functions: false, classes: false, variables: true},
    ],
    '@typescript-eslint/no-non-null-assertion': OFF,
    'no-redeclare': OFF,

    '@typescript-eslint/no-redeclare':OFF, // 有时候我们需要val和type是一个变量

    'no-shadow': OFF,
    '@typescript-eslint/no-shadow': ERROR,

    'header/header': [
      ERROR,
      'block',
      [
        '*',
        ' * Copyright (c) Hand-Future @2023. and its affiliates.',
        ' *',
        ' * This source code is licensed under the MIT license found in the',
        ' * LICENSE file in the root directory of this source tree.',
        ''
      ],
      2
    ],

    'import/extensions': OFF,
    // This rule doesn't yet support resolving .js imports when the actual file
    // is .ts. Plus it's not all that useful when our code is fully TS-covered.
    'import/no-unresolved': [
      OFF,
      {
        // Ignore certain webpack aliases because they can't be resolved
        ignore: [
          '^@theme',
          '^@generated',
        ],
      },
    ],
    'import/order': [
      WARNING,
      {
        "newlines-between": "always-and-inside-groups",
        groups: [
          'builtin',
          'external',
          'internal',
          ['parent', 'sibling', 'index'],
          'type',
        ],
        pathGroups: [
          // always put css import to the last, ref:
          // https://github.com/import-js/eslint-plugin-import/issues/1239
          {
            pattern: '*.+(css|sass|less|scss|pcss|styl)',
            group: 'unknown',
            patternOptions: {matchBase: true},
            position: 'after',
          },
          {pattern: 'react', group: 'builtin', position: 'before'},
          {pattern: 'fs-extra', group: 'builtin'},
          {pattern: 'lodash', group: 'external', position: 'before'},
          {pattern: 'clsx', group: 'external', position: 'before'},
          // 'Bit weird to not use the `import/internal-regex` option, but this
          // way, we can make `import type { Props } from "@theme/*"` appear
          // before `import styles from "styles.module.css"`, which is what we
          // always did. This should be removable once we stop using ambient
          // module declarations for theme aliases.
          {pattern: '@theme/**', group: 'internal'},
        ],
        pathGroupsExcludedImportTypes: [],
        // example: let `import './nprogress.css';` after importing others
        // in `packages/docusaurus-theme-classic/src/nprogress.ts`
        // see more: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md#warnonunassignedimports-truefalse
        warnOnUnassignedImports: true,
      },
    ],
    'import/prefer-default-export': OFF,

    'jsx-a11y/click-events-have-key-events': WARNING,
    'jsx-a11y/no-noninteractive-element-interactions': WARNING,
    'jsx-a11y/html-has-lang': OFF,

    // indent: [2, 2], // 不要用它，不会自己fix，可以用更宽广的react/jsx-indent-xx，ref: https://github.com/jsx-eslint/eslint-plugin-react/issues/1584#issuecomment-349180874

    // ref: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md
    "react/jsx-indent-props": [WARNING, 2],

    // ref: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md
    "react/jsx-closing-bracket-location": [WARNING, "tag-aligned"],

    'react/react-in-jsx-scope': OFF, // nextjs 不需要导入 react
    'react-hooks/rules-of-hooks': ERROR,
    'react-hooks/exhaustive-deps': ERROR,

    // eslint 默认的 func-style 也可以控制 func 格式，但是不提供 fix
    // "func-style": [ERROR, 'expression'], // ref: https://eslint.org/docs/latest/rules/func-style
    // react插件里的这个可以，ref: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/function-component-definition.md
    // Docusaurus笔记： Sometimes we do need the props as a whole, e.g. when spreading
    'react/destructuring-assignment': OFF,
    'react/function-component-definition': [
      WARNING,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/jsx-filename-extension': OFF,
    'react/jsx-key': [ERROR, {checkFragmentShorthand: true}],
    'react/jsx-no-useless-fragment': [ERROR, {allowExpressions: true}],
    'react/jsx-props-no-spreading': OFF,
    'react/no-array-index-key': OFF, // We build a static site, and nearly all components don't change.
    'react/no-unstable-nested-components': [WARNING, {allowAsProps: true}],
    // 'react/prefer-stateless-function': WARNING,
    'react/prop-types': OFF,
    'react/require-default-props': [ERROR, {ignoreFunctionalComponents: true}],

    semi: [ERROR, 'never'],
    "no-unused-vars": WARNING,
    "no-extra-semi": ERROR,
    "no-multiple-empty-lines": ERROR,
    'react/jsx-closing-tag-location': ERROR, // ref: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-closing-tag-location.md
    'react/no-unused-prop-types': WARNING,
  },
  overrides: [
    // 我们应该允许在一些js文件中使用 require 语法，例如 tailwindcss.config.js
    {
      files: "**/*.js",
      rules: {
        "global-require": OFF,
        // tailwind.config.js
        '@typescript-eslint/no-var-requires': OFF
      }
    }
  ],
}
