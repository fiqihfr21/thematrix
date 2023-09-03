import { Model, RelationMappings, RelationMappingsThunk } from 'objection';

export class Matrix extends Model {
  static tableName = 'matrix';

  id!: number;
  m!: number[][];
  n!: number;
  result!: string;
}
