import { Controller, Get } from '@nestjs/common';

@Controller('user-info')
export class UserInfoController {
  @Get()
  findAll() {
    return 'user info controller';
  }
}
