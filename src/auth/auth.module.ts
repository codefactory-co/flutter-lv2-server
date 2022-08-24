import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from '../user/user.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { CacheModule } from '../cache/cache.module';

@Module({
  imports: [
    UserModule,
    PassportModule,
    CacheModule,
    JwtModule.register({
      secret: 'codefactory',
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService, UserModule],
})
export class AuthModule {}
