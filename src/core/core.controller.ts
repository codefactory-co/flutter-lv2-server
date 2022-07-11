import {
  Controller,
  Get,
  Post,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { CoreService } from './core.service';
import { FileInterceptor } from '@nestjs/platform-express';
import * as multer from 'multer';
import { v4 as uuid } from 'uuid';
import { ApiBody, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('core')
@Controller('core')
export class CoreController {
  constructor(private readonly coreService: CoreService) {}

  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: multer.diskStorage({
        destination: function (req, file, cb) {
          cb(null, 'public/uploads');
        },
        filename: function (req, file, cb) {
          const ext = file.mimetype.split('/').reverse()[0];
          cb(null, req.body['fileName']);
        },
      }),
    }),
  )
  @ApiOperation({
    summary: '파일 업로드하기',
  })
  @ApiOkResponse({
    description: '업로드된 파일의 경로',
    schema: {
      properties: {
        fileName: {
          type: 'string',
          description: '파일 경로',
          example: '/img/123123.png',
        },
      },
    },
  })
  @ApiBody({
    schema: {
      properties: {
        file: {
          type: 'string',
          format: 'binary',
          description: '업로드할 파일',
        },
      },
    },
  })
  postUpload(@UploadedFile() file: Express.Multer.File) {
    return {
      fileName: file.filename,
    };
  }
}
