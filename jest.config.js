module.exports = {
    roots: ["<rootDir>/src"],
    testEnvironment: 'jest-environment-jsdom',
    collectCoverageFrom: [
      'src/**/*.{js,tsx}',
      '!src/**/*.svg'
    ],
    testMatch: ["**/__tests__/**/*.+(ts|tsx|js)", "**/?(*.)+(spec|test).+(ts|tsx|js)"],
    transform: {
      "^.+\\.(ts|tsx)$": "ts-jest",
      "^.+\\.svg$": "<rootDir>/svgTransform.js"
    },
    moduleNameMapper: {
      "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    },
  };