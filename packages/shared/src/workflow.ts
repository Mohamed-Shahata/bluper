import type { EntityId, IsoDateString } from './domain.js';

export type WorkflowStatus = 'pending' | 'running' | 'completed' | 'failed';
export type AgentStatus = 'pending' | 'running' | 'completed' | 'retryRequired' | 'failed';

export interface WorkflowExecutionSummary {
  readonly id: EntityId;
  readonly projectId: EntityId;
  readonly status: WorkflowStatus;
  readonly startedAt?: IsoDateString | null;
  readonly endedAt?: IsoDateString | null;
  readonly createdAt: IsoDateString;
  readonly updatedAt: IsoDateString;
}

export interface AgentExecutionSummary {
  readonly id: EntityId;
  readonly workflowExecutionId: EntityId;
  readonly agentId: string;
  readonly status: AgentStatus;
  readonly retryCount: number;
  readonly startedAt?: IsoDateString | null;
  readonly endedAt?: IsoDateString | null;
}
