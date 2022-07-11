import { ApiProperty } from '@nestjs/swagger';

export class BaseEntity {
  constructor(params: BaseEntity) {
    this.id = params.id;
  }

  @ApiProperty({
    name: 'id',
    description: '객체 ID',
    example: '1952a209-7c26-4f50-bc65-086f6e64dbbd',
  })
  id: string;
}
