import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  NotFoundException,
  Query,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './entities/product.entity';
import { AccessTokenGuard } from '../auth/bearer-token.guard';
import { PaginationDto } from '../core/dto/pagination.dto';
import { Pagination } from '../core/entity/pagination.entity';
import {
  ApiBody,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { ApiPaginatedOkResponseDecorator } from '../core/decorator/api-paginated-ok-response.decorator';
import { ApiBearerTokenHeader } from '../core/decorator/api-bearer-token-header';

@ApiTags('product')
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @ApiOperation({
    summary: '상품 Pagination',
  })
  @ApiPaginatedOkResponseDecorator(Product, {
    description: 'Pagination 결과',
  })
  @ApiBody({
    type: PaginationDto,
  })
  @UseGuards(AccessTokenGuard)
  @Get()
  paginateProducts(@Query() paginationDto: PaginationDto): Pagination<Product> {
    return this.productService.paginateProducts(paginationDto);
  }

  @UseGuards(AccessTokenGuard)
  @Get(':pid')
  @ApiOperation({
    summary: '개별 상품 가져오기',
  })
  @ApiParam({
    name: 'pid',
    description: '가져올 상품 ID',
    example: '1952a209-7c26-4f50-bc65-086f6e64dbbd',
  })
  @ApiOkResponse({
    description: '응답 성공',
    type: Product,
  })
  getProduct(@Param('pid') pid: string): Product {
    const product = this.productService.getProductById(pid);

    if (!product) {
      throw new NotFoundException('존재하지 않는 상품입니다.');
    }

    return product;
  }
}
