import { BaseEntity } from '../../core/entity/base.entity';
import { Restaurant } from '../../restaurant/entities/restaurant.entity';
import { Transform } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class OrderProduct extends BaseEntity {
  constructor(params: OrderProduct) {
    super(params);

    this.name = params.name;
    this.detail = params.detail;
    this.imgUrl = params.imgUrl;
    this.price = params.price;
  }

  @ApiProperty({
    name: 'name',
    description: '이름',
    example: '떡볶이',
  })
  name: string;

  @Transform(({ value }) => `/img/${value}`)
  @ApiProperty({
    name: 'imgUrl',
    description: '이미지 URL',
    example: '/img/img.png',
  })
  imgUrl: string;

  @ApiProperty({
    name: 'detail',
    description: '상품 상세설명',
    example: '맛있는 떡볶이',
  })
  detail: string;

  @ApiProperty({
    name: 'price',
    description: '가격',
    example: 8000,
  })
  price: number;
}
