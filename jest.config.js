module.exports = {
    setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    moduleNameMapper: {
        '^~/(.+)$': '<rootDir>/src/$1',
    },
};
