import { applyDecorators } from '@nestjs/common';
import { ApiHeader } from '@nestjs/swagger';

export const ApiBearerTokenHeader = () => {
  return applyDecorators(
    ApiHeader({
      name: 'authorization',
      required: true,
      description: 'Bearer 토큰',
      example: 'Bearer xjvjiwsijzkxcjvoiasdjf',
    }),
  );
};

export const ApiBasicTokenHeader = () => {
  return applyDecorators(
    ApiHeader({
      name: 'authorization',
      required: true,
      description: 'Basic 토큰',
      example: 'Basic xjvjiwsijzkxcjvoiasdjf',
    }),
  );
};
