import { BaseEntity } from '../../core/entity/base.entity';
import { Exclude, Transform } from 'class-transformer';
import { Product } from '../../product/entities/product.entity';
import {
  BasketItemDto,
  BasketItemWithFullProductDto,
} from '../dto/basket-item.dto';
import { IBasketItem } from './user.entity.interface';
import { ApiProperty } from '@nestjs/swagger';

export class User extends BaseEntity {
  constructor(params: User) {
    super(params);

    Object.assign(this, params);
  }

  @ApiProperty({
    name: 'username',
    description: '사용자 이메일',
    example: 'test@codefactory.ai',
  })
  username: string;

  @Transform(({ value }) => `/img/${value}`)
  @ApiProperty({
    name: 'imageUrl',
    description: '프로필 이미지 URL',
    example: '/img/logo.png',
  })
  imageUrl: string;

  @Exclude()
  basket: BasketItemWithFullProductDto[];

  @Exclude()
  password: string;
}
