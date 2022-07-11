import {
  Restaurant,
  RestaurantDetail,
} from '../restaurant/entities/restaurant.entity';

export type IRestaurantRaw = Omit<
  RestaurantDetail,
  'id' | 'ratings' | 'ratingsCount' | 'products'
>;
