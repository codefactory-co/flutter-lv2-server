import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { v4 as uuidv4 } from 'uuid';
import { Product } from '../product/entities/product.entity';
import { CacheService } from '../cache/cache.service';
import {
  BasketItemDto,
  BasketItemWithFullProductDto,
} from './dto/basket-item.dto';
import { IBasketItem } from './entities/user.entity.interface';

@Injectable()
export class UserService {
  constructor(private cacheService: CacheService) {}

  async findById(id: string) {
    return this.cacheService.users.find((user) => user.id);
  }

  async findByUsername(username: string): Promise<User | undefined> {
    return this.cacheService.users.find((user) => user.username === username);
  }

  async createUser({ username, password }: CreateUserDto) {
    const hasUser = this.cacheService.users.find(
      (user) => user.username === username,
    );

    if (hasUser) {
      throw new BadRequestException('이미 가입한 사용자입니다.');
    }

    if (password.length < 6 || password.length > 20) {
      throw new BadRequestException(
        '비밀번호는 6자 이상 20자 이하로 입력해주세요.',
      );
    }

    const newUser = new User({
      id: uuidv4(),
      username,
      password,
      imageUrl: '/logo/codefactory_logo.png',
      basket: [],
    });

    this.cacheService.users = [...this.cacheService.users, newUser];

    return {
      id: newUser.id,
    };
  }

  getBasket(userId: string): BasketItemWithFullProductDto[] {
    return this.cacheService.users.find((x) => x.id === userId).basket;
  }

  addToBasket(
    userId: string,
    products: BasketItemDto[],
  ): BasketItemWithFullProductDto[] {
    const user = this.cacheService.users.find((x) => x.id === userId);

    user.basket = this._mapBasketDtoToProduct(products);

    return user.basket;
  }

  _mapBasketDtoToProduct(products: BasketItemDto[]) {
    const allProducts = this.cacheService.products;

    return products.map((dto) => ({
      product: allProducts.find((product) => product.id === dto.productId),
      count: dto.count,
    }));
  }
}
