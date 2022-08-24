import { BaseEntity } from '../../core/entity/base.entity';
import { Transform } from 'class-transformer';
import { Product } from '../../product/entities/product.entity';
import { ApiProperty } from '@nestjs/swagger';

export enum RestaurantPriceRange {
  cheap = 'cheap',
  medium = 'medium',
  expensive = 'expensive',
}

export class RestaurantProduct extends BaseEntity {
  constructor(params: RestaurantProduct) {
    super(params);

    this.name = params.name;
    this.detail = params.detail;
    this.imgUrl = params.imgUrl;
    this.price = params.price;
  }

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

export class Restaurant extends BaseEntity {
  constructor(params: Restaurant) {
    super(params);

    this.name = params.name;
    this.thumbUrl = params.thumbUrl;
    this.tags = params.tags;
    this.priceRange = params.priceRange;
    this.ratings = params.ratings;
    this.ratingsCount = params.ratingsCount;
    this.deliveryTime = params.deliveryTime;
    this.deliveryFee = params.deliveryFee;
  }

  @ApiProperty({
    name: 'name',
    description: '이름',
    example: '우라나라에서 가장 맛있는 짜장면집',
  })
  name: string;

  @Transform(({ value }) => `/img/${value}`)
  @ApiProperty({
    name: 'thumbUrl',
    description: '썸네일 URL',
    example: '/img/thumb.png',
  })
  thumbUrl: string;

  @ApiProperty({
    name: 'tags',
    description: '레스토랑 태그들',
    example: ['신규', '세일중'],
    type: String,
    isArray: true,
  })
  tags: string[];

  @ApiProperty({
    name: 'priceRange',
    description: '가격대',
    example: 'cheap',
  })
  priceRange: RestaurantPriceRange;

  @ApiProperty({
    name: 'ratings',
    description: '별점',
    example: 4.89,
  })
  ratings: number;

  @ApiProperty({
    name: 'ratingsCount',
    description: '별점 갯수',
    example: 200,
  })
  ratingsCount: number;

  @ApiProperty({
    name: 'deliveryTime',
    description: '배달시간 (분)',
    example: 20,
  })
  deliveryTime: number;

  @ApiProperty({
    name: 'deliveryFee',
    description: '배달료',
    example: 3000,
  })
  deliveryFee: number;
}

export class RestaurantDetail extends Restaurant {
  constructor(params: RestaurantDetail) {
    super(params);

    this.detail = params.detail;
    this.products = params.products;
  }

  // 매장 설명
  @ApiProperty({
    name: 'detail',
    description: '레스토랑 설명',
    example: '오늘 주문하면 배송비 3000원 할인!',
  })
  detail: string;

  @ApiProperty({
    name: 'products',
    description: '판매 상품들',
    isArray: true,
    type: RestaurantProduct,
  })
  products: RestaurantProduct[];
}
