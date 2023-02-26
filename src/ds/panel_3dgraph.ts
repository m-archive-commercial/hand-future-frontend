/**
 * Copyright (c) Hand-Future @2023. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
*/

export type ForceEngine = 'd3' | 'ngraph';
export const ForceEngines: ForceEngine[] = ['d3', 'ngraph']

export type NumDimension = 1 | 2 | 3
export const NumDimensions: NumDimension[] = [1, 2, 3]

export type DagMode = 'td' | 'bu' | 'lr' | 'rl' | 'zout' | 'zin' | 'radialout' | 'radialin';
export const DagModes: DagMode[] = ['td', 'bu', 'lr', 'rl', 'zout', 'zin', 'radialout', 'radialin']
