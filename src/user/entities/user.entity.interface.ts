import { Product } from '../../product/entities/product.entity';
import { OrderProduct } from '../../order/entities/order-product-entity';

export interface IBasketItem {
  product: OrderProduct;

  count: number;
}
