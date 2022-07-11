import {
  BadRequestException,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class BasicTokenGuard implements CanActivate {
  constructor(private readonly authService: AuthService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest();

    const rawToken = req.headers['authorization'];

    if (!rawToken) {
      throw new BadRequestException('토큰이 없습니다.');
    }

    const splitToken = rawToken.split(' ');

    if (splitToken.length !== 2 || splitToken[0] !== 'Basic') {
      throw new ForbiddenException('잘못된 토큰입니다.');
    }

    const token = splitToken[1];

    const decoded = Buffer.from(token, 'base64').toString('utf8');

    const split = decoded.split(':');

    if (split.length !== 2) {
      throw new BadRequestException('잘못된 토큰입니다.');
    }

    const username = split[0];
    const password = split[1];

    const user = await this.authService.authenticate(username, password);

    if (!user) {
      throw new ForbiddenException('비밀번호가 틀렸습니다.');
    }

    req.user = user;

    return true;
  }
}
