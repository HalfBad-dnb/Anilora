export const testEnvironment = 'jsdom';
export const transform = {
    '^.+\\.(js|jsx)$': 'babel-jest', // Transform .js and .jsx files with babel-jest
};
export const setupFilesAfterEnv = ['./setupTests.js'];