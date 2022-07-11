import { IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class PaginationDto {
  // id
  @IsOptional()
  @ApiProperty({
    name: 'after',
    nullable: true,
    required: false,
    description: '마지막 Pagination한 모델의 ID',
  })
  after?: string;

  @IsOptional()
  @ApiProperty({
    name: 'count',
    default: 20,
    required: false,
    description: '한번에 가져올 데이터 갯수',
  })
  count?: number = 20;
}
