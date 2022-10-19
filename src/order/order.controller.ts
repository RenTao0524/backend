import { Controller, Get } from '@nestjs/common';

@Controller('order')
export class OrderController {
  @Get()
  findAll() {
    return 'order controller';
  }
}
