module.exports = {
  roots: ['<rootDir>/'],
  collectCoverageFrom: ['**/src/**/*.(tsx|ts|js)'],
  testMatch: ['**/__test__/*.(tsx|ts|js)'],
  moduleFileExtensions: ['tsx', 'ts', 'js'],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect']
}
