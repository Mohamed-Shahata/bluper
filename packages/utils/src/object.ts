export function isNullOrUndefined(value: unknown): value is null | undefined {
  return value === null || value === undefined;
}

export function pick<TObject extends object, TKey extends keyof TObject>(
  source: TObject,
  keys: readonly TKey[],
): Pick<TObject, TKey> {
  const result = {} as Pick<TObject, TKey>;

  for (const key of keys) {
    if (key in source) {
      result[key] = source[key];
    }
  }

  return result;
}

export function omit<TObject extends object, TKey extends keyof TObject>(
  source: TObject,
  keys: readonly TKey[],
): Omit<TObject, TKey> {
  const result = { ...source };

  for (const key of keys) {
    delete result[key];
  }

  return result;
}
