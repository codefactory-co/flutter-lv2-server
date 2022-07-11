import { BasketItemDto } from '../../user/dto/basket-item.dto';
import { ApiProperty } from '@nestjs/swagger';

export class CreateOrderDto {
  @ApiProperty({
    name: 'id',
    description: '주문 ID',
    example: '1952a209-7c26-4f50-bc65-086f6e64dbbd',
  })
  id: string;

  @ApiProperty({
    name: 'products',
    description: '주문 상품들',
    type: BasketItemDto,
    isArray: true,
  })
  products: BasketItemDto[];

  @ApiProperty({
    name: 'totalPrice',
    description: '총액',
    example: 10000,
  })
  totalPrice: number;

  @ApiProperty({
    name: 'createdAt',
    description: '생성일자',
  })
  createdAt: string;
}
