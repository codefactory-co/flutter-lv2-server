import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Request,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AccessTokenGuard, BearerTokenGuard } from '../auth/bearer-token.guard';
import { User } from './entities/user.entity';
import { Product } from '../product/entities/product.entity';
import {
  BasketItemDto,
  BasketItemWithFullProductDto,
} from './dto/basket-item.dto';
import { IBasketItem } from './entities/user.entity.interface';
import { PatchMeBasketDto } from './dto/patch-me-basket.dto';
import {
  ApiBody,
  ApiHeader,
  ApiOkResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ApiBearerTokenHeader } from '../core/decorator/api-bearer-token-header';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(BearerTokenGuard)
  @Get('me')
  @ApiOperation({
    summary: '토큰을 기준으로 현재 사용자 정보를 가져옵니다.',
  })
  @ApiOkResponse({
    description: '사용자 가져오기 성공',
    type: User,
  })
  @ApiBearerTokenHeader()
  async getMe(@Request() req): Promise<User> {
    return this.userService.findById(req.user.id);
  }

  @UseGuards(AccessTokenGuard)
  @Get('me/basket')
  @ApiOperation({
    summary: '현재 사용자의 장바구니를 가져옵니다.',
  })
  @ApiOkResponse({
    description: '장바구니 가져오기 성공',
    type: BasketItemWithFullProductDto,
    isArray: true,
  })
  @ApiBearerTokenHeader()
  async getMeBasket(@Request() req): Promise<BasketItemWithFullProductDto[]> {
    return this.userService.getBasket(req.user.id);
  }

  @UseGuards(AccessTokenGuard)
  @Patch('me/basket')
  @ApiOperation({
    summary: '현재 사용자의 장바구니를 업데이트합니다.',
  })
  @ApiOkResponse({
    description: '장바구니 업데이트 성공',
    type: BasketItemWithFullProductDto,
    isArray: true,
  })
  @ApiBody({
    type: PatchMeBasketDto,
  })
  async patchMeBasket(
    @Request() req,
    @Body() body: PatchMeBasketDto,
  ): Promise<BasketItemWithFullProductDto[]> {
    console.log(req.body);
    console.log(body);
    return this.userService.addToBasket(req.user.id, body.basket);
  }
}
