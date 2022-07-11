import { BaseEntity } from '../../core/entity/base.entity';
import { Product } from '../../product/entities/product.entity';
import { IBasketItem } from '../../user/entities/user.entity.interface';
import { User } from '../../user/entities/user.entity';
import { Exclude } from 'class-transformer';
import { Restaurant } from '../../restaurant/entities/restaurant.entity';
import {
  BasketItemDto,
  BasketItemWithFullProductDto,
} from '../../user/dto/basket-item.dto';
import { ApiProperty } from '@nestjs/swagger';

export class Order extends BaseEntity {
  constructor(params: Order) {
    super(params);

    Object.assign(this, params);
  }

  @Exclude()
  user: User;

  @ApiProperty({
    name: 'products',
    isArray: true,
    type: BasketItemWithFullProductDto,
    description: '장바구니 상품',
  })
  products: BasketItemWithFullProductDto[];

  @ApiProperty({
    name: 'restaurant',
    type: Restaurant,
    description: '레스토랑 정보',
  })
  restaurant: Restaurant;

  @ApiProperty({
    name: 'totalPrice',
    description: '총 금액',
    example: 10000,
  })
  totalPrice: number;

  @ApiProperty({
    name: 'createdAt',
    description: '생성일자',
  })
  createdAt: string;
}
