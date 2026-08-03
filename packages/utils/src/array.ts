export function chunk<TItem>(items: readonly TItem[], size: number): TItem[][] {
  if (size <= 0) {
    throw new Error('chunk size must be greater than 0');
  }

  const chunks: TItem[][] = [];

  for (let index = 0; index < items.length; index += size) {
    chunks.push(items.slice(index, index + size));
  }

  return chunks;
}

export function unique<TItem>(items: readonly TItem[]): TItem[] {
  return Array.from(new Set(items));
}
