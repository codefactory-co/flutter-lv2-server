import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { CacheService } from '../cache/cache.service';
import { User } from '../user/entities/user.entity';
import { Order } from './entities/order.entity';
import { CoreService } from '../core/core.service';
import { PaginationDto } from '../core/dto/pagination.dto';
import { Pagination } from '../core/entity/pagination.entity';
import { OrderProduct } from './entities/order-product-entity';

@Injectable()
export class OrderService {
  constructor(
    private cacheService: CacheService,
    private coreService: CoreService,
  ) {}

  paginateOrders(user: User, paginationDto: PaginationDto): Pagination<Order> {
    const result = this.coreService.paginate(
      this.cacheService.orders,
      paginationDto,
    );

    return {
      ...result,
      data: result.data.map((item) => new Order(item)),
    };
  }

  postOrder(user: User, createOrderDto: CreateOrderDto): Order {
    const newOrder = new Order({
      id: createOrderDto.id,
      user,
      restaurant: this.cacheService.products.find(
        (x) => createOrderDto.products[0].productId === x.id,
      ).restaurant,
      products: createOrderDto.products.map((basketItem) => ({
        product: new OrderProduct(
          this.cacheService.products.find(
            (product) => basketItem.productId === product.id,
          ),
        ),
        count: basketItem.count,
      })),
      totalPrice: createOrderDto.totalPrice,
      createdAt: createOrderDto.createdAt,
    });

    this.cacheService.orders = [newOrder, ...this.cacheService.orders];

    return newOrder;
  }
}
