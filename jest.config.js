const nextJest = require('next/jest');

const createJestConfig = nextJest({ dir: '.' });

const customJestConfig = {
    testEnvironment: 'jsdom',
    clearMocks: true,
    moduleDirectories: ['node_modules', '<rootDir>'],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    testRegex: '(/__tests__/.*|(\\.|/)test)\\.[jt]sx?$',
    testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
    collectCoverageFrom: [
        '**/*.{js,jsx,ts,tsx}',
        '!**/*.d.ts',
        '!**/node_modules/**'
    ],
    moduleNameMapper: {
        '@/(.*)$': '<rootDir>/$1'
    }
};

module.exports = createJestConfig(customJestConfig);
