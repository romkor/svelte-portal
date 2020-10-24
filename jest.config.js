module.exports = {
  transform: {
    "^.+\\.js?$": "babel-jest",
    "^.+\\.svelte?$": "jest-transform-svelte",
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  moduleFileExtensions: ["js", "svelte"],
  bail: false,
  verbose: true,
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
};
