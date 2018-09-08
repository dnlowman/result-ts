import Result from '../src/Result';

describe(`the Result type`, () => {
  it(`should have a static ok method which returns an ok result`, () => {
    // Given
    const value = 123;

    // When
    const result = Result.ok(value);

    // Then
    expect(result).toBeDefined();
  });

  it(`should have a static error method which returns an error result`, () => {
    // Given
    const error = 'Something bad happened!';

    // When
    const result = Result.error(error);

    // Then
    expect(result).toBeDefined();
  });

  describe(`the public isError method`, () => {
    it(`should return true when the Result is an error`, () => {
      // Given
      const error = 'Something bad happened!';
      const result = Result.error(error);

      // When
      const isError = result.isError();

      // Then
      expect(isError).toBeDefined();
      expect(isError).toBeTruthy();
      expect(isError).toBe(true);
    });

    it(`should return false when the Result is not an error`, () => {
      // Given
      const value = 123;
      const result = Result.ok(value);

      // When
      const isError = result.isError();

      // Then
      expect(isError).toBeDefined();
      expect(isError).toBeFalsy();
      expect(isError).toBe(false);
    });
  });

  it(`should contain a public getValue method which returns the value`, () => {
    // Given
    const value = 123;
    const result = Result.ok(value);

    // When
    const unwrappedValue = result.getValue();

    // Then
    expect(unwrappedValue).toBeDefined();
    expect(unwrappedValue).toBe(value);
  });

  it(`should contain a public getError method which returns the error`, () => {
    // Given
    const error = 'There is an error!';
    const result = Result.error(error);

    // When
    const unwrappedValue = result.getError();

    // Then
    expect(unwrappedValue).toBeDefined();
    expect(unwrappedValue).toBe(error);
  });
});
