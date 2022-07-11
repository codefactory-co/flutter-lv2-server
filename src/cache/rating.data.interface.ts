import { Rating } from '../rating/entities/rating.entity';

export type IRatingRaw = Omit<Rating, 'id' | 'restaurant' | 'user' | 'imgUrls'>;
