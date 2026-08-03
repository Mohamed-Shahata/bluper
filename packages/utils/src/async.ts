export function sleep(milliseconds: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

export interface RetryOptions {
  readonly retries: number;
  readonly delayMs?: number;
}

/**
 * Executes an async function and retries it a limited number of times
 * if it throws. Used to support the project's "one retry per failed
 * operation" reliability requirement.
 */
export async function retry<TResult>(
  fn: () => Promise<TResult>,
  options: RetryOptions,
): Promise<TResult> {
  const { retries, delayMs = 0 } = options;

  let lastError: unknown;

  for (let attempt = 0; attempt <= retries; attempt += 1) {
    try {
      return await fn();
    } catch (error) {
      lastError = error;

      const isLastAttempt = attempt === retries;
      if (isLastAttempt) {
        break;
      }

      if (delayMs > 0) {
        await sleep(delayMs);
      }
    }
  }

  throw lastError;
}
function setTimeout(
  resolve: (value: void | PromiseLike<void>) => void,
  milliseconds: number,
): void {
  throw new Error('Function not implemented.');
}
