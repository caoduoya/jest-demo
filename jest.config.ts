module.exports = {
    verbose: true,
    setupFilesAfterEnv: [
        "<rootDir>/src/setupTests.ts", "@testing-library/jest-dom"
    ],
    collectCoverage: true, // 输出测试覆盖率报告
};
