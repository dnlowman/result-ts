export default class Result<T> {
  public static ok<U>(value: U) {
    return new Result<U>(value, undefined);
  }

  public static error<U>(error: string) {
    return new Result<U>(undefined, error);
  }

  private constructor(private value?: T, private error?: string) {}

  public isError(): boolean {
    return typeof this.error !== 'undefined' && this.error !== null;
  }

  public getValue(): T | undefined {
    return this.value;
  }

  public getError(): string | undefined {
    return this.error;
  }
}
