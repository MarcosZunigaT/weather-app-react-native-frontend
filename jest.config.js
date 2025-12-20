/** @type {import('jest').Config} */
module.exports = {
  preset: "react-native",
  transform: {
    "^.+\\.[jt]sx?$": "babel-jest",
  },
  transformIgnorePatterns: [
    "node_modules/(?!(react-native|@react-native|@testing-library)/)",
  ],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "<rootDir>/src/components/WeatherCard.tsx",
    "<rootDir>/src/domain/entities/WeatherData.ts",
  ],
};
