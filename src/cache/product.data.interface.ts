import { Product } from '../product/entities/product.entity';

export type IProductRaw = Omit<Product, 'id' | 'restaurantId' | 'restaurant'>;
