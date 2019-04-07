const path = require('path')

module.exports = {
  verbose: true,
  rootDir: path.resolve(__dirname),
};

// module.exports = {
//   rootDir: path.resolve(__dirname, '../../'),
//   moduleFileExtensions: [
//     'js',
//     'json'
//   ],
//   moduleNameMapper: {
//     '^@/(.*)$': '<rootDir>/src/$1'
//   },
//   transform: {
//     '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
//   },
//   testPathIgnorePatterns: [
//     '<rootDir>/test/e2e'
//   ],
// }
