import { ApiProperty } from '@nestjs/swagger';

export class PaginationMeta {
  @ApiProperty({
    name: 'count',
    description: '데이터 갯수',
    example: 20,
  })
  count: number;

  @ApiProperty({
    name: 'hasMore',
    description: '데이터가 더 있는지 여부',
    example: true,
  })
  hasMore: boolean;
}

export class Pagination<T> {
  @ApiProperty({
    name: 'meta',
    description: 'Pagination 정보',
    type: PaginationMeta,
  })
  meta: PaginationMeta;

  data: T[];
}
