import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @IsEmail(
    {},
    {
      message: '정확한 이메일을 입력해주세요.',
    },
  )
  username: string;

  @Length(6, 20, {
    message: '비밀번호는 6에서 20자를 입력해주세요.',
  })
  password: string;
}
