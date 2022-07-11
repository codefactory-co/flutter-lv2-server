import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { CacheModule } from '../cache/cache.module';
import { AuthModule } from '../auth/auth.module';
import { CoreModule } from '../core/core.module';

@Module({
  controllers: [OrderController],
  providers: [OrderService],
  imports: [CacheModule, AuthModule, CoreModule],
})
export class OrderModule {}
