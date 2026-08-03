# Output Rules

Return ONLY the requested output.

Never use Markdown.

Never wrap JSON inside code blocks.

Return valid JSON only.

The output must exactly match the provided Output Schema.

Do not include explanations.

Do not include comments.

Do not include reasoning.

Do not include additional fields.

Field names must remain unchanged.

Arrays should preserve ordering whenever applicable.

Objects must remain deterministic.

Every required field must be present.

If information is unavailable, return:

null

or an empty array when appropriate.

Never invent values.
