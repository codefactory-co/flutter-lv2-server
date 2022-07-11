import { Exclude, Transform } from 'class-transformer';
import { BaseEntity } from '../../core/entity/base.entity';
import { Restaurant } from '../../restaurant/entities/restaurant.entity';
import { ValidateNested } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class Product extends BaseEntity {
  constructor(params: Product) {
    super(params);

    this.restaurant = params.restaurant;
    this.name = params.name;
    this.detail = params.detail;
    this.imgUrl = params.imgUrl;
    this.price = params.price;
  }

  @ApiProperty({
    name: 'restaurant',
    description: '레스토랑',
    type: Restaurant,
  })
  restaurant: Restaurant;

  @ApiProperty({
    name: 'name',
    description: '이름',
    example: '마라맛 코팩 떡볶이',
  })
  name: string;

  @Transform(({ value }) => `/img/${value}`)
  @ApiProperty({
    name: 'imgUrl',
    description: '이미지 링크',
    example: '/img/img.png',
  })
  imgUrl: string;

  @ApiProperty({
    name: 'detail',
    description: '상품설명',
    example: '서울에서 두번째로 맛있는 떡볶이집! 리뷰 이벤트 진행중~',
  })
  detail: string;

  @ApiProperty({
    name: 'price',
    description: '가격',
    example: 8000,
  })
  price: number;
}
