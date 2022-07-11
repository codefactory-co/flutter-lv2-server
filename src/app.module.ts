import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { CacheModule } from './cache/cache.module';
import { RestaurantModule } from './restaurant/restaurant.module';
import { CoreModule } from './core/core.module';
import { RatingModule } from './rating/rating.module';
import { ResponseDelayInterceptor } from './core/interceptor/response-delay.interceptor';
import { OrderModule } from './order/order.module';

@Module({
  imports: [
    AuthModule,
    UserModule,
    ProductModule,
    CacheModule,
    RestaurantModule,
    CoreModule,
    RatingModule,
    OrderModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ResponseDelayInterceptor,
    },
  ],
})
export class AppModule {}
