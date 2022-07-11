import { ApiProperty } from '@nestjs/swagger';

export class CreateRatingDto {
  @ApiProperty({
    name: 'restaurantId',
    description: '레스토랑 ID',
    example: '1952a209-7c26-4f50-bc65-086f6e64dbbd',
  })
  restaurantId: string;

  @ApiProperty({
    name: 'rating',
    description: '평점',
    example: 5,
  })
  rating: number;

  @ApiProperty({
    name: 'content',
    description: '평가 내용',
    example: '맛있어요~',
  })
  content: string;

  // image path
  @ApiProperty({
    isArray: true,
    name: 'imageNames',
    description: '이미지 이름들',
    example: ['img/img.png', 'img/img2.png'],
  })
  imageNames: string[];
}
