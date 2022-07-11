import { IsInt, IsString } from 'class-validator';
import { Product } from '../../product/entities/product.entity';
import { ApiProperty } from '@nestjs/swagger';
import { OrderProduct } from '../../order/entities/order-product-entity';

export class BasketItemDto {
  @IsString()
  @ApiProperty({
    name: 'productId',
    description: '상품 ID',
    example: '1952a209-7c26-4f50-bc65-086f6e64dbbd',
  })
  productId: string;

  @IsInt()
  @ApiProperty({
    name: 'count',
    description: '갯수',
    example: 10,
  })
  count: number;
}

export class BasketItemWithFullProductDto {
  @ApiProperty({
    name: 'product',
    description: '상품',
    type: Product,
  })
  product: OrderProduct;

  @ApiProperty({
    name: 'count',
    example: 10,
    description: '갯수',
  })
  count: number;
}
