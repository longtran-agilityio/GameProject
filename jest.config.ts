import { pathsToModuleNameMapper } from 'ts-jest'

import { compilerOptions } from './tsconfig.json'
import type { JestConfigWithTsJest } from 'ts-jest'

const jestConfig: JestConfigWithTsJest = {
  roots: ['<rootDir>/src'],
  preset: 'ts-jest',
  verbose: true,
  resetMocks: true,
  testEnvironment: 'jsdom',
  moduleDirectories: ['node_modules', 'src'],
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  transform: {
    '.+\\.(css|less|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      'jest-transform-stub',
  },
  transformIgnorePatterns: ['/node_modules/(?!antd|@ant-design|rc-.+?|@babel/runtime).+(js|jsx)$'],
  modulePaths: [compilerOptions.baseUrl],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),
}

export default jestConfig
