// calcBillingPeriods.test.js

const { calcBillingPeriods } = require("./calcBillingPeriods");
const { nearestNextValidDate, nearestPrevValidDate } = require("./utils");

// Mock the utility functions
jest.mock("./utils", () => ({
  nearestNextValidDate: jest.fn((date) => date),
  nearestPrevValidDate: jest.fn((date) => date),
}));

describe("calcBillingPeriods", () => {
  it("should return false when periodYear is invalid", () => {
    const result = calcBillingPeriods(15, "abcd");
    expect(result).toBe(false);
  });

  it("should return false when periodYear is not a valid year (e.g., 999)", () => {
    const result = calcBillingPeriods(15, "999");
    expect(result).toBe(false);
  });

  it("should return false when cutoffDate is outside valid range (less than 1)", () => {
    const result = calcBillingPeriods(0, "2024");
    expect(result).toBe(false);
  });

  it("should return false when cutoffDate is outside valid range (greater than 31)", () => {
    const result = calcBillingPeriods(32, "2024");
    expect(result).toBe(false);
  });

  it("should return an array of periods when all inputs are valid", () => {
    const result = calcBillingPeriods(15, "2024");
    expect(result).toHaveLength(12);
  });

  it("should return the correct months in the format YYYY-MM-01", () => {
    const result = calcBillingPeriods(15, "2024");
    expect(result[0].month).toBe("2024-01-01");
    expect(result[11].month).toBe("2024-12-01");
  });

  it("should handle edge cases where month transitions from December to January", () => {
    const result = calcBillingPeriods(15, "2024");
    expect(result[0].start_date).toBe("2023-12-15");
    expect(result[0].end_date).toBe("2024-01-15");
  });
});
