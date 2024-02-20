/* eslint-disable */
export default {
  displayName: 'sourcing',
  testEnvironment: 'jsdom',
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nx/react/plugins/jest',
    '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@nx/react/babel'] }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/apps/sourcing-ui',
  coveragePathIgnorePatterns: [
    'apps/sourcing-ui/src/__mocks__/',
    'apps/sourcing-ui/src/assets/',
    'apps/sourcing-ui/src/envData.ts',
    'apps/sourcing-ui/src/integration-mount.tsx',
    '.config',
    '.types',
    '.styles',
    'libs/*',
  ],
};
