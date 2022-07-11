import { Injectable } from '@nestjs/common';
import {
  chicken,
  ddeokBokGi,
  friedRice,
  italian,
  mexican,
  noodles,
  steak,
  sushi,
} from './product.data';
import { Product } from '../product/entities/product.entity';
import { v5 as uuidv5, v4 as uuidv4 } from 'uuid';
import {
  Restaurant,
  RestaurantDetail,
} from '../restaurant/entities/restaurant.entity';
import { restaurants } from './restaurant.data';
import { Rating } from '../rating/entities/rating.entity';
import { User } from '../user/entities/user.entity';
import { faker } from '@faker-js/faker';
import { fiveStarRatings, fourStarRatings } from './rating.data';
import { Order } from '../order/entities/order.entity';

const uuidNamespace = '6dbe4c21-009b-4b22-a9be-1c3eca2bc9ea';

@Injectable()
export class CacheService {
  constructor() {
    this.createUsers();
    this.createRestaurants();
    this.createProducts();
    this.createRatings();
  }

  users: User[] = [
    new User({
      id: 'f55b32d2-4d68-4c1e-a3ca-da9d7d0d92e5',
      username: 'test@codefactory.ai',
      password: 'testtest',
      imageUrl: '/logo/codefactory_logo.png',
      basket: [],
    }),
  ];

  orders: Order[] = [];

  ratings: Rating[] = [];

  restaurants: RestaurantDetail[] = [];

  products: Product[] = [];

  createProducts() {
    for (const restaurant of this.restaurants) {
      let products = [];

      switch (restaurant.name) {
        case '불타는 떡볶이':
          products = ddeokBokGi;
          break;

        case '매콤 멕시칸':
          products = mexican;
          break;

        case '엄마손 볶음밥':
          products = friedRice;
          break;

        case '신선 코팩 스시':
          products = sushi;
          break;

        case '사나이 대왕 스테이크':
          products = steak;
          break;

        case '현지맛 미미 쌀국수':
          products = noodles;
          break;

        case '불타는 냠냠 치킨':
          products = chicken;
          break;

        case '크리미 꾸덕 파스타':
          products = italian;
          break;

        default:
          break;
      }

      products = products.map(
        (item) =>
          new Product({
            id: uuidv4(),
            restaurant: new Restaurant(restaurant),
            ...item,
          }),
      );

      restaurant.products = products;

      this.products = [...this.products, ...products];
    }
  }

  getImagesByRestaurantName(name: string) {
    let images = [];

    switch (name) {
      case '불타는 떡볶이':
        images = ddeokBokGi.map((item) => item.imgUrl);
        break;

      case '매콤 멕시칸':
        images = mexican.map((item) => item.imgUrl);
        break;

      case '엄마손 볶음밥':
        images = friedRice.map((item) => item.imgUrl);
        break;

      case '신선 코팩 스시':
        images = sushi.map((item) => item.imgUrl);
        break;

      case '사나이 대왕 스테이크':
        images = steak.map((item) => item.imgUrl);
        break;

      case '현지맛 미미 쌀국수':
        images = noodles.map((item) => item.imgUrl);
        break;

      case '불타는 냠냠 치킨':
        images = chicken.map((item) => item.imgUrl);
        break;

      case '크리미 꾸덕 파스타':
        images = italian.map((item) => item.imgUrl);
        break;

      default:
        break;
    }

    return images;
  }

  createRestaurants() {
    const raws = new Array(100).fill(0).map(
      (_, index) =>
        new RestaurantDetail({
          id: uuidv5(`restaurant_${index}`, uuidNamespace),
          ratings: 5,
          ratingsCount: 100,
          products: [],
          ...restaurants[index % restaurants.length],
        }),
    );

    this.restaurants = raws;
  }

  createRatings() {
    const allRatings = [...fiveStarRatings, ...fourStarRatings];

    for (const restaurant of this.restaurants) {
      const randomInt = this.getRandomInt(100, 200);

      const indexArr = new Array(randomInt).fill(0).map((_, index) => {
        const randomImages = this.getImagesByRestaurantName(restaurant.name);
        randomImages.sort(() => Math.random() - 0.5);

        return new Rating({
          id: uuidv4(),
          restaurant: restaurant,
          imgUrls: index % 2 === 1 ? randomImages.slice(0, 5) : [],
          user: this.users[index % this.users.length],
          ...allRatings[index % allRatings.length],
        });
      });

      this.ratings = [...this.ratings, ...indexArr];
    }

    this.restaurants = this.restaurants.map(
      (restaurant) =>
        new RestaurantDetail({
          ...restaurant,
          ratings: +this.ratings
            .filter((rating) => rating.restaurant.id === restaurant.id)
            .reduce(
              (average, value, index, { length }) =>
                index === length - 1
                  ? (average + value.rating) / length
                  : average + value.rating,
              0,
            )
            .toFixed(2),
        }),
    );
  }

  createUsers() {
    for (let i = 0; i < 10000; i++) {
      this.users = [
        ...this.users,
        new User({
          id: uuidv4(),
          username: faker.internet.email(),
          password: faker.datatype.string(16),
          imageUrl: '/logo/codefactory_logo.png',
          basket: [],
        }),
      ];
    }
  }

  getRandomInt(min, max): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
}
