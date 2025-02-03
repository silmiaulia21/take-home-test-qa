/** @type {import('jest').Config} */
const globalVariable = require('./global-variables.json');

const config = {
    testEnvironment: 'node',
    verbose: true,
    coveragePathIgnorePatterns: [
        '/node_modules/'
    ],
    globalSetup: "./config/global-setup.js",
    globalTeardown: "./config/global-teardown.js",
    testSequencer: './config/custom-sequencer.js',
    globals: globalVariable,
    reporters: [
        "default",
        "jest-html-reporters"
    ],
    setupFilesAfterEnv: [
        "jest-expect-message"
    ],
    testTimeout: 10000
};

module.exports = config;
