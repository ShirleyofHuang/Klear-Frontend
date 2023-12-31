module.exports = {
  // The root of your source code, typically /src
  // `<rootDir>` is a token Jest substitutes
  roots: ['<rootDir>/src'],
  preset: 'react-native',

  // Jest transformations -- this adds support for TypeScript
  // using babel-jest ** note I changed this from ts-jest to get tests working
  transform: {
    '^.+\\.tsx?$': 'babel-jest',
    '^.+\\.svg$': 'jest-transform-stub'
  },
  transformIgnorePatterns: [
    'node_modules/(?!(@react-native|react-native|react-native-vector-icons|axios)/)'
  ],

  // Runs special logic, such as cleaning up components
  // when using React Testing Library and adds special
  // extended assertions to Jest
  setupFilesAfterEnv: [
    '@testing-library/jest-native/extend-expect',
    './src/testConfig/setupTests.tsx'
  ],

  // Test spec file resolution pattern
  // Matches parent folder `__tests__` and filename
  // should contain `test` or `spec`.
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',

  // Module file extensions for importing
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],

  coverageReporters: [
    [
      'lcov'
    ],
    'text'
  ],
  collectCoverageFrom: [
    'src/**/*.tsx',
    '!**/node_modules/**'
  ],
  globals: {
    SENTRY_DSN: '',
    SENTRY_AUTH_TOKEN: '',
    DOMAIN: ''
  }
}
