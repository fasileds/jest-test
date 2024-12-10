
# calcBillingPeriods Test Suite

This is the test suite for the `calcBillingPeriods` function.

## Installation

1. Clone this repository:
   ```bash
   git clone (https://github.com/fasileds/jest-test.git)
   cd calcBillingPeriods
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Running Tests

Run the tests using:
```bash
npm test
```

### Test Cases
- `should return false when periodYear is invalid`
- `should return false when periodYear is not a valid year (e.g., 999)`
- `should return false when cutoffDate is outside valid range (less than 1)`
- `should return false when cutoffDate is outside valid range (greater than 31)`
- `should return an array of periods when all inputs are valid`
- `should return the correct months in the format YYYY-MM-01`
- `should handle edge cases where month transitions from December to January`

### Known Issues
The test suite may fail due to missing functions such as `nearestNextValidDate` and `nearestPrevValidDate` in `calcBillingPeriods.js`.

## License

MIT License
