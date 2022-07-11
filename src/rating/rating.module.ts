import { Module } from '@nestjs/common';
import { RatingService } from './rating.service';
import { RatingController } from './rating.controller';
import { AuthModule } from '../auth/auth.module';
import { CoreModule } from '../core/core.module';
import { CacheModule } from '../cache/cache.module';

@Module({
  imports: [AuthModule, CoreModule, CacheModule],
  controllers: [RatingController],
  providers: [RatingService],
  exports: [RatingService],
})
export class RatingModule {}
