import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { AuthModule } from '../auth/auth.module';
import { UserModule } from '../user/user.module';
import { CacheModule } from '../cache/cache.module';
import { CoreModule } from '../core/core.module';

@Module({
  imports: [AuthModule, UserModule, CacheModule, CoreModule],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
