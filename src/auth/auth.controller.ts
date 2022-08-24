import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { AuthGuard } from '@nestjs/passport';
import { BasicTokenGuard } from './basic-token.guard';
import { BearerTokenGuard, RefreshTokenGuard } from './bearer-token.guard';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { UserService } from '../user/user.service';
import {
  ApiHeader,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import {
  ApiBasicTokenHeader,
  ApiBearerTokenHeader,
} from '../core/decorator/api-bearer-token-header';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @ApiOperation({
    summary: 'Login하기',
  })
  @ApiBasicTokenHeader()
  @ApiOkResponse({
    description: 'Access Token과 Refresh Token',
    schema: {
      properties: {
        accessToken: {
          type: 'string',
          example: 'asdiofjzxl;ckvjoiasjewr.asdfoiasjdflkajsdf.asdfivjiaosdjf',
          description: 'Access Token',
        },
        refreshToken: {
          type: 'string',
          example: 'asdiofjzxl;ckvjoiasjewr.asdfoiasjdflkajsdf.asdfivjiaosdjf',
          description: 'Refresh Token',
        },
      },
    },
  })
  @UseGuards(BasicTokenGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  // @Post('register')
  // register(@Body() createUserDto: CreateUserDto) {
  //   return this.userService.createUser(createUserDto);
  // }

  @ApiOperation({
    summary: 'Token Refresh하기',
  })
  @ApiBearerTokenHeader()
  @ApiOkResponse({
    description: 'Access Token',
    schema: {
      properties: {
        accessToken: {
          type: 'string',
          example: 'asdiofjzxl;ckvjoiasjewr.asdfoiasjdflkajsdf.asdfivjiaosdjf',
          description: 'Access Token',
        },
      },
    },
  })
  @UseGuards(RefreshTokenGuard)
  @Post('token')
  async token(@Request() req) {
    return {
      accessToken: await this.authService.rotateAccessToken(req.token),
    };
  }
}
