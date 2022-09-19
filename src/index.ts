import { createTransformer } from 'babel-jest';

export default createTransformer({
  presets: [
    ['@babel/env', { targets: { node: 'current' } }],
    '@babel/typescript',
  ],
});
