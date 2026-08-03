# Retry Rules

This workflow supports selective retries.

If Retry = false

Execute normally.

---

If Retry = true

Read the Retry Reason carefully.

Regenerate ONLY the affected section.

Do not regenerate unaffected outputs.

Do not modify validated engineering decisions.

Preserve consistency with all approved outputs.

---

Never attempt more than one regeneration.

If the issue cannot be resolved:

Return

{
"status": "failed",
"reason": ""
}

The Workflow Orchestrator will decide the next action.
