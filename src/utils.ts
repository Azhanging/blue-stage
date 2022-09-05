export function hook<T>(ctx: any, fn: T, args: any[] = []): any {
  if (typeof fn === `function`) {
    return fn.apply(ctx, args);
  }
  return fn;
}
