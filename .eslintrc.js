/**
 * Copyright (c) Hand-Future @2023. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const OFF = 0 // 没有必要一定遵循的原则
const WARNING = 1 // 不遵循代码质量会不够高的原则
const ERROR = 2 // 不遵循会影响功能的原则

module.exports = {
  extends: "next/core-web-vitals",
  plugins: [
    'import'
  ],
  rules: {
    'import/order': [
      WARNING,
      {
        // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md#newlines-between-ignorealwaysalways-and-inside-groupsnever
        "newlines-between": "always",
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'type',
        ],
        pathGroups: [
          // always put css import to the last, ref: https://github.com/import-js/eslint-plugin-import/issues/1239
          {
            pattern: '*.+(css|sass|less|scss|pcss|styl)',
            group: 'unknown',
            patternOptions: {matchBase: true},
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: [],
        warnOnUnassignedImports: true,
      },
    ],

    // 这条规则比较方便debug，但是不影响功能，@see: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/display-name.md
    'react/display-name': WARNING,
  }
}
