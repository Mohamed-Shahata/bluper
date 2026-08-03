export type EntityId = string;
export type IsoDateString = string;

export interface TimestampedEntity {
  readonly id: EntityId;
  readonly createdAt: IsoDateString;
  readonly updatedAt: IsoDateString;
}

export interface UserSummary extends TimestampedEntity {
  readonly email: string;
  readonly name?: string | null;
}

export interface ProjectSummary extends TimestampedEntity {
  readonly userId: EntityId;
  readonly name: string;
  readonly description?: string | null;
  readonly domain?: string | null;
}

export type RequirementType = 'functional' | 'nonFunctional';
export type Priority = 'low' | 'medium' | 'high' | 'critical';

export interface RequirementSummary extends TimestampedEntity {
  readonly projectId: EntityId;
  readonly type: RequirementType;
  readonly priority: Priority;
  readonly title: string;
  readonly description: string;
}
