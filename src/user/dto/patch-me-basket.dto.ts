import { BasketItemDto } from './basket-item.dto';
import { ApiProperty } from '@nestjs/swagger';
import {
  ArrayNotEmpty,
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

export class PatchMeBasketDtoBasket {
  @ApiProperty({
    name: 'productId',
    description: '상품의 ID',
    example: '1952a209-7c26-4f50-bc65-086f6e64dbbd',
  })
  @IsString()
  productId: string;
  @ApiProperty({
    name: 'count',
    description: '장바구니에 넣을 갯수',
    example: 10,
  })
  @IsNumber()
  count: number;
}

export class PatchMeBasketDto {
  @ApiProperty({
    name: 'basket',
    type: [PatchMeBasketDtoBasket],
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(()=> PatchMeBasketDtoBasket)
  basket: PatchMeBasketDtoBasket[];
}
