import { BadRequestException, PipeTransform } from '@nestjs/common';
import { ZodSchema } from 'zod';

/**
 * Validates a single controller argument (body, query, or param) against
 * a Zod schema, per the Zod Validation standard defined in
 * 07-backend-architecture.md and 10-coding-guidelines.md.
 *
 * Usage:
 *
 *   @Post()
 *   @UsePipes(new ZodValidationPipe(createProjectSchema))
 *   create(@Body() dto: CreateProjectDto) {}
 */
export class ZodValidationPipe implements PipeTransform {
  constructor(private readonly schema: ZodSchema) {}

  transform(value: unknown): unknown {
    const result = this.schema.safeParse(value);

    if (!result.success) {
      const message = result.error.issues
        .map((issue) => `${issue.path.join('.')}: ${issue.message}`)
        .join('; ');

      throw new BadRequestException(message);
    }

    return result.data;
  }
}