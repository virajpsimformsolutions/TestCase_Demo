module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  collectCoverage: true,
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest'
  },
  globals: {
    __DEV__: true
  },
  setupFilesAfterEnv: ['<rootDir>/jest/__test__/enzyme-setup.js'],
  testPathIgnorePatterns: [
    //An array of regexp pattern strings that are matched against all test paths before executing the test. If the test path matches any of the patterns, it will be skipped.
    '/node_modules/'
  ],
  moduleNameMapper: {
    '@react-native-async-storage/async-storage':
      '<rootDir>/jest/__mock__/@react-native-async-storage/async-storage.js'
  },
  setupFiles: ['<rootDir>/jest/__test__/jest-setup.js'],
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$'
};
